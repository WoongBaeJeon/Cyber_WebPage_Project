import { cn } from '@util'
import { Check, ChevronDown, Search } from 'lucide-react'
import { useState } from 'react'

import { Input } from '../input'
import {
  filterDropdownTriggerVariants,
  type FilterDropdownVariantProps,
  filterDropdownVariants,
} from './filterDropdownVariants'

export type FilterDropdownOption = {
  count?: number
  disabled?: boolean
  label: string
  value: string
}

type FilterDropdownProps = FilterDropdownVariantProps & {
  className?: string
  contentClassName?: string
  defaultOpen?: boolean
  defaultSelectedValues?: string[]
  onSelectedValuesChange?: (values: string[]) => void
  options: FilterDropdownOption[]
  searchPlaceholder?: string
  searchable?: boolean
  selectedValues?: string[]
  title: string
}

export function FilterDropdown({
  className,
  contentClassName,
  defaultOpen = false,
  defaultSelectedValues = [],
  onSelectedValuesChange,
  options,
  searchPlaceholder = 'Search',
  searchable = false,
  selectedValues,
  title,
  tone,
  triggerSize,
}: FilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const [searchValue, setSearchValue] = useState('')
  const [internalSelectedValues, setInternalSelectedValues] = useState(
    defaultSelectedValues
  )
  const currentSelectedValues = selectedValues ?? internalSelectedValues
  const selectedValueSet = new Set(currentSelectedValues)
  const normalizedSearchValue = searchValue.trim().toLowerCase()
  const filteredOptions = normalizedSearchValue
    ? options.filter((option) =>
        option.label.toLowerCase().includes(normalizedSearchValue)
      )
    : options

  const updateSelectedValues = (nextValues: string[]) => {
    if (selectedValues === undefined) {
      setInternalSelectedValues(nextValues)
    }

    onSelectedValuesChange?.(nextValues)
  }

  const handleOptionToggle = (option: FilterDropdownOption) => {
    if (option.disabled) {
      return
    }

    const nextSelectedValues = selectedValueSet.has(option.value)
      ? currentSelectedValues.filter((value) => value !== option.value)
      : [...currentSelectedValues, option.value]

    updateSelectedValues(nextSelectedValues)
  }

  return (
    <section className={cn(filterDropdownVariants({ tone }), className)}>
      <button
        aria-expanded={isOpen}
        className={cn(filterDropdownTriggerVariants({ triggerSize }))}
        onClick={() => {
          setIsOpen((prevIsOpen) => !prevIsOpen)
        }}
        type="button"
      >
        <span>{title}</span>
        <ChevronDown
          className={cn('size-4 transition-transform', isOpen && 'rotate-180')}
          strokeWidth={1.8}
        />
      </button>

      {isOpen && (
        <div className={cn('space-y-4 py-4', contentClassName)}>
          {searchable && (
            <Input
              inputSize="sm"
              leftIcon={<Search className="size-4" strokeWidth={1.6} />}
              onChange={(event) => {
                setSearchValue(event.target.value)
              }}
              placeholder={searchPlaceholder}
              value={searchValue}
            />
          )}

          <div className="space-y-3">
            {filteredOptions.map((option) => {
              const isSelected = selectedValueSet.has(option.value)

              return (
                <label
                  className={cn(
                    'flex cursor-pointer items-center gap-2 text-sm text-brand-black',
                    option.disabled && 'cursor-not-allowed text-brand-subtle'
                  )}
                  key={option.value}
                >
                  <input
                    checked={isSelected}
                    className="sr-only"
                    disabled={option.disabled}
                    onChange={() => {
                      handleOptionToggle(option)
                    }}
                    type="checkbox"
                  />
                  <span
                    className={cn(
                      'flex size-3 items-center justify-center rounded-xs border border-brand-line bg-brand-white',
                      isSelected && 'border-brand-black bg-brand-black'
                    )}
                  >
                    {isSelected && (
                      <Check
                        className="size-2.5 text-brand-white"
                        strokeWidth={2.4}
                      />
                    )}
                  </span>
                  <span>{option.label}</span>
                  {option.count !== undefined && (
                    <span className="text-xs text-brand-subtle">
                      {option.count}
                    </span>
                  )}
                </label>
              )
            })}

            {filteredOptions.length === 0 && (
              <p className="text-sm text-brand-subtle">No options found.</p>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
