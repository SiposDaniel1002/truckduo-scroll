import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
// Blurred backdrop: the 640px copy looks the same under the blur at a fraction of the bytes.
import kamionPic from '../assets/kamion-pic-640.webp'

const REVIEWS = [
  {
    quote:
      'Kedves és segítőkész értékesítők!! Széles választék, szuper árak! Érdemes betérni hozzájuk, mert igazi profik!',
    author: 'Évi P.',
  },
  { quote: 'Széles választék hozzáértő segítőkész csapat!', author: 'Krisztián D.' },
  { quote: 'Többször jártam már itt és eddig mindig meg voltam elégedve.', author: 'Mihály S.' },
]

const STATS = [
  { value: '15', symbol: '+', label: 'ÉV TAPASZTALAT' },
  // Non-breaking space keeps the thousands group on one line.
  { value: '10 000', symbol: '+', label: 'ALKATRÉSZ RAKTÁRON' },
  { value: '98', symbol: '%', label: 'ELÉGEDETTSÉGI ARÁNY' },
  { value: '50', symbol: '+', label: 'FORGALMAZOTT MÁRKA' },
]

const REVIEW_INTERVAL_MS = 5000

export default function AboutReviews() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % REVIEWS.length), REVIEW_INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [])

  return (
    // overflow-clip, not just hidden: the scaled blur image gives a hidden section a scroll
    // range, and the VÉLEMÉNYEK anchor jump would scroll the section's contents out of place.
    // overflow-hidden stays as the fallback where clip is unsupported.
    <section id="rolunk" className="relative min-h-screen overflow-hidden overflow-clip">
      <img
        src={kamionPic}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full scale-110 object-cover blur-lg"
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="container relative mx-auto flex min-h-screen flex-col justify-center gap-16 px-6 py-24 md:gap-20 md:px-12">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-xs uppercase tracking-widest text-white/50">RÓLUNK</p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-5xl">
              Szakértelem és segítőkészség Békéscsabán
            </h2>

            <p className="mt-6 max-w-xl leading-relaxed text-white/70">
              A Truck Duo Kft. több éves tapasztalattal, széles alkatrész-választékkal és szuper árakkal
              várja vásárlóit Békés megyében. Csapatunk igazi profikból áll, akik készséggel segítenek
              megtalálni a megfelelő alkatrészt, legyen szó kamionról, utánfutóról vagy Simson motorról.
            </p>
          </div>

          <div
            id="velemenyek"
            className="relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl scroll-mt-32"
          >
            <Quote
              aria-hidden="true"
              strokeWidth={1.5}
              className="pointer-events-none absolute -top-3 right-3 h-24 w-24 text-white/[0.07] md:h-32 md:w-32"
            />

            <div className="relative">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <p className="text-3xl font-black leading-none text-white md:text-4xl">
                  5.0 <span className="text-white/40">/ 5</span>
                </p>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} aria-hidden="true" className="h-5 w-5 fill-[#f97316] text-[#f97316]" />
                  ))}
                </div>
              </div>

              <p className="mt-3 text-sm text-white/50">24 Google vélemény alapján</p>

              {/* All three quotes share one grid cell, so the card is always as tall as the
                  longest one at the current width and never resizes mid-rotation. */}
              <div className="mt-8 grid">
                {REVIEWS.map((item, i) => (
                  <motion.blockquote
                    key={item.author}
                    className="col-start-1 row-start-1"
                    initial={false}
                    animate={i === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    aria-hidden={i !== index}
                  >
                    <p className="text-base leading-relaxed text-white/90 md:text-lg">„{item.quote}”</p>
                    <footer className="mt-4 text-xs font-semibold uppercase tracking-widest text-[#f97316]">
                      {item.author}
                    </footer>
                  </motion.blockquote>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 border-t border-white/10 pt-12 md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              {/* text-5xl waits for lg: at md the grid is already 4-up but cells are only
                  ~150px, which "10 000+" overflows at 48px. */}
              <p className="text-4xl font-black leading-none text-white lg:text-5xl">
                {stat.value}
                <span className="text-[#f97316]">{stat.symbol}</span>
              </p>
              <p className="mt-3 text-[10px] uppercase tracking-widest text-white/50 md:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
