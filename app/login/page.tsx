import { LoginForm } from './login-form'

export const metadata = {
  title: 'Sign In',
  description: 'Sign in to your account',
}

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      {/* ── Left panel: branding ── */}
      <div className="relative hidden lg:flex lg:w-1/2 xl:w-3/5 flex-col overflow-hidden bg-violet-950">
        {/* Mesh gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#7c3aed_0%,_#4c1d95_40%,_#1e0a3c_100%)]" />

        {/* Decorative orbs */}
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute -bottom-20 left-1/4 h-72 w-72 rounded-full bg-indigo-500/25 blur-3xl" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-1 flex-col justify-between p-12 xl:p-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm ring-1 ring-white/20">
              <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-lg font-semibold tracking-tight text-white">NextLevel</span>
          </div>

          {/* Hero text */}
          <div className="space-y-6">
            {/* Abstract icon */}
            <div className="flex gap-2">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-1.5 rounded-full bg-white/30"
                  style={{ width: `${[48, 32, 64, 24, 40][i]}px`, opacity: 0.4 + i * 0.1 }}
                />
              ))}
            </div>

            <blockquote className="space-y-3">
              <p className="text-3xl xl:text-4xl font-bold leading-tight text-white">
                Build something<br />
                <span className="bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                  extraordinary.
                </span>
              </p>
              <p className="text-base text-violet-200/80 leading-relaxed max-w-sm">
                The platform that powers the next generation of web applications. Fast, reliable, and built for scale.
              </p>
            </blockquote>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              {[
                { value: '99.9%', label: 'Uptime' },
                { value: '< 50ms', label: 'Latency' },
                { value: '10k+', label: 'Users' },
              ].map(({ value, label }) => (
                <div key={label} className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur-sm">
                  <p className="text-xl font-bold text-white">{value}</p>
                  <p className="text-xs text-violet-300/70 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur-sm">
            <p className="text-sm text-violet-100/80 leading-relaxed italic">
              &ldquo;Switching to NextLevel cut our deployment time in half and gave us the confidence to ship faster.&rdquo;
            </p>
            <div className="mt-3 flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400 flex items-center justify-center text-xs font-bold text-white">
                AK
              </div>
              <div>
                <p className="text-xs font-medium text-white">Alex Kim</p>
                <p className="text-xs text-violet-400/70">CTO at Veritas Labs</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Right panel: form ── */}
      <div className="flex flex-1 flex-col items-center justify-center bg-white px-6 py-12 dark:bg-zinc-900 sm:px-10">
        <div className="w-full max-w-sm">
          {/* Mobile logo */}
          <div className="mb-8 flex items-center gap-3 lg:hidden">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600">
              <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">NextLevel</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Welcome back
            </h1>
            <p className="mt-1.5 text-sm text-zinc-500 dark:text-zinc-400">
              Sign in to your account to continue
            </p>
          </div>

          {/* Demo hint */}
          <div className="mb-6 rounded-xl border border-violet-100 bg-violet-50 px-4 py-3 text-xs text-violet-700 dark:border-violet-900/50 dark:bg-violet-950/30 dark:text-violet-400">
            <span className="font-semibold">Demo credentials:</span>{' '}
            <span className="font-mono">demo@example.com</span> /{' '}
            <span className="font-mono">password123</span>
          </div>

          <LoginForm />

          {/* Sign up */}
          <p className="mt-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
            Don&apos;t have an account?{' '}
            <a href="#" className="font-semibold text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300 transition-colors">
              Create one free
            </a>
          </p>
        </div>

        {/* Footer */}
        <p className="mt-auto pt-10 text-xs text-zinc-400 dark:text-zinc-600">
          &copy; {new Date().getFullYear()} NextLevel. All rights reserved.
        </p>
      </div>
    </div>
  )
}
