# Takeaway Token Recovery — Design & Procedure

> **Status as of 2026-05-15:** Playwright auto-renewal (Task 8) is **deferred**. The current setup relies on rolling refresh_token rotation and 7-day expiry alerts. Manual recovery procedure documented below.

## Why Task 8 was deferred

The original plan called for a headless Playwright script on VPS that auto-renews the refresh_token by logging in with credentials when it nears expiry.

During API discovery we confirmed:

1. **Keycloak login form has reCAPTCHA enforced server-side.** Even with stealth flags (`--disable-blink-features=AutomationControlled`, custom user-agent, `navigator.webdriver = undefined`), the CAPTCHA triggers after credential submission.
2. **Submitting via direct HTTP POST also fails** with `"Invalid Recaptcha"` error from the Keycloak `login-actions/authenticate` endpoint.
3. **Headless Chrome cannot solve image CAPTCHAs.** External solving services (2captcha, etc.) require paid integration and add latency.

Implementing Playwright login as planned would create a workflow that **fails every run** and inserts false-positive DLQ alerts.

## What we use instead

**Rolling token rotation:**
- access_token TTL: 300s (5 min) — refreshed by the poller every 3-4 cycles
- refresh_token TTL: 2,592,000s (30 days) — **rotated on every refresh** (Keycloak setting)
- As long as the poller runs at least every 30 days, the refresh_token never expires

**Expiry monitoring (Task 13):** When `takeaway_tokens.refresh_expires_at < NOW() + 7 days`, an alert is inserted into `dlq_alerts` with `queue_name='takeaway_token_expiry'`. Dashboard surfaces this to the admin in advance, leaving time for manual recovery.

## Manual recovery procedure

When you receive a `takeaway_token_expiry` alert, follow these steps:

### Step 1: Login via browser

1. Open `https://live-orders.takeaway.com` in Chrome (or any modern browser)
2. Open **DevTools** → **Network** tab → filter: `token`
3. Log in with the `defrietbooster` account (solve CAPTCHA if shown)
4. Wait for the POST to `partner-hub.justeattakeaway.com/auth/realms/restaurant/protocol/openid-connect/token` to complete (status 200)
5. Click that request → **Response** tab → copy the full JSON

### Step 2: Update database

Run this in Supabase SQL editor (replace `<REFRESH_TOKEN>` with the new value):

```sql
UPDATE takeaway_tokens SET
  refresh_token       = '<REFRESH_TOKEN>',
  access_token        = '<ACCESS_TOKEN>',
  token_expires_at    = NOW() + INTERVAL '5 minutes',
  refresh_expires_at  = NOW() + INTERVAL '30 days',
  updated_at          = now()
WHERE account_name = 'defrietbooster';
```

### Step 3: Verify

The next poll execution (within 5 min) should refresh the access_token successfully and process any new orders. Check:

```sql
SELECT account_name, token_expires_at, refresh_expires_at, updated_at
FROM takeaway_tokens;
```

`refresh_expires_at` should now be ~30 days in the future.

## Future Playwright implementation (if needed)

If full automation becomes necessary, the **storage-state approach** sidesteps the CAPTCHA:

### Design

1. **One-time manual setup:**
   - Admin SSHs to VPS
   - Runs `playwright codegen live-orders.takeaway.com` interactively with X11/VNC
   - Logs in (solves CAPTCHA once)
   - Saves browser state with `context.storage_state(path='/opt/frituur-os/scripts/takeaway-session.json')`

2. **Automated refresh script** loads the saved storage state:
   ```python
   from playwright.sync_api import sync_playwright

   with sync_playwright() as p:
       browser = p.chromium.launch(headless=True)
       context = browser.new_context(storage_state='takeaway-session.json')
       page = context.new_page()

       captured = None
       def on_response(response):
           nonlocal captured
           if 'openid-connect/token' in response.url and response.status == 200:
               captured = response.json()

       page.on('response', on_response)
       page.goto('https://live-orders.takeaway.com')
       page.wait_for_timeout(10000)

       # Save updated state (cookies may have rotated)
       context.storage_state(path='takeaway-session.json')
       browser.close()

       if captured:
           # POST to Supabase to update takeaway_tokens
           ...
   ```

3. **n8n workflow** schedules this script weekly (every Sunday 3am) and updates `takeaway_tokens`.

### Why this works

The `KEYCLOAK_IDENTITY` cookie has a 20-year expiry (`exp: 2409488666` ≈ Feb 2046) and the `KEYCLOAK_REMEMBER_ME` cookie persists the username. Loading a valid storage state into a fresh browser context **skips the login form entirely** — the page sees a valid session and immediately redirects to `/orders`, triggering the OAuth code-for-token exchange automatically.

### Implementation notes for the future

- The storage state file must be writable by the script (it gets updated on each run as cookies rotate)
- Periodic backup of `takeaway-session.json` is recommended
- If the saved session expires or gets invalidated (e.g., password change, force logout), the script fails and triggers a `takeaway_token_expiry` alert → admin re-runs the manual setup
- Estimated effort: 1 day to implement + test + document
