import { CollectionCard } from '@components/common/collection-card'
import { HOME_COLLECTION_CARDS } from '@constants'

export function HomeCollectionShowcaseSection() {
  return (
    <section className="grid bg-brand-white px-3 py-6 sm:grid-cols-2 lg:px-8 lg:py-10 xl:grid-cols-4">
      {HOME_COLLECTION_CARDS.map((collection) => (
        <CollectionCard
          key={collection.id}
          title={collection.title}
          tone={collection.tone}
        />
      ))}
    </section>
  )
}
