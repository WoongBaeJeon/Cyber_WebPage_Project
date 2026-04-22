import { cn } from '@util'
import { cva, type VariantProps } from 'class-variance-authority'

export const buttonVariants = cva(
  cn(
    'flex items-center justify-center gap-2 rounded-control border text-base font-medium',
    'disabled:pointer-cursor disabled:cursor-not-allowed'
  ),
  {
    variants: {
      variant: {
        light: cn(
          'border-brand-white/80 bg-transparent text-brand-white',
          'hover:bg-brand-white/10 active:bg-brand-white/20',
          'disabled:border-brand-white/40 disabled:text-brand-white/60'
        ),
        primary: cn(
          'border-brand-black bg-brand-black text-brand-white',
          'hover:border-brand-copy hover:bg-brand-copy',
          'active:border-brand-black active:bg-brand-black',
          'disabled:border-brand-line disabled:bg-brand-line disabled:text-brand-white'
        ),
        outline: cn(
          'border-brand-black bg-transparent text-brand-black',
          'hover:bg-brand-white active:bg-brand-line/60',
          'disabled:border-brand-line disabled:text-brand-subtle'
        ),
      },
      size: {
        sm: 'h-12 w-40.5 px-16 py-3',
        md: 'h-14 w-37.5 px-14 py-4',
        lg: 'h-12 w-44.5 px-14 py-3',
        xlg: 'h-14 w-45.5 px-14 py-4',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export type ButtonVariantProps = VariantProps<typeof buttonVariants>
