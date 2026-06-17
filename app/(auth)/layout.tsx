import Image from 'next/image';
import type { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex min-h-screen bg-background">
      {/* Left — form area */}
      <div className="relative flex w-full flex-col items-center justify-center px-6 py-12 lg:w-[52%]">
        <div className="absolute left-6 top-6 flex items-center gap-2.5 lg:left-10 lg:top-10">
          <Image
            src="/gv-logo.png"
            alt="Ghysels-Vagenende"
            width={32}
            height={32}
            className="invert dark:invert-0"
          />
          <span className="text-[15px] font-semibold tracking-tight text-foreground">
            Srova
          </span>
        </div>

        <div className="w-full max-w-[380px]">{children}</div>

        <p className="absolute bottom-6 text-[12px] text-muted-foreground lg:bottom-10">
          Ghysels-Vagenende Frituur Group
        </p>
      </div>

      {/* Right — hero panel */}
      <div className="relative hidden overflow-hidden lg:flex lg:w-[48%] lg:items-center lg:justify-center">
        {/* Warm gradient base */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(145deg, oklch(0.22 0.01 55) 0%, oklch(0.16 0.015 45) 40%, oklch(0.13 0.01 60) 100%)',
          }}
        />

        {/* Dot pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'radial-gradient(circle, oklch(1 0 0) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Warm glow orb */}
        <div
          className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full opacity-20"
          style={{
            background:
              'radial-gradient(circle, oklch(0.65 0.16 55) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute -bottom-24 -left-24 h-[400px] w-[400px] rounded-full opacity-15"
          style={{
            background:
              'radial-gradient(circle, oklch(0.55 0.12 55) 0%, transparent 70%)',
          }}
        />

        {/* Hero logo top-left */}
        <div className="absolute left-10 top-10 z-10">
          <Image
            src="/gv-logo.png"
            alt=""
            width={48}
            height={48}
            className="opacity-60"
          />
        </div>

        {/* Content */}
        <div className="auth-hero-content relative z-10 flex max-w-sm flex-col gap-6 px-12 text-white/90">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.15em] text-white/40">
              <span className="inline-block h-px w-8 bg-white/25" />
              Operations Console
            </div>
            <h2
              className="text-[32px] leading-[1.15] font-semibold tracking-tight text-white"
              style={{ fontFeatureSettings: '"ss01", "cv11"' }}
            >
              Run your stores
              <br />
              from one screen.
            </h2>
            <p className="text-[14px] leading-relaxed text-white/50">
              Real-time order pipeline, menu sync, and POS health
              across Aalst, Berlare &amp; Dender.
            </p>
          </div>

          {/* Stats row */}
          <div className="flex gap-8 border-t border-white/10 pt-6">
            <div className="flex flex-col gap-0.5">
              <span className="text-[22px] font-semibold tabular-nums text-white/90">3</span>
              <span className="text-[11px] font-medium uppercase tracking-wider text-white/35">
                Locations
              </span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[22px] font-semibold tabular-nums text-white/90">24/7</span>
              <span className="text-[11px] font-medium uppercase tracking-wider text-white/35">
                Monitoring
              </span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[22px] font-semibold tabular-nums text-white/90">&lt;2s</span>
              <span className="text-[11px] font-medium uppercase tracking-wider text-white/35">
                Latency
              </span>
            </div>
          </div>
        </div>

        {/* Decorative border line */}
        <div className="absolute bottom-0 left-0 top-0 w-px bg-border/40" />
      </div>
    </main>
  );
}
