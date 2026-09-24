import { useEffect, useRef } from 'react'

// Each wordmark gets its own face to approximate the real logo.
const BRANDS = [
  { name: 'SCANIA', className: 'font-logo font-bold tracking-widest' },
  { name: 'DAF', className: 'font-logo font-black tracking-wide' },
  { name: 'MAN', className: 'font-sans font-black tracking-tighter' },
  { name: 'IVECO', className: 'font-brand-block tracking-tight' },
  { name: 'RENAULT', className: 'font-brand-wide font-bold tracking-widest' },
  { name: 'BMW', className: 'font-sans font-bold tracking-wide' },
  { name: 'AUDI', className: 'font-brand-extended tracking-[0.2em]' },
  { name: 'VOLKSWAGEN', className: 'font-sans font-semibold tracking-[0.12em]' },
  { name: 'HONDA', className: 'font-brand-slab font-bold' },
  { name: 'YAMAHA', className: 'font-brand-condensed font-bold tracking-[0.12em]' },
  { name: 'SUZUKI', className: 'font-sans font-black italic tracking-tight' },
  { name: 'MERCEDES-BENZ', className: 'font-brand-garamond font-bold tracking-[0.16em]' },
  { name: 'VOLVO', className: 'font-brand-roman font-bold tracking-[0.2em]' },
]

export default function BrandMarquee() {
  const ref = useRef<HTMLDivElement>(null)

  // The wordmark faces are only needed here, several screens down. Their text is in the DOM from
  // the start, so left in the main CSS they would download at top priority alongside the hero
  // photo; instead they are fetched once the ticker is about a screen away.
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return
        observer.disconnect()
        void import('../fonts-ticker')
      },
      { rootMargin: '100% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="overflow-hidden py-10 md:py-14">
      {/* Phone copies are ~25% narrower; a shorter loop keeps the speed at ~52px/s everywhere. */}
      <div className="flex w-max animate-marquee max-md:[animation-duration:44s] motion-reduce:animate-none">
        {[0, 1].map((copy) => (
          // pr matches the gap so each copy carries its own trailing gap: two copies are then
          // exactly twice one period, and the -50% keyframe loops without a seam.
          <ul
            key={copy}
            aria-label={copy === 0 ? 'Forgalmazott márkák' : undefined}
            aria-hidden={copy === 1 ? true : undefined}
            className="flex shrink-0 items-baseline gap-16 pr-16 md:gap-24 md:pr-24"
          >
            {BRANDS.map((brand) => (
              <li
                key={brand.name}
                className={`whitespace-nowrap text-2xl md:text-3xl leading-none text-white [text-shadow:_0_4px_4px_rgb(0_0_0_/_50%)] ${brand.className}`}
              >
                {brand.name}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
