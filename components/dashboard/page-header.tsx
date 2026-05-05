import type React from "react"

export function PageHeader({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow?: string
  title: string
  description?: string
  actions?: React.ReactNode
}) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div className="min-w-0">
        {eyebrow && (
          <div className="mb-2 text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
            {eyebrow}
          </div>
        )}
        <h1 className="text-balance text-[28px] font-semibold leading-tight tracking-tight md:text-[32px]">{title}</h1>
        {description && (
          <p className="mt-1.5 max-w-2xl text-pretty text-[14px] leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  )
}
