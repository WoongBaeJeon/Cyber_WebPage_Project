import { Outlet, ScrollRestoration } from 'react-router-dom'

import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

export function MainLayout() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-360 flex-col">
      <SiteHeader />
      <main className="flex overflow-hidden">
        <Outlet />
      </main>
      <SiteFooter />
      <ScrollRestoration />
    </div>
  )
}
