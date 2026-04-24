import { cn } from '@util'
import { cva, type VariantProps } from 'class-variance-authority'

export const filterDropdownVariants = cva(
  'w-full bg-brand-white text-brand-black',
  {
    variants: {
      tone: {
        panel: 'rounded-control px-4',
      },
    },
    defaultVariants: {
      tone: 'panel',
    },
  }
)

export const filterDropdownTriggerVariants = cva(
  cn(
    'flex w-full items-center justify-between gap-6 border-b border-b-brand-line py-4 text-left font-medium transition-colors',
    'hover:text-brand-copy'
  ),
  {
    variants: {
      triggerSize: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
    },
    defaultVariants: {
      triggerSize: 'md',
    },
  }
)

export type FilterDropdownVariantProps = VariantProps<
  typeof filterDropdownVariants
> &
  VariantProps<typeof filterDropdownTriggerVariants>
