import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { ChevronRight } from 'lucide-react'

type ArrowCtaProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  fullWidth?: boolean
}

export default function ArrowCta({ children, fullWidth = false, className = '', ...anchorProps }: ArrowCtaProps) {
  return (
    <a
      {...anchorProps}
      className={`group ${fullWidth ? 'flex w-full justify-between' : 'inline-flex'} items-center gap-3 rounded-full bg-[#f97316] py-2 pl-7 pr-2 shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#fb8b3c] hover:shadow-[0_0_32px_rgba(249,115,22,0.65)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/70 active:translate-y-0 ${className}`}
    >
      <span className="text-sm font-semibold tracking-wide text-white md:text-base">{children}</span>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white transition-transform duration-300 ease-out group-hover:translate-x-1">
        <ChevronRight className="h-5 w-5 text-black" strokeWidth={2.5} />
      </span>
    </a>
  )
}
