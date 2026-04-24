import { cn } from '@util'
import { cva, type VariantProps } from 'class-variance-authority'

export const sortDropdownTriggerVariants = cva(
  cn(
    'flex w-full items-center justify-between rounded-lg border bg-brand-white px-4 py-2 text-sm font-normal text-brand-black',
    'focus-visible:border-brand-black focus-visible:outline-none',
    'disabled:cursor-not-allowed disabled:bg-brand-line/50 disabled:text-brand-subtle'
  ),
  {
    variants: {
      sortDropdownSize: {
        sm: 'h-10',
      },
      tone: {
        default: 'border-input-border-1 border0.5',
      },
    },
    defaultVariants: {
      sortDropdownSize: 'sm',
      tone: 'default',
    },
  }
)

export type SortDropdownVariantProps = VariantProps<
  typeof sortDropdownTriggerVariants
>
