import { Button } from '@components/common/button'
import { HOME_PROMO_BANNER } from '@constants'

export function HomePromotionalBannerSection() {
  const promoTitleWords = HOME_PROMO_BANNER.title.split(' ')
  const promoTitleLead = promoTitleWords.slice(0, -1).join(' ')
  const promoTitleAccent = promoTitleWords.at(-1) ?? ''

  return (
    <section className="mx-auto flex min-h-112 w-full items-center justify-center bg-brand-black px-6 py-10 text-brand-white sm:px-8 lg:h-112 lg:px-12">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-[4.5rem] font-thin sm:text-[4.75rem] lg:text-[5.5rem]">
          {promoTitleLead && <span>{promoTitleLead} </span>}
          <span className="block font-semibold sm:inline">
            {promoTitleAccent}
          </span>
        </h2>
        <p className="mt-4 max-w-120 text-sm text-brand-white/50 sm:text-base">
          {HOME_PROMO_BANNER.description}
        </p>
        <Button
          className="mt-8 h-12 w-fit min-w-47 px-8"
          size="sm"
          variant="light"
        >
          {HOME_PROMO_BANNER.ctaLabel}
        </Button>
      </div>
    </section>
  )
}
