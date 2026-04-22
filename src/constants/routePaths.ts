export const ROUTES_PATHS = {
  Home: '/',
  Wishlist: '/wishlist',
  Cart: '/cart',
  CommonComponents: '/common-components',
  NotFound: '*',
  Services: {
    BonusProgram: '/services/bonus-program',
    CreditAndPayment: '/services/credit-and-payment',
    GiftCards: '/services/gift-cards',
    NonCashAccount: '/services/non-cash-account',
    Payment: '/services/payment',
    ServiceContracts: '/services/service-contracts',
  },
  Assistance: {
    ExchangeAndReturn: '/assistance/exchange-and-return',
    Faq: '/assistance/faq',
    FindAnOrder: '/assistance/find-an-order',
    Guarantee: '/assistance/guarantee',
    TermsOfDelivery: '/assistance/terms-of-delivery',
    TermsOfUse: '/assistance/terms-of-use',
  },
} as const
