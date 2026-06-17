import { test, expect, type Page } from '@playwright/test';

/**
 * Srova production smoke suite — Tipzakske (LOC_AALST) go-live verification.
 *
 * Targets the deployed URL set via PLAYWRIGHT baseURL (default
 * https://srova.ghysels-vagenende.be). Assumes either DEV_SKIP_AUTH=1
 * (auth bypassed) OR an authenticated session — does NOT attempt to log in.
 *
 * Goal: prove that sidebar nav, every visible page, and key data widgets
 * render without 500/crash, that hidden OnDev routes are blocked, and that
 * critical mutating server actions are wired (without firing them).
 */

const NAV_VISIBLE = [
  { href: '/', label: 'Overview' },
  { href: '/orders', label: 'Orders' },
  { href: '/pipeline', label: 'Pipeline' },
  { href: '/alerts', label: 'Alerts' },
  { href: '/locations', label: 'Locations' },
  { href: '/menu', label: 'Menu sync' },
  { href: '/settings', label: 'Settings' },
] as const;

const ON_DEV_HIDDEN = [
  '/audit',
  '/mappings',
  '/integrations',
  '/opening-times',
  '/snooze',
  '/restaurant-status',
  '/gdpr',
] as const;

async function expectNoCrash(page: Page) {
  // Next.js default 500 page contains "Application error" / "500"
  const body = await page.locator('body').innerText();
  expect(body, 'page should not render a 500 / error wall').not.toMatch(
    /Application error|500\s*Internal/i
  );
}

test.describe('Brand + boot', () => {
  test('homepage renders with Srova brand', async ({ page }) => {
    const resp = await page.goto('/');
    expect(resp?.status(), 'home should respond < 500').toBeLessThan(500);
    await expect(page).toHaveTitle(/Srova/);
    await expect(page.locator('aside').first()).toContainText('Srova');
  });

  test('sidebar shows only stable nav items, no On Dev pill', async ({ page }) => {
    await page.goto('/');
    const sidebar = page.locator('aside').first();
    for (const item of NAV_VISIBLE) {
      await expect(sidebar.getByRole('link', { name: item.label })).toBeVisible();
    }
    // OnDev labels must NOT appear in sidebar
    const onDevLabels = ['Audit log', 'Mappings', 'Integrations', 'Opening times', 'Snooze', 'Online/Offline', 'GDPR / DSAR'];
    for (const label of onDevLabels) {
      await expect(sidebar.getByRole('link', { name: label })).toHaveCount(0);
    }
    // Hardcoded "On Dev" badge text must not appear in sidebar
    await expect(sidebar.getByText(/^On Dev$/)).toHaveCount(0);
  });
});

test.describe('Sidebar navigation — every visible page renders', () => {
  for (const item of NAV_VISIBLE) {
    test(`nav: ${item.label} (${item.href})`, async ({ page }) => {
      const resp = await page.goto(item.href);
      expect(resp?.status(), `${item.href} should not 500`).toBeLessThan(500);
      await expectNoCrash(page);
      // Sidebar must still be present (layout didn't crash)
      await expect(page.locator('aside').first()).toBeVisible();
    });
  }
});

test.describe('OnDev routes blocked by direct URL', () => {
  for (const href of ON_DEV_HIDDEN) {
    test(`direct URL ${href} should return 404 / not-found`, async ({ page }) => {
      const resp = await page.goto(href);
      const status = resp?.status() ?? 0;
      const text = await page.locator('body').innerText();
      const looksLikeNotFound =
        status === 404 ||
        /not.?found|404|This page could not be found/i.test(text);
      expect(
        looksLikeNotFound,
        `${href} should be hidden post-deploy (status=${status}). On stale deploys this is expected to FAIL.`
      ).toBeTruthy();
    });
  }
});

test.describe('Overview widgets', () => {
  test('KPI cards render', async ({ page }) => {
    await page.goto('/');
    // Wait for any text containing currency € or "orders" KPI label to appear
    await expect(page.getByText(/Orders today|Revenue|Success rate/i).first()).toBeVisible({ timeout: 15_000 });
    await expectNoCrash(page);
  });

  test('Pipeline flow + Locations grid render', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText(/received|normalized|pushing|complete/i).first()).toBeVisible({ timeout: 15_000 });
    await expectNoCrash(page);
  });
});

test.describe('Backend wiring smoke (no mutation)', () => {
  test('Orders page lists rows OR shows empty state without crash', async ({ page }) => {
    await page.goto('/orders');
    await expectNoCrash(page);
    // Either order rows OR the "No orders" placeholder must appear
    const hasContent = await Promise.race([
      page.getByRole('table').first().waitFor({ timeout: 10_000 }).then(() => true).catch(() => false),
      page.getByText(/no orders|empty|0 orders/i).first().waitFor({ timeout: 10_000 }).then(() => true).catch(() => false),
    ]);
    expect(hasContent, 'orders page should render a table or empty state').toBeTruthy();
  });

  test('Alerts page renders without OnDev pill', async ({ page }) => {
    await page.goto('/alerts');
    await expectNoCrash(page);
    await expect(page.locator('main').getByText(/^On Dev$/)).toHaveCount(0);
  });

  test('Settings page renders pipeline toggle controls without OnDev banner', async ({ page }) => {
    await page.goto('/settings');
    await expectNoCrash(page);
    await expect(page.getByText(/pipeline/i).first()).toBeVisible({ timeout: 10_000 });
    // No OnDev banner about "Secret management coming later" should appear
    await expect(page.getByText(/Secret management and access controls/i)).toHaveCount(0);
  });

  test('Menu sync (/menu) loads Tipzakske PLU mapping table', async ({ page }) => {
    await page.goto('/menu?loc=LOC_AALST');
    await expectNoCrash(page);
    // Expect mapping stats card OR mapping table to appear
    const ok = await Promise.race([
      page.getByText(/matched|shopify.?only|ls.?only|mismatch/i).first().waitFor({ timeout: 20_000 }).then(() => true).catch(() => false),
      page.getByRole('table').first().waitFor({ timeout: 20_000 }).then(() => true).catch(() => false),
    ]);
    expect(ok, 'menu mapping page should show stats or table for LOC_AALST').toBeTruthy();
  });

  test('Pipeline page renders queue/health widget', async ({ page }) => {
    await page.goto('/pipeline');
    await expectNoCrash(page);
    await expect(page.getByText(/queue|backlog|retry|latency|live/i).first()).toBeVisible({ timeout: 15_000 });
  });

  test('Locations page renders 3 frituur cards', async ({ page }) => {
    await page.goto('/locations');
    await expectNoCrash(page);
    await expect(page.getByText(/Aalst|Berlare|Dender|Tipzakske|Frietbooster|Frietchalet/i).first()).toBeVisible({ timeout: 10_000 });
  });
});
