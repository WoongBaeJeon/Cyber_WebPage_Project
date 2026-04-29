import type { PageDefinition } from '@constants'

import { Button } from '@components/common/button'
import { ROUTES_PATHS } from '@constants'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

type RoutedPageProps = {
  page: PageDefinition
}

export function RoutedPage({ page }: RoutedPageProps) {
  return (
    <section className="rounded-4xl border border-brand-line/70 bg-brand-white p-8 sm:p-10">
      <p className="text-sm font-semibold tracking-[0.24em] text-brand-subtle uppercase">
        {page.eyebrow}
      </p>

      <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-brand-black sm:text-5xl">
        {page.title}
      </h1>

      <p className="mt-5 max-w-2xl text-base leading-8 text-brand-copy">
        {page.description}
      </p>

      <Button className="mt-10 h-12 w-fit min-w-0 px-6" size="sm">
        {page.label}
      </Button>

      <Link
        className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand-copy transition-colors hover:text-brand-black"
        to={ROUTES_PATHS.Home}
      >
        <ArrowLeft className="size-4" strokeWidth={1.8} />
        Back home
      </Link>
    </section>
  )
}
