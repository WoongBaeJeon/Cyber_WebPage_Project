import { ROUTES_PATHS, UTILITY_LINKS } from '@constants'
import { cn } from '@util'
import { Search } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

export function SiteHeader() {
  return (
    <header className="border-b border-brand-line/80 bg-brand-white shadow-header">
      <div className="shell">
        <div className="flex flex-wrap items-center gap-4 py-5 md:flex-nowrap md:justify-between">
          <Link
            className="text-lg font-semibold tracking-[-0.08em] transition-opacity hover:opacity-70"
            to={ROUTES_PATHS.Home}
          >
            cyber
          </Link>

          <label className="order-3 flex w-full items-center gap-3 rounded-control border border-brand-line bg-brand-surface px-4 py-3 text-sm text-brand-subtle md:order-0 md:max-w-md">
            <Search className="size-4" strokeWidth={1.7} />
            <input
              className="w-full bg-transparent text-sm text-brand-black outline-none placeholder:text-brand-subtle"
              placeholder="Search"
              type="search"
            />
          </label>

          <nav
            aria-label="Utility navigation"
            className="ml-auto flex items-center gap-2"
          >
            {UTILITY_LINKS.map(({ href, icon: Icon, label }) => (
              <NavLink
                key={href}
                className={({ isActive }) =>
                  cn(
                    'flex size-10 items-center justify-center rounded-full border border-transparent text-brand-black transition-colors hover:border-brand-line hover:bg-brand-surface',
                    isActive && 'border-brand-line bg-brand-surface'
                  )
                }
                to={href}
              >
                <Icon className="size-4" strokeWidth={1.8} />
                <span className="sr-only">{label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
