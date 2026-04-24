import { cn } from '@util'
import { Check, ChevronDown } from 'lucide-react'
import {
  type ComponentProps,
  type MouseEvent,
  useEffect,
  useRef,
  useState,
} from 'react'

import { Button } from '../button'
import {
  sortDropdownTriggerVariants,
  type SortDropdownVariantProps,
} from './sortDropdownVariants'

export type SortDropdownOption = {
  disabled?: boolean
  label: string
  value: string
}

type SortDropdownProps = Omit<ComponentProps<'button'>, 'value' | 'onChange'> &
  SortDropdownVariantProps & {
    containerClassName?: string
    contentClassName?: string
    defaultValue?: string
    onValueChange?: (value: string, option: SortDropdownOption) => void
    options: SortDropdownOption[]
    placeholder?: string
    value?: string
  }

export function SortDropdown({
  className,
  containerClassName,
  contentClassName,
  defaultValue,
  disabled,
  onClick,
  onValueChange,
  options,
  placeholder = 'Sort',
  sortDropdownSize,
  tone,
  value,
  ...props
}: SortDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [internalValue, setInternalValue] = useState(defaultValue ?? '')

  const containerRef = useRef<HTMLDivElement>(null)
  const currentValue = value ?? internalValue
  const selectedOption = options.find((option) => option.value === currentValue)

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [])

  const handleTriggerClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event)

    if (!event.defaultPrevented) {
      setIsOpen((prevIsOpen) => !prevIsOpen)
    }
  }

  const handleOptionClick = (option: SortDropdownOption) => {
    if (option.disabled) {
      return
    }

    if (value === undefined) {
      setInternalValue(option.value)
    }

    onValueChange?.(option.value, option)
    setIsOpen(false)
  }

  return (
    <div
      className={cn('relative w-full', containerClassName)}
      ref={containerRef}
    >
      <Button
        aria-expanded={isOpen}
        className={cn(
          sortDropdownTriggerVariants({ sortDropdownSize, tone }),
          className
        )}
        disabled={disabled}
        onClick={handleTriggerClick}
        type="button"
        variant="light"
        {...props}
      >
        <span className={cn(!selectedOption && 'text-brand-copy')}>
          {selectedOption?.label ?? placeholder}
        </span>
        <ChevronDown
          className={cn('size-4 transition-transform', isOpen && 'rotate-180')}
          strokeWidth={1.6}
        />
      </Button>

      {isOpen && (
        <div
          className={cn(
            'absolute top-12 z-20 w-full overflow-hidden rounded-control border border-input-border-1 bg-brand-white py-2 shadow-card',
            contentClassName
          )}
        >
          {options.map((option) => {
            const isSelected = option.value === currentValue

            return (
              <Button
                className={cn(
                  'flex w-full items-center justify-between gap-2 px-4 text-left text-sm text-brand-black transition-colors hover:bg-input-bg-1',
                  option.disabled && 'cursor-not-allowed',
                  isSelected && 'font-semibold'
                )}
                disabled={option.disabled}
                key={option.value}
                onClick={() => {
                  handleOptionClick(option)
                }}
                type="button"
                variant="light"
              >
                <span>{option.label}</span>
                {isSelected && <Check className="size-4" strokeWidth={1.8} />}
              </Button>
            )
          })}
        </div>
      )}
    </div>
  )
}
