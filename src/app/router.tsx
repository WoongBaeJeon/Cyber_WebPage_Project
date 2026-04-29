import { MainLayout } from '@components/layout'
import { ROUTED_PAGES, ROUTES_PATHS } from '@constants'
import {
  CommonComponentsPage,
  HomePage,
  NotFoundPage,
  RoutedPage,
} from '@pages'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: ROUTES_PATHS.Home,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES_PATHS.CommonComponents,
        element: <CommonComponentsPage />,
      },
      ...ROUTED_PAGES.map((page) => ({
        path: page.href,
        element: <RoutedPage page={page} />,
      })),
      {
        path: ROUTES_PATHS.NotFound,
        element: <NotFoundPage />,
      },
    ],
  },
])
