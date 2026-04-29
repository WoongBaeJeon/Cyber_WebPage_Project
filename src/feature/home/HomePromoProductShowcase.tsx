import airpodsMaxImage from '@assets/apple-airpods-max2.svg'
import appleVisionImage from '@assets/apple-vision2.svg'
import macbookAirImage from '@assets/macbook-air2.svg'
import playstationImage from '@assets/playstation2.svg'
import { Button } from '@components/common/button'
import { HOME_PROMOTION_CARDS } from '@constants'

export function HomePromoProductShowcase() {
  const [playstationCard, airpodsCard, visionCard, macbookCard] =
    HOME_PROMOTION_CARDS
  const airpodsTitle = airpodsCard.title.replace(' Max', '')
  const [visionBrand = '', visionPrimary = '', ...visionSecondaryParts] =
    visionCard.title.split(' ')
  const visionSecondary = visionSecondaryParts.join(' ')
  const [macbookPrimary = '', ...macbookSecondaryParts] =
    macbookCard.title.split(' ')
  const macbookSecondary = macbookSecondaryParts.join(' ')

  return (
    <section className="grid xl:grid-cols-[1.1fr_0.9fr]">
      <div className="grid gap-0 lg:grid-cols-2">
        <article className="order-3 overflow-hidden bg-brand-white text-brand-black lg:order-1 lg:col-span-2 lg:grid lg:grid-cols-[0.86fr_1.14fr] lg:gap-5">
          <div className="relative flex min-h-72 items-end justify-center overflow-hidden pt-8 lg:h-72 lg:min-h-52 lg:justify-start lg:pt-0">
            <img
              alt="PlayStation 5 console bundle"
              className="h-52 w-auto max-w-none object-contain lg:absolute lg:-bottom-5 lg:-left-20 lg:h-82"
              decoding="async"
              loading="lazy"
              src={playstationImage}
            />
          </div>

          <div className="flex flex-col items-center px-6 pb-8 text-center lg:items-start lg:justify-center lg:px-0 lg:pb-0 lg:text-left">
            <h2 className="text-[2.5rem] leading-tight font-medium lg:text-5xl">
              {playstationCard.title}
            </h2>
            <p className="mt-4 max-w-[18rem] text-sm leading-6 text-current/65 lg:max-w-sm">
              {playstationCard.description}
            </p>
          </div>
        </article>

        <article className="order-1 overflow-hidden bg-brand-subtle/20 text-brand-black lg:order-2 lg:grid lg:min-h-64 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="relative flex min-h-60 items-start justify-center overflow-hidden pt-8 lg:min-h-full lg:justify-start lg:pt-0">
            <img
              alt="Apple AirPods Max"
              className="h-44 w-auto max-w-none object-contain lg:absolute lg:bottom-0 lg:-left-35 lg:h-68"
              decoding="async"
              loading="lazy"
              src={airpodsMaxImage}
            />
          </div>

          <div className="flex flex-col items-center justify-center px-6 pb-8 text-center lg:px-0 lg:pr-6 lg:pb-0">
            <h2 className="max-w-52 text-[2.25rem] leading-[1.2] font-light lg:max-w-40 lg:text-[28px] lg:leading-[1.45]">
              {airpodsTitle} <span className="font-medium lg:block">Max</span>
            </h2>
            <p className="mt-3 max-w-[18rem] text-sm leading-7 text-brand-copy lg:max-w-40 lg:text-base lg:leading-8">
              {airpodsCard.description}
            </p>
          </div>
        </article>

        <article className="order-2 overflow-hidden bg-zinc-700 text-brand-white lg:order-3 lg:grid lg:min-h-64 lg:grid-cols-[0.44fr_0.56fr]">
          <div className="relative flex min-h-64 items-start justify-center overflow-hidden pt-10 lg:min-h-full lg:justify-start lg:pt-0">
            <img
              alt="Apple Vision Pro headset"
              className="h-40 w-auto max-w-none object-contain lg:absolute lg:bottom-5 lg:-left-52 lg:h-54"
              decoding="async"
              loading="lazy"
              src={appleVisionImage}
            />
          </div>

          <div className="flex flex-col items-center px-6 pb-8 text-center lg:justify-center lg:px-0 lg:pb-0 lg:text-left">
            <h2 className="max-w-56 text-[2rem] leading-tight font-light lg:max-w-40 lg:text-[28px] lg:leading-[1.35]">
              <span className="lg:block">{visionBrand} </span>
              <span>
                {visionPrimary}
                {visionSecondary && (
                  <span className="font-medium"> {visionSecondary}</span>
                )}
              </span>
            </h2>
            <p className="mt-3 max-w-72 text-sm leading-7 text-brand-white/55 lg:max-w-40 lg:leading-8">
              {visionCard.description}
            </p>
          </div>
        </article>
      </div>

      <article className="relative isolate overflow-hidden bg-zinc-100 text-brand-black lg:flex lg:items-center lg:px-8 lg:py-10 xl:px-10">
        <div className="pointer-events-none flex justify-center px-6 pt-8 lg:hidden">
          <img
            alt="MacBook Air laptop"
            className="h-56 w-auto max-w-full object-contain sm:h-64"
            decoding="async"
            loading="lazy"
            src={macbookAirImage}
          />
        </div>

        <div className="pointer-events-none absolute -right-130 hidden items-end justify-end lg:flex">
          <img
            alt="MacBook Air laptop"
            className="h-125 w-auto max-w-none object-contain"
            decoding="async"
            loading="lazy"
            src={macbookAirImage}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center px-6 py-8 text-center sm:px-10 lg:max-w-sm lg:items-start lg:px-10 lg:text-left">
          <h2 className="text-4xl leading-[1.05] font-thin sm:text-5xl lg:text-[64px] lg:leading-[0.95]">
            {macbookPrimary}
            <span className="font-semibold lg:block">{macbookSecondary}</span>
          </h2>
          <p className="mt-5 max-w-108 text-sm leading-8 font-medium text-current/55 lg:max-w-76">
            {macbookCard.description}
          </p>
          <Button
            className="mt-5 h-14 w-full max-w-108 px-10 py-4 lg:w-fit lg:min-w-35"
            size="sm"
            variant="outline"
          >
            Shop Now
          </Button>
        </div>
      </article>
    </section>
  )
}
