import { FOOTER_LINK_GROUPS, ROUTES_PATHS, SOCIAL_LINKS } from '@constants'
import { Link } from 'react-router-dom'

export function SiteFooter() {
  return (
    <footer className="bg-brand-black text-brand-white">
      <div className="shell pb-14 sm:pb-16 lg:pb-20">
        <div className="h-px w-full bg-brand-white/20" />

        <div className="grid gap-12 pt-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="max-w-sm">
            <Link
              className="text-lg font-semibold tracking-[-0.08em] transition-opacity hover:opacity-70"
              to={ROUTES_PATHS.Home}
            >
              cyber
            </Link>

            <p className="mt-6 text-sm leading-7 text-brand-white/65">
              We are a residential interior design firm located in Portland. Our
              boutique studio offers more than styling. It shapes calm,
              considered rooms for everyday rituals.
            </p>

            <div className="mt-10 flex items-center gap-4">
              {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full border border-brand-white/15 text-brand-white/80 transition-colors hover:border-brand-white hover:text-brand-white"
                  href={href}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Icon className="size-4" strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </div>

          {FOOTER_LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-medium text-brand-white">
                {group.title}
              </h2>

              <ul className="mt-5 space-y-3 text-sm text-brand-white/65">
                {group.links.map((link) => (
                  <li key={link.label}>{link.label}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
