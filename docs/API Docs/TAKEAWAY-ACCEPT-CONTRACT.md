exists in any inspected slice. **Never blind-retry an accept** — a retry after a lost response may 403, 422,
or succeed and overwrite the customer's promised time (`can_change_confirmed_time_of_order` is *true* once an
order is `confirmed`). On timeout: **re-check, then alert** — never retry.

> **2026-09-13 17:50–18:55:** JET answered `500 {"message":"Server Error"}` or timed out (10 s) on six accepts
> across Aalst and Dender, yet had processed every one of them: `confirmed_at` equalled our push minute and all
> six printed. A non-2xx/timeout is therefore *not* proof of failure. `Flag Accept Failure` now does one
> `GET /orders/{id}` before alarming; if the order has left `new` the accept landed (`accepted_despite_error`)
> and no alert is raised. Only a still-`new` order, or an unreachable re-check, alarms.