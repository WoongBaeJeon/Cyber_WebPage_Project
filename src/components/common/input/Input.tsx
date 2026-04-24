import { cn } from '@util'
import { type ComponentProps, type ReactNode, useId } from 'react'

import { type InputVariantProps, inputVariants } from './inputVariants'

type InputProps = Omit<ComponentProps<'input'>, 'size'> &
  InputVariantProps & {
    action?: ReactNode
    containerClassName?: string
    label?: string
    leftIcon?: ReactNode
    rightIcon?: ReactNode
    wrapperClassName?: string
  }

export function Input({
  action,
  className,
  containerClassName,
  id,
  inputSize,
  label,
  leftIcon,
  rightIcon,
  tone,
  wrapperClassName,
  ...props
}: InputProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId

  return (
    <div className={cn('w-full space-y-2', containerClassName)}>
      {label && (
        <label
          className="block text-sm font-medium text-brand-copy"
          htmlFor={inputId}
        >
          {label}
        </label>
      )}

      <div className={cn(inputVariants({ inputSize, tone }), wrapperClassName)}>
        {leftIcon && (
          <span className="flex shrink-0 items-center text-brand-subtle">
            {leftIcon}
          </span>
        )}

        <input
          className={cn(
            'min-w-0 flex-1 bg-transparent outline-none placeholder:text-brand-subtle disabled:cursor-not-allowed',
            className
          )}
          id={inputId}
          {...props}
        />

        {rightIcon && (
          <span className="flex shrink-0 items-center text-brand-subtle">
            {rightIcon}
          </span>
        )}
        {action}
      </div>
    </div>
  )
}
