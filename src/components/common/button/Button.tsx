import type { ComponentProps, ReactNode } from 'react'

import { cn } from '@util'

import { type ButtonVariantProps, buttonVariants } from './buttonVariants'

type ButtonProps = ComponentProps<'button'> &
  ButtonVariantProps & {
    leftIcon?: ReactNode
    rightIcon?: ReactNode
  }

export function Button({
  children,
  className,
  leftIcon,
  rightIcon,
  size,
  type = 'button',
  variant,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ size, variant }), className)}
      type={type}
      {...props}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  )
}
