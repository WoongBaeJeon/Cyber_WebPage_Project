import { HOME_CATEGORY_SHORTCUTS } from '@constants'
import { cn } from '@util'
import { Armchair, Camera, Smartphone } from 'lucide-react'

const categoryShortcutIcons = {
  armchair: Armchair,
  camera: Camera,
  smartphone: Smartphone,
} as const

export function HomeCategoryShortcutSection() {
  return (
    <section className="bg-brand-subtle/10 px-4 py-6 lg:px-40 lg:py-10">
      <div>
        <p className="text-2xl font-medium text-brand-black">
          Browse By Category
        </p>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
        {HOME_CATEGORY_SHORTCUTS.map((shortcut) => {
          const Icon =
            'icon' in shortcut ? categoryShortcutIcons[shortcut.icon] : null

          return (
            <article
              className="flex min-h-32 flex-col items-center justify-center rounded-2xl bg-brand-subtle/50 px-13 py-6 text-center transition-colors hover:bg-brand-subtle/20"
              key={shortcut.id}
            >
              {Icon ? <Icon className="size-12" strokeWidth={1.8} /> : null}
              <p
                className={cn(
                  'cursor-pointer text-[18px] font-medium text-brand-black',
                  Icon ? 'mt-2' : 'mt-0'
                )}
              >
                {shortcut.label}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
