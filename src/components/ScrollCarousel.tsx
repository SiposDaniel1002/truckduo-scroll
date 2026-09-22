import { useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { categories, type VehicleCategory } from '../data/categories'
import ArrowCta from './ArrowCta'

function SlideBody({ category, sizer = false }: { category: VehicleCategory; sizer?: boolean }) {
  const Title = sizer ? 'p' : 'h2'
  return (
    <>
      <span className="block border border-white/20 text-white/80 rounded-full px-4 py-1.5 text-xs tracking-widest uppercase w-max mb-4 md:mb-6">
        {category.category}
      </span>

      {/* min() caps the size once the container stops growing, so the longest single
          word ("SZEMÉLYAUTÓK") always fits the column without breaking or hyphenating. */}
      <Title className="text-[10vw] md:text-[min(4.8vw,5.25rem)] font-black leading-[0.9] text-white uppercase m-0 mb-4">
        {category.title}
      </Title>

      <p className="text-white/70 max-w-md text-sm md:text-base leading-relaxed mb-6 md:mb-8">{category.desc}</p>

      <ArrowCta href="#kapcsolat">Kapcsolat</ArrowCta>
    </>
  )
}

export default function ScrollCarousel() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    // Cap below 1 so the last category keeps the slot instead of overflowing the array.
    const clamped = Math.min(Math.max(progress, 0), 0.999999)
    const next = Math.floor(clamped * categories.length)
    setActiveIndex((current) => (current === next ? current : next))
  })

  const active = categories[activeIndex]

  return (
    <section ref={sectionRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Top padding clears the fixed navbar: the 64px mobile bar, the 80px desktop grid. */}
        <div className="h-full w-full flex flex-col md:flex-row items-center justify-between gap-y-6 px-6 md:px-12 pt-24 pb-6 md:py-20 container mx-auto">
          <div className="w-full md:w-1/2 relative shrink-0 md:h-full flex flex-col justify-center z-10">
            <div className="grid">
              <div className="col-start-1 row-start-1 self-start">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16, transition: { duration: 0.25, ease: [0.4, 0, 1, 1] } }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <SlideBody category={active} />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Mobile only: invisible copies of every slide hold the column at the tallest
                  slide's height, so the photo below never resizes when the text changes. */}
              {categories.map((category) => (
                <div key={category.id} aria-hidden="true" className="invisible col-start-1 row-start-1 md:hidden">
                  <SlideBody category={category} sizer />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: the photo takes whatever height is left, never more than half the screen,
              so short phones shrink the photo instead of pushing the text under the nav.
              md+: 80vh, capped to the space between the top and bottom padding (10rem) so
              short screens don't push the photo up under the fixed navbar. */}
          <div className="w-full md:w-1/2 relative flex-1 min-h-0 max-h-[50vh] md:flex-none md:h-[min(80vh,calc(100vh-10rem))] md:max-h-none">
            <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl">
              {categories.map((category, index) => (
                <img
                  key={category.id}
                  src={category.img}
                  alt={`${category.title} — ${category.category}`}
                  decoding="async"
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                    index === activeIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
