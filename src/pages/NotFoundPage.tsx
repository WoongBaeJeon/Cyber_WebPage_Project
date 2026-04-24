import { ROUTES_PATHS } from '@constants'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="rounded-control border border-brand-line bg-brand-white p-8 shadow-card sm:p-10">
      <p className="text-4xl tracking-[0.32em] text-brand-subtle">404</p>

      <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-brand-black sm:text-5xl">
        경로가 존재하지 않습니다.
      </h1>

      <Link
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand-black px-5 py-3 text-sm font-medium text-brand-white transition-opacity hover:opacity-85"
        to={ROUTES_PATHS.Home}
      >
        Back home
        <ArrowRight className="size-4" strokeWidth={1.8} />
      </Link>
    </section>
  )
}
