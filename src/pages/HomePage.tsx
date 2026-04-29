import {
  HomeCategoryShortcutSection,
  HomeCollectionShowcaseSection,
  HomeFeaturedProductSection,
  HomeHeroBannerSection,
  HomePromoProductShowcase,
  HomePromotionalBannerSection,
} from '@feature/home'

export function HomePage() {
  return (
    <div className="w-full">
      <HomeHeroBannerSection />

      <HomePromoProductShowcase />

      <HomeCategoryShortcutSection />

      <HomeFeaturedProductSection />

      <HomeCollectionShowcaseSection />

      <HomePromotionalBannerSection />
    </div>
  )
}
