import { Button } from '@components/common/button'
import { cn } from '@util'
import { Heart } from 'lucide-react'
import { useEffect, useState } from 'react'

export type ProductCardProps = {
  badge?: string
  category: string
  className?: string
  ctaLabel?: string
  isWishlisted?: boolean
  onWishlistClick?: () => void
  price: string
  title: string
}

export function ProductCard({
  badge,
  category,
  className,
  ctaLabel = 'Buy Now',
  isWishlisted = false,
  onWishlistClick,
  price,
  title,
}: ProductCardProps) {
  const [isWishlistedLocal, setIsWishlistedLocal] = useState(isWishlisted)
  const specLabel = badge ?? category
  const isControlled = typeof onWishlistClick === 'function'
  const isWishlistedResolved = isControlled ? isWishlisted : isWishlistedLocal

  useEffect(() => {
    setIsWishlistedLocal(isWishlisted)
  }, [isWishlisted])

  return (
    <article
      className={cn(
        'flex h-full flex-col rounded-lg bg-brand-copy/12 px-4 py-6',
        className
      )}
    >
      <div className="flex justify-end">
        <button
          aria-label={`${title} wishlist`}
          aria-pressed={isWishlistedResolved}
          className="flex size-9 items-center justify-center rounded-full text-brand-copy transition-colors hover:text-red-500"
          onClick={() => {
            if (isControlled) {
              onWishlistClick()

              return
            }

            setIsWishlistedLocal((previous) => !previous)
          }}
          type="button"
        >
          <Heart
            className={cn(
              'size-5',
              isWishlistedResolved && 'fill-red-500 text-red-500'
            )}
            strokeWidth={1.8}
          />
        </button>
      </div>

      <div className="relative mt-2 flex min-h-52 w-full items-center justify-center overflow-hidden rounded-[1.25rem] bg-brand-copy/12">
        <span className="text-xs font-semibold tracking-[0.24em] text-brand-copy/70 uppercase">
          Image pending
        </span>
      </div>

      <div className="mt-5 flex flex-1 flex-col items-center text-center">
        <h3 className="max-w-48 text-xl leading-7 font-medium text-brand-black">
          {title}
        </h3>
        <p className="mt-1 text-base leading-7 font-medium text-brand-copy">
          {specLabel}
        </p>
        <p className="mt-4 text-[2rem] font-semibold tracking-[-0.03em] text-brand-black">
          {price}
        </p>

        <Button
          className="mt-5 h-12 w-full max-w-40 px-4 text-base"
          size="sm"
          variant="primary"
        >
          {ctaLabel}
        </Button>
      </div>
    </article>
  )
}
