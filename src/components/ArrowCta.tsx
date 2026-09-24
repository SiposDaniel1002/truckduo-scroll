import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { ChevronRight, type LucideIcon } from 'lucide-react'

type CtaOptions = {
  children: ReactNode
  fullWidth?: boolean
  icon?: LucideIcon
}

type ArrowCtaProps = AnchorHTMLAttributes<HTMLAnchorElement> & CtaOptions
type ArrowCtaButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & CtaOptions

const ctaClass = (fullWidth: boolean, className: string) =>
  `group ${fullWidth ? 'flex w-full justify-between' : 'inline-flex'} items-center gap-3 rounded-full bg-[#f97316] py-2 pl-7 pr-2 shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#fb8b3c] hover:shadow-[0_0_32px_rgba(249,115,22,0.65)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/70 active:translate-y-0 ${className}`

function CtaContent({ children, Icon }: { children: ReactNode; Icon: LucideIcon }) {
  return (
    <>
      {/* Dark label: white on #f97316 is only 2.8:1 (fails WCAG AA); #0a0a0a on it is ~7:1. */}
      <span className="text-sm font-semibold tracking-wide text-[#0a0a0a] md:text-base">{children}</span>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white transition-transform duration-300 ease-out group-hover:translate-x-1">
        <Icon aria-hidden="true" className="h-5 w-5 text-black" strokeWidth={2.5} />
      </span>
    </>
  )
}

export default function ArrowCta({ children, fullWidth = false, icon = ChevronRight, className = '', ...anchorProps }: ArrowCtaProps) {
  return (
    <a {...anchorProps} className={ctaClass(fullWidth, className)}>
      <CtaContent Icon={icon}>{children}</CtaContent>
    </a>
  )
}

// The same pill for in-page actions that don't navigate.
export function ArrowCtaButton({
  children,
  fullWidth = false,
  icon = ChevronRight,
  className = '',
  type = 'button',
  ...buttonProps
}: ArrowCtaButtonProps) {
  return (
    <button {...buttonProps} type={type} className={ctaClass(fullWidth, className)}>
      <CtaContent Icon={icon}>{children}</CtaContent>
    </button>
  )
}
