import { Button } from '@components/common/button'
import { FilterDropdown } from '@components/common/filter-dropdown'
import { Input } from '@components/common/input'
import { SortDropdown } from '@components/common/sort-dropdown'
import {
  PRODUCT_FILTER_GROUPS,
  ROUTES_PATHS,
  SORT_DROPDOWN_OPTIONS,
} from '@constants'
import { ChevronDown, Eye, Search } from 'lucide-react'
import { Link } from 'react-router-dom'

const buttonVariants = ['light', 'primary', 'outline'] as const

/**
 * 공통 컴포넌트 테스트 페이지
 * 추후 실제 디자인 시스템 문서로 대체 가능함.
 */
export function CommonComponentsPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-14">
      <section className="space-y-4">
        <p className="text-sm font-semibold text-brand-black">
          Field without label
        </p>
        <Input
          containerClassName="max-w-[150px]"
          placeholder="CVV"
          rightIcon={<Eye className="size-4" strokeWidth={1.6} />}
          tone="default"
        />
      </section>

      <section className="space-y-4">
        <p className="text-sm font-semibold text-brand-black">
          Field with label
        </p>
        <div className="max-w-xl rounded-control border border-dashed p-4">
          <Input
            action={
              <Button className="min-w-17.5 px-5" size="sm" variant="outline">
                Apply
              </Button>
            }
            containerClassName="border-0.5"
            label="Your bonus card number"
            placeholder="Enter Card Number"
            tone="outline"
          />
          <Input
            containerClassName="mt-2"
            label="Your bonus card number"
            placeholder="Enter Card Number"
            tone="dark"
          />
        </div>
      </section>

      <section className="space-y-4">
        <p className="text-sm font-semibold text-brand-black">Search Field</p>
        <Input
          containerClassName="max-w-[220px]"
          inputSize="lg"
          leftIcon={<Search className="size-5" strokeWidth={1.7} />}
          placeholder="Search"
        />
      </section>

      <section className="space-y-4">
        <p className="text-sm font-semibold text-brand-black">SortDropdown</p>
        <SortDropdown
          containerClassName="max-w-[230px]"
          defaultValue="rating-desc"
          options={SORT_DROPDOWN_OPTIONS}
          placeholder="By rating"
        />
      </section>

      <section className="grid gap-8 lg:grid-cols-[280px_1fr]">
        <aside className="bg-brand-white px-6 py-4">
          {PRODUCT_FILTER_GROUPS.map((group) => (
            <FilterDropdown
              defaultOpen={group.defaultOpen}
              defaultSelectedValues={
                group.title === 'Brand' ? ['apple'] : undefined
              }
              key={group.title}
              options={group.options}
              searchable={group.searchable}
              title={group.title}
            />
          ))}
        </aside>

        <div className="space-y-3">
          <p className="text-sm font-semibold text-brand-black">
            FilterDropdown
          </p>
          <p className="max-w-xl text-sm leading-6 text-brand-copy">
            API 응답을 받은 뒤에도 같은 형태의 options 배열만 전달하면 브랜드,
            카테고리, 스펙 필터로 재사용할 수 있습니다.
          </p>
        </div>
      </section>

      <section className="space-y-5 bg-brand-surface p-6">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-semibold text-brand-black">Buttons</p>
          <Link
            className="text-sm font-medium text-brand-copy transition-colors hover:text-brand-black"
            to={ROUTES_PATHS.Home}
          >
            Back home
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {buttonVariants.map((variant) => (
            <Button key={variant} size="sm" variant={variant}>
              Label
            </Button>
          ))}
          {buttonVariants.map((variant) => (
            <Button
              key={`${variant}-icon`}
              rightIcon={<ChevronDown className="size-4" strokeWidth={2} />}
              size="md"
              variant={variant}
            >
              Label
            </Button>
          ))}
          {buttonVariants.map((variant) => (
            <Button
              disabled
              key={`${variant}-disabled-lg`}
              size="lg"
              variant={variant}
            >
              Label
            </Button>
          ))}
          {buttonVariants.map((variant) => (
            <Button
              disabled
              key={`${variant}-disabled-xlg`}
              size="xlg"
              variant={variant}
            >
              Label
            </Button>
          ))}
        </div>
      </section>
    </div>
  )
}
