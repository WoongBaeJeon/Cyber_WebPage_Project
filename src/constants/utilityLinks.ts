import { Heart, ShoppingCart } from 'lucide-react'

import { ROUTES_PATHS } from './routePaths'

export const UTILITY_LINKS = [
  {
    href: ROUTES_PATHS.Wishlist,
    icon: Heart,
    label: 'Wishlist',
  },
  {
    href: ROUTES_PATHS.Cart,
    icon: ShoppingCart,
    label: 'Cart',
  },
]
