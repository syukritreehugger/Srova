# n8n Workflow IDs — Takeaway Integration

| Workflow | ID | Purpose |
|----------|-----|---------|
| `takeaway_refresh_access_token` | `q1r0qcOalSrhzlrq` | Sub-workflow called by poller. Returns valid access_token. Caches in `takeaway_tokens` with 30s pre-expiry buffer. |
| `takeaway_poll_orders` | TBD (Task 7) | Schedule 90s. Polls Takeaway history → normalizes → enqueues to `q_orders_push_ls`. |
| `takeaway_playwright_login` | TBD (Task 8) | Weekly fallback for refresh_token renewal via headless browser login. |

## Token refresh workflow logic

```
[Manual Trigger | Execute Workflow Trigger]
            ↓
       [Load Token]  (SELECT from takeaway_tokens WHERE account_name='defrietbooster')
            ↓
   [Check Token Fresh]  (sets is_fresh = expires > now+30s)
            ↓
      [IF Token Fresh]
        TRUE ↓                FALSE ↓
[Return Cached Token]   [POST /openid-connect/token]
                                ↓
                         [Save New Token]  (UPSERT with rotated refresh_token)
                                ↓
                         [Return Refreshed Token]
```

Output shape (both paths):
```json
{ "access_token": "eyJ...", "source": "cached|refreshed", "account_name": "defrietbooster", "location_key": "LOC_BERLARE" }
```

## Notes

- **Token TTLs**: access_token expires in 300s (5 min), refresh_token expires in 2,592,000s (30 days). Keycloak rotates refresh_token on each refresh — `Save New Token` uses `COALESCE(NULLIF(...))` to preserve old token if response is missing it.
- **Cache buffer**: 30 seconds. Each poll cycle triggers a refresh only if access_token is within 30s of expiry. With 5-min TTL and 90s poll interval, refresh happens roughly every 3-4 poll cycles.
- **SQL safety**: JWT tokens are base64url (alphanumeric + `.`, `-`, `_`). No quote escaping needed for inline embedding.
- **Sub-workflow invocation**: From the poller's perspective, use Execute Workflow node pointing to ID `q1r0qcOalSrhzlrq`. The trigger has `inputSource: passthrough` so no specific input fields are required.
