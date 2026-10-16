# Srova live pipeline monitor (VPS)

`/usr/local/bin/srova_live_monitor.sh` — runs detached on `vps-ghysels`, one tick per minute,
appends **only anomalies** to `/var/log/srova_live_monitor.log` (+ a HEARTBEAT every 10 min):

| Tag | Meaning |
|---|---|
| `QUEUE` | `q_orders_normalize` / `q_orders_push_ls` / `q_orders_push_shipday` deeper than 5 or oldest message > 120 s |
| `STUCK` | an order still in `received/normalized/pushing_ls/ls_sent` 3 min after creation |
| `TILL` | the receipt watchdog saw a receipt the till did not take (`NEW` / `WAITINGFORPAYMENT` / `ACCEPTED`) |
| `ALERT` | a new `dlq_alerts` row (except `takeaway_poll_silent`) |
| `N8N-ERROR` | an errored execution of an order workflow |
| `HEARTBEAT` | orders last hour, how many reached the POS, queue depths, load |

Silence means the pipeline is healthy. Start/restart:

```bash
# runs as a systemd service since 2026-10-16 (survives SSH disconnects and reboots)
ssh vps-ghysels 'systemctl restart srova-live-monitor.service; systemctl is-active srova-live-monitor.service'
ssh vps-ghysels 'tail -F /var/log/srova_live_monitor.log'
```

Added 2026-10-16 after the bulk-fulfill flood exposed two silent bottlenecks (see the commits of that evening).
