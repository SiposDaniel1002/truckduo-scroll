import { useRef, useState } from 'react'
import { ArrowUpRight, CircleDot, Cog, Container, Disc3, Droplet, Filter, Lightbulb, X, Zap } from 'lucide-react'
import BrandMarquee from './BrandMarquee'

// Placeholder categories until the shop catalogue exists.
const PRODUCT_CATEGORIES = [
  { name: 'Fékrendszer', icon: Disc3 },
  { name: 'Motor és hajtás', icon: Cog },
  { name: 'Szűrők', icon: Filter },
  { name: 'Elektromos rendszer', icon: Zap },
  { name: 'Világítás', icon: Lightbulb },
  { name: 'Olajok és kenőanyagok', icon: Droplet },
  { name: 'Futómű és kormány', icon: CircleDot },
  { name: 'Utánfutó alkatrészek', icon: Container },
]

const PRODUCT_SEO_TEXT =
  'Megbízható, prémium minőségű alkatrészek és kiegészítők. Kínálatunkban megtalálhatók fékrendszerek, szűrők, motorikus alkatrészek, futómű elemek, valamint világítás- és elektronikai berendezések. Garantáljuk a hosszú élettartamot és a maximális teljesítményt minden járműtípushoz.'

export default function Products() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [selected, setSelected] = useState<string | null>(null)

  const openDetails = (name: string) => {
    setSelected(name)
    // Stop the page scrolling behind the pop-up; restored in onClose (X, Esc or backdrop).
    document.documentElement.style.overflow = 'hidden'
    dialogRef.current?.showModal()
  }

  const closeDetails = () => dialogRef.current?.close()

  return (
    <section id="termekek" className="flex min-h-[70vh] flex-col bg-[#0a0a0a]">
      <div className="container mx-auto flex-1 px-6 pt-24 md:px-12 md:pt-32">
        <h2 className="text-4xl font-black uppercase leading-none text-white sm:text-5xl md:text-7xl">KÍNÁLATUNK</h2>

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-14 md:gap-6 lg:grid-cols-4">
          {PRODUCT_CATEGORIES.map(({ name, icon: Icon }) => (
            <li key={name}>
              <button
                type="button"
                aria-haspopup="dialog"
                onClick={() => openDetails(name)}
                className="group flex h-full min-h-44 w-full flex-col justify-between gap-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left transition-colors duration-300 hover:border-[#f97316] hover:bg-[#f97316]/[0.06] focus-visible:border-[#f97316] focus-visible:bg-[#f97316]/[0.06] focus-visible:outline-none"
              >
                <Icon
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="h-8 w-8 text-white/60 transition-colors duration-300 group-hover:text-[#f97316] group-focus-visible:text-[#f97316]"
                />
                <span className="flex w-full items-end justify-between gap-4">
                  <span className="text-lg font-bold uppercase leading-tight text-white">{name}</span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 text-white/40 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#f97316] group-focus-visible:text-[#f97316]"
                  />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-16 md:mt-24">
        <BrandMarquee />
      </div>

      {/* One shared native dialog: top layer (above the z-[100] navbar), Esc to close,
          focus kept inside and handed back to the card on close. */}
      <dialog
        ref={dialogRef}
        aria-labelledby="termek-dialog-title"
        onClose={() => {
          document.documentElement.style.overflow = ''
        }}
        onClick={(event) => {
          // The inner panel fills the dialog, so a click that targets the dialog itself hit the backdrop.
          if (event.target === event.currentTarget) closeDetails()
        }}
        className="m-auto w-[min(92vw,34rem)] rounded-2xl border border-white/10 bg-[#111] p-0 text-white shadow-2xl backdrop:bg-black/75 backdrop:backdrop-blur-sm open:animate-dialog-in backdrop:animate-fade-in motion-reduce:open:animate-none motion-reduce:backdrop:animate-none"
      >
        <div className="relative p-8 md:p-10">
          <button
            type="button"
            onClick={closeDetails}
            aria-label="Bezárás"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#f97316]"
          >
            <X aria-hidden="true" className="h-5 w-5" />
          </button>

          <h3 id="termek-dialog-title" className="pr-12 text-2xl font-black uppercase leading-tight">
            {selected ?? 'Kínálatunk'}
          </h3>
          <p className="mt-5 leading-relaxed text-white/70">{PRODUCT_SEO_TEXT}</p>
        </div>
      </dialog>
    </section>
  )
}
