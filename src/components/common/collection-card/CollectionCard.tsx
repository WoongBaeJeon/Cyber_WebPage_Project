import { Button } from '@components/common/button'
import { cn } from '@util'

const collectionCardStyles = {
  dark: {
    article: 'bg-zinc-800 text-brand-white',
    buttonVariant: 'light',
    media: 'bg-brand-copy/36',
    placeholder: 'text-brand-white/65',
    title: 'text-brand-white',
  },
  light: {
    article: 'bg-zinc-100  text-brand-black',
    buttonVariant: 'outline',
    media: 'bg-brand-copy/12',
    placeholder: 'text-brand-copy/70',
    title: 'text-brand-black',
  },
  mid: {
    article: 'bg-zinc-300 text-brand-black',
    buttonVariant: 'outline',
    media: 'bg-brand-copy/28',
    placeholder: 'text-brand-copy/75',
    title: 'text-brand-black',
  },
  soft: {
    article: 'bg-zinc-200 text-brand-black',
    buttonVariant: 'outline',
    media: 'bg-brand-copy/20',
    placeholder: 'text-brand-copy/75',
    title: 'text-brand-black',
  },
} as const

export type CollectionCardTone = keyof typeof collectionCardStyles

export type CollectionCardProps = {
  className?: string
  ctaLabel?: string
  title: string
  tone?: CollectionCardTone
}

export function CollectionCard({
  className,
  ctaLabel = 'Shop Now',
  title,
  tone = 'light',
}: CollectionCardProps) {
  const styles = collectionCardStyles[tone]

  return (
    <article className={cn('overflow-hidden p-8', styles.article, className)}>
      <div
        className={cn(
          'flex min-h-64 items-center justify-center text-center',
          styles.media
        )}
      >
        <span className={cn(styles.placeholder)}>Image pending</span>
      </div>

      <div className="py-8">
        <h3 className={cn('text-[2rem] font-normal', styles.title)}>{title}</h3>
        <Button
          className="mt-4 h-14 w-fit min-w-32 rounded-sm px-14 py-4 text-base font-medium"
          size="sm"
          variant={styles.buttonVariant}
        >
          {ctaLabel}
        </Button>
      </div>
    </article>
  )
}
