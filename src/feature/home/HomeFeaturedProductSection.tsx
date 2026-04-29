import { ProductCard } from '@components/common/product-card'
import { HOME_FEATURED_PRODUCTS, HOME_PRODUCT_TABS } from '@constants'
import { cn } from '@util'
import { useState } from 'react'

export function HomeFeaturedProductSection() {
  const [activeProductTab, setActiveProductTab] = useState<
    (typeof HOME_PRODUCT_TABS)[number]
  >(HOME_PRODUCT_TABS[0])

  return (
    <section className="bg-brand-white px-4 py-6 lg:px-40 lg:py-10">
      <div className="flex gap-8 overflow-x-auto pb-1">
        {HOME_PRODUCT_TABS.map((tab) => (
          <button
            aria-pressed={activeProductTab === tab}
            className={cn(
              'shrink-0 border-b-2 pb-2 text-[18px] leading-none font-medium whitespace-nowrap transition-colors',
              activeProductTab === tab
                ? 'border-brand-black text-brand-black'
                : 'border-transparent text-brand-copy hover:text-brand-black'
            )}
            key={tab}
            onClick={() => {
              setActiveProductTab(tab)
            }}
            type="button"
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 xl:grid-cols-4">
        {HOME_FEATURED_PRODUCTS.map((product) => (
          <ProductCard
            badge={product.badge}
            category={product.category}
            isWishlisted={product.isWishlisted}
            key={product.id}
            price={product.price}
            title={product.title}
          />
        ))}
      </div>
    </section>
  )
}
