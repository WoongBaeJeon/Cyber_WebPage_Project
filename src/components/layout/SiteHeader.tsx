import { ROUTES_PATHS, UTILITY_LINKS } from '@constants'
import { cn } from '@util'
import { Menu, Search, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="border-b border-brand-line/80 bg-brand-white shadow-header">
      <div className="shell relative">
        <div className="flex items-center justify-between gap-5 py-5">
          <Link
            className="text-xl font-bold hover:opacity-70"
            to={ROUTES_PATHS.Home}
          >
            cyber
          </Link>

          <label className="hidden w-full items-center gap-3 rounded-lg border border-brand-line bg-brand-surface p-3 text-sm text-brand-subtle md:absolute md:left-1/2 md:flex md:max-w-sm md:-translate-x-1/2 lg:max-w-md">
            <Search className="size-4" strokeWidth={1.7} />
            <input
              className="w-full bg-transparent text-sm text-brand-black outline-none placeholder:text-brand-subtle"
              placeholder="Search"
              type="search"
            />
          </label>

          <nav
            aria-label="Utility navigation"
            className="hidden items-center gap-2 md:flex"
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

          <button
            aria-controls="mobile-utility-menu"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle utility menu"
            className="flex size-10 items-center justify-center rounded-full border border-brand-line text-brand-black transition-colors hover:bg-brand-surface md:hidden"
            onClick={() => {
              setIsMobileMenuOpen(
                (prevIsMobileMenuOpen) => !prevIsMobileMenuOpen
              )
            }}
            type="button"
          >
            {isMobileMenuOpen ? (
              <X className="size-5" strokeWidth={1.8} />
            ) : (
              <Menu className="size-5" strokeWidth={1.8} />
            )}
          </button>
        </div>

        {isMobileMenuOpen ? (
          <nav
            aria-label="Mobile utility navigation"
            className="absolute top-full right-0 z-20 mt-2 flex w-56 flex-col gap-1 rounded-[1.25rem] border border-brand-line/80 bg-brand-white p-2 shadow-card md:hidden"
            id="mobile-utility-menu"
          >
            {UTILITY_LINKS.map(({ href, icon: Icon, label }) => (
              <NavLink
                key={href}
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-3 rounded-[1rem] px-4 py-3 text-sm font-medium text-brand-black transition-colors hover:bg-brand-surface',
                    isActive && 'bg-brand-surface'
                  )
                }
                onClick={() => {
                  setIsMobileMenuOpen(false)
                }}
                to={href}
              >
                <Icon className="size-4" strokeWidth={1.8} />
                <span>{label}</span>
              </NavLink>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  )
}
