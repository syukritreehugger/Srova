"use client"

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import type { HourlyOrders } from "@/lib/queries/dashboard"

export function OrdersChart({ data }: { data: HourlyOrders[] }) {
  const total = data.reduce((acc, d) => acc + d.shopify + d.takeaway, 0)
  const totalShopify = data.reduce((acc, d) => acc + d.shopify, 0)
  const totalTakeaway = data.reduce((acc, d) => acc + d.takeaway, 0)

  return (
    <div className="card-elevated rounded-2xl border border-border bg-card p-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            Order volume — last 24h
          </div>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-[28px] font-semibold leading-none tracking-tight tabular-nums">
              {total.toLocaleString("nl-BE")}
            </span>
            <span className="text-[12px] text-muted-foreground">orders</span>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Legend label="Shopify" value={totalShopify} color="var(--chart-1)" />
          <Legend
            label="Takeaway"
            value={totalTakeaway}
            color="var(--chart-3)"
          />
        </div>
      </div>

      <div className="mt-6 h-[260px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ left: -20, right: 8, top: 8, bottom: 0 }}>
            <defs>
              <linearGradient id="grad-shopify" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="grad-takeaway" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="var(--chart-3)"
                  stopOpacity={0.22}
                />
                <stop offset="100%" stopColor="var(--chart-3)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              stroke="var(--border)"
              strokeDasharray="3 3"
              vertical={false}
            />
            <XAxis
              dataKey="hour"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              width={36}
              tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
            />
            <Tooltip
              cursor={{ stroke: "var(--border)", strokeWidth: 1 }}
              contentStyle={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                fontSize: 12,
              }}
            />
            <Area
              type="monotone"
              dataKey="shopify"
              stroke="var(--chart-1)"
              strokeWidth={2}
              fill="url(#grad-shopify)"
              activeDot={{ r: 4, strokeWidth: 0 }}
            />
            <Area
              type="monotone"
              dataKey="takeaway"
              stroke="var(--chart-3)"
              strokeWidth={2}
              fill="url(#grad-takeaway)"
              activeDot={{ r: 4, strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

function Legend({
  label,
  value,
  color,
}: {
  label: string
  value: number
  color: string
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-2 w-2 rounded-full" style={{ background: color }} />
      <div className="flex items-baseline gap-1.5">
        <span className="text-[12px] text-muted-foreground">{label}</span>
        <span className="text-[13px] font-semibold tabular-nums">{value}</span>
      </div>
    </div>
  )
}
