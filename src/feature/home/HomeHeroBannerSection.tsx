import iphoneHeroImage from '@assets/iphone-image.svg'
import { Button } from '@components/common/button'
import { HOME_HERO_BANNER } from '@constants'

export function HomeHeroBannerSection() {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto w-full max-w-360">
        <div className="relative grid bg-brand-black px-6 py-8 text-brand-white shadow-card sm:px-8 lg:min-h-158 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:px-12 lg:py-0">
          <div className="relative z-10 lg:py-12">
            <p className="text-sm font-semibold text-brand-white/50 uppercase">
              {HOME_HERO_BANNER.eyebrow}
            </p>
            <h1 className="mt-3 text-4xl leading-none font-light sm:text-5xl lg:text-[5rem]">
              {HOME_HERO_BANNER.title.leading}
              <span className="font-semibold">
                {HOME_HERO_BANNER.title.emphasis}
              </span>
            </h1>
            <p className="mt-4 max-w-md text-sm leading-7 text-brand-white/70 sm:text-base">
              {HOME_HERO_BANNER.description}
            </p>
            <Button
              className="mt-8 h-12 w-fit min-w-0 px-8"
              size="sm"
              variant="light"
            >
              {HOME_HERO_BANNER.ctaLabel}
            </Button>
          </div>
          <div className="flex min-h-72 justify-center overflow-hidden sm:min-h-88 lg:min-h-158">
            <img
              alt="iPhone 14 Pro promotional visual"
              className="z-10 h-68 max-w-none object-contain sm:h-84 lg:h-158 lg:translate-x-10"
              decoding="async"
              loading="eager"
              src={iphoneHeroImage}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
