import { Button } from '@components/common/button'
import { Input } from '@components/common/input'
import { ROUTES_PATHS } from '@constants'
import { ChevronDown, Eye, Search } from 'lucide-react'
import { Link } from 'react-router-dom'

const buttonVariants = ['light', 'primary', 'outline'] as const

/**
 * 테스트 페이지
 * 추후 삭제 예정
 */
export function CommonComponentsPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-14">
      <section className="space-y-4">
        <p className="text-sm font-semibold text-brand-black">
          Field without label
        </p>
        <Input
          tone="default"
          containerClassName="max-w-[150px]"
          placeholder="CVV"
          rightIcon={<Eye className="size-4" strokeWidth={1.6} />}
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
            label="Your bonus card number"
            placeholder="Enter Card Number"
            tone="outline"
            containerClassName="border-0.5"
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
        <p className="text-sm font-semibold text-brand-black">Dropdown</p>
        <Input
          containerClassName="max-w-[230px]"
          readOnly
          rightIcon={<ChevronDown className="size-5" strokeWidth={1.5} />}
          value="By rating"
        />
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
            <Button key={variant} variant={variant} size="sm">
              Label
            </Button>
          ))}
          {buttonVariants.map((variant) => (
            <Button
              key={`${variant}-icon`}
              rightIcon={<ChevronDown className="size-4" strokeWidth={2} />}
              variant={variant}
              size="md"
            >
              Label
            </Button>
          ))}
          {buttonVariants.map((variant) => (
            <Button
              disabled
              key={`${variant}-disabled`}
              variant={variant}
              size="lg"
            >
              Label
            </Button>
          ))}
          {buttonVariants.map((variant) => (
            <Button
              disabled
              key={`${variant}-disabled`}
              variant={variant}
              size="xlg"
            >
              Label
            </Button>
          ))}
        </div>
      </section>
    </div>
  )
}
