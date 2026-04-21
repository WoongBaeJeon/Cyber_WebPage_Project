import { ROUTES_PATHS } from './routePaths'

export type PageDefinition = {
  description: string
  eyebrow: string
  href: string
  label: string
  title: string
}

type FooterLinkGroup = {
  links: PageDefinition[]
  title: string
}

export const UTILITY_PAGES: PageDefinition[] = [
  {
    description:
      'Collect bookmarked pieces, finishes, and room ideas in one calm list.',
    eyebrow: 'Saved pieces',
    href: ROUTES_PATHS.Wishlist,
    label: 'Wishlist',
    title: 'Your wishlist',
  },
  {
    description:
      'Review selected objects and shape a cleaner, more focused checkout flow.',
    eyebrow: 'Ready to order',
    href: ROUTES_PATHS.Cart,
    label: 'Cart',
    title: 'Your cart',
  },
]

export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    title: 'Services',
    links: [
      {
        description:
          'A loyalty layer for returning clients who build rooms over time.',
        eyebrow: 'Services',
        href: ROUTES_PATHS.Services.BonusProgram,
        label: 'Bonus program',
        title: 'Bonus program',
      },
      {
        description:
          'Flexible gifting options for clients who want to share the studio.',
        eyebrow: 'Services',
        href: ROUTES_PATHS.Services.GiftCards,
        label: 'Gift cards',
        title: 'Gift cards',
      },
      {
        description:
          'Clear payment guidance for custom orders, deposits, and timelines.',
        eyebrow: 'Services',
        href: ROUTES_PATHS.Services.CreditAndPayment,
        label: 'Credit and payment',
        title: 'Credit and payment',
      },
      {
        description:
          'Service agreements that define scope, delivery windows, and support.',
        eyebrow: 'Services',
        href: ROUTES_PATHS.Services.ServiceContracts,
        label: 'Service contracts',
        title: 'Service contracts',
      },
      {
        description:
          'Business billing support for clients who work through company accounts.',
        eyebrow: 'Services',
        href: ROUTES_PATHS.Services.NonCashAccount,
        label: 'Non-cash account',
        title: 'Non-cash account',
      },
      {
        description:
          'Payment options designed to stay transparent from quote to final order.',
        eyebrow: 'Services',
        href: ROUTES_PATHS.Services.Payment,
        label: 'Payment',
        title: 'Payment',
      },
    ],
  },
  {
    title: 'Assistance to the buyer',
    links: [
      {
        description:
          'Track project progress, delivery timing, and current order status.',
        eyebrow: 'Assistance to the buyer',
        href: ROUTES_PATHS.Assistance.FindAnOrder,
        label: 'Find an order',
        title: 'Find an order',
      },
      {
        description:
          'A summary of shipping timelines, methods, and regional expectations.',
        eyebrow: 'Assistance to the buyer',
        href: ROUTES_PATHS.Assistance.TermsOfDelivery,
        label: 'Terms of delivery',
        title: 'Terms of delivery',
      },
      {
        description:
          'Return and exchange guidance for made-to-order and stocked pieces.',
        eyebrow: 'Assistance to the buyer',
        href: ROUTES_PATHS.Assistance.ExchangeAndReturn,
        label: 'Exchange and return of goods',
        title: 'Exchange and return of goods',
      },
      {
        description:
          'Warranty details for craftsmanship, material integrity, and support.',
        eyebrow: 'Assistance to the buyer',
        href: ROUTES_PATHS.Assistance.Guarantee,
        label: 'Guarantee',
        title: 'Guarantee',
      },
      {
        description:
          'Answers to the recurring questions that come up during purchase.',
        eyebrow: 'Assistance to the buyer',
        href: ROUTES_PATHS.Assistance.Faq,
        label: 'Frequently asked questions',
        title: 'Frequently asked questions',
      },
      {
        description:
          'Site usage terms covering content, ordering, and privacy boundaries.',
        eyebrow: 'Assistance to the buyer',
        href: ROUTES_PATHS.Assistance.TermsOfUse,
        label: 'Terms of use of the site',
        title: 'Terms of use of the site',
      },
    ],
  },
]

export const ROUTED_PAGES = [
  ...UTILITY_PAGES,
  ...FOOTER_LINK_GROUPS.flatMap((group) => group.links),
]
