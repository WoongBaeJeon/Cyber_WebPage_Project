import { MainLayout } from '@components/layout'
import { ROUTES_PATHS } from '@constants'
import { CommonComponentsPage, HomePage, NotFoundPage } from '@pages'
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
      {
        path: ROUTES_PATHS.NotFound,
        element: <NotFoundPage />,
      },
    ],
  },
])
