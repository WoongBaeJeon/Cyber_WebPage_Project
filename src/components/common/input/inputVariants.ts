import { cn } from '@util'
import { cva, type VariantProps } from 'class-variance-authority'

export const inputVariants = cva(
  cn(
    'flex w-full items-center gap-2 rounded-control border bg-brand-white text-sm font-medium text-brand-black px-4'
  ),
  {
    variants: {
      tone: {
        default: ' border-input-border-1',
        outline: ' border-input-border-2',
        dark: ' bg-input-bg-1 text-brand-white',
      },
      inputSize: {
        sm: 'h-10',
        md: 'h-12',
        lg: 'h-14',
        xlg: 'h-16',
      },
    },
    defaultVariants: {
      inputSize: 'md',
      tone: 'default',
    },
  }
)

export type InputVariantProps = VariantProps<typeof inputVariants>
