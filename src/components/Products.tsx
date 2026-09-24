import { useRef, useState } from 'react'
import { ArrowUpRight, CircleDot, Cog, Container, Disc3, Droplet, Filter, Phone, Truck, X, Zap } from 'lucide-react'
import ArrowCta from './ArrowCta'
import BrandMarquee from './BrandMarquee'

const PRODUCT_CATEGORIES = [
  {
    id: 'fekrendszer',
    name: 'Fékrendszer',
    icon: Disc3,
    text: 'Maximális fékhatás és biztonság. Kínálatunk lefedi a legkülönfélébb féktechnológiákat teher- és személygépjárművekhez: egykörös és kétkörös fékrendszer, hidraulikus fékrendszer, modern EBS fékrendszer, valamint specifikus kétkörös pótkocsi fékrendszer és utánfutó fékrendszer alkatrészek garantálják a megbízható megállást.',
  },
  {
    id: 'motor',
    name: 'Motor és hajtás',
    icon: Cog,
    text: 'Békés megye legnagyobb Simson alkatrészek kínálata Békéscsabán! Legyen szó gyári Simson S51, Simson Star, Simson Schwalbe, Simson SR50 vagy Simson Enduro (S51 Enduro gyári) modellekről, nálunk mindent megtalál. Keresett Simson karburátor, Simson kipufogó vagy egyéb eladó Simson alkatrészek után kutat? Hozza rendbe Simson motorját minőségi és kedvező árú alkatrészeinkkel!',
  },
  {
    id: 'szurok',
    name: 'Szűrők',
    icon: Filter,
    text: 'Tiszta motor, hosszabb élettartam. Békéscsabai üzletünkben prémium minőségű olajszűrők, levegőszűrők, üzemanyagszűrők és pollenszűrők közül választhat személyautóhoz, kisteherautóhoz és kamionhoz egyaránt. A rendszeres szűrőcsere a megbízható működés alapja – nálunk minden szükséges szűrőt egy helyen megtalál.',
  },
  {
    id: 'elektromos',
    name: 'Elektromos rendszer és világítás',
    icon: Zap,
    text: 'Minden, ami a jármű elektromos hálózatához kell. Megbízható auto akkumulátor modellek (ha időszerű az akkumulátor csere), nagy teljesítményű akkumulátor töltő készülékek és strapabíró akkumulátor saru választék. Továbbá izzók, egyedi LED táblák és extra hangerejű kürtök minden járműtípushoz.',
  },
  {
    id: 'kamion',
    name: 'Kamion alkatrészek és egyéb jármű',
    icon: Truck,
    text: 'Professzionális kamion alkatrészek és felszerelések. Legyen az nyerges kamion, klasszikus csőrös kamion, Mercedes kamion vagy Scania, nálunk megtalálja a szükséges kiegészítőket a zavartalan fuvarozáshoz. Tachográf korongok, kamionmosó kefék, tömlőbilincsek és kötelező elsősegély felszerelések széles választékban.',
  },
  {
    id: 'olajok',
    name: 'Olajok és kenőanyagok',
    icon: Droplet,
    text: 'Gondoskodjon járműve hosszú élettartamáról és maximális teljesítményéről prémium kenőanyagokkal. Kínálatunkban kiemelkedő minőségű motor olaj és hidraulika olaj termékek találhatók minden járműkategóriához, beleértve a megbízható Valvoline kenőanyagokat is.',
  },
  {
    id: 'futomu',
    name: 'Futómű és kormány',
    icon: CircleDot,
    text: 'Stabil úttartás és precíz kormányzás minden kilométeren. Békéscsabai üzletünkben prémium minőségű futómű- és kormányalkatrészeket kínálunk személy- és tehergépjárművekhez: lengéscsillapítók, gömbfejek, szilentblokkok, kormányösszekötők és kerékcsapágyak széles választékban várják Békés megye autósait.',
  },
  {
    id: 'utanfuto',
    name: 'Utánfutó alkatrészek',
    icon: Container,
    text: 'Minden, ami a biztonságos vontatáshoz kell! Utánfutó alkatrészek széles választéka Békés megyében, legyen az egy- vagy kéttengelyes utánfutó, esetleg specifikus Kalydi utánfutó. Kínálatunkban megtalálható minden elengedhetetlen tartozék: utánfutó csatlakozó, utánfutó csatlakozó átalakító és utánfutó lámpa azonnal raktárról, hogy a munka sose álljon meg.',
  },
]

type ProductCategory = (typeof PRODUCT_CATEGORIES)[number]

const titleId = (id: string) => `termek-${id}-cim`

export default function Products() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [selected, setSelected] = useState<ProductCategory | null>(null)

  const openDetails = (category: ProductCategory) => {
    setSelected(category)
    // Stop the page scrolling behind the pop-up; restored in onClose (X, Esc or backdrop).
    document.documentElement.style.overflow = 'hidden'
    dialogRef.current?.showModal()
  }

  const closeDetails = () => dialogRef.current?.close()

  return (
    <section id="termekek" className="flex min-h-[70vh] flex-col bg-[#0a0a0a]">
      <div className="container mx-auto flex-1 px-6 pt-24 md:px-12 md:pt-32">
        <h2 className="text-4xl font-black uppercase leading-none text-white sm:text-5xl md:text-7xl">KÍNÁLATUNK</h2>

        {/* Below 360px two columns leave ~80px for a title, less than one long Hungarian word needs. */}
        <ul className="mt-10 grid grid-cols-2 gap-4 max-[359px]:grid-cols-1 md:mt-14 md:grid-cols-4 md:gap-6">
          {PRODUCT_CATEGORIES.map((category) => {
            const Icon = category.icon
            return (
              <li key={category.id}>
                <button
                  type="button"
                  aria-haspopup="dialog"
                  onClick={() => openDetails(category)}
                  className="group flex h-full min-h-[160px] md:min-h-[180px] w-full flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left transition-colors duration-300 hover:border-[#f97316] hover:bg-[#f97316]/[0.06] focus-visible:border-[#f97316] focus-visible:bg-[#f97316]/[0.06] focus-visible:outline-none"
                >
                  {/* Arrow shares the top row with the icon so the title gets the card's full width. */}
                  <span className="flex w-full items-start justify-between gap-4">
                    <Icon
                      aria-hidden="true"
                      strokeWidth={1.5}
                      className="h-8 w-8 text-white/60 transition-colors duration-300 group-hover:text-[#f97316] group-focus-visible:text-[#f97316]"
                    />
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-5 w-5 shrink-0 text-white/40 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#f97316] group-focus-visible:text-[#f97316]"
                    />
                  </span>
                  {/* Sized so the longest word ("KENŐANYAGOK") fits the card without breaking:
                      scales with the viewport on two-column phones, 12px in the 4-up tablet grid. */}
                  <span className="text-[length:clamp(12px,calc(6.2vw-10.5px),18px)] max-[359px]:text-[length:18px] md:text-[length:12px] lg:text-[length:18px] font-bold uppercase leading-tight text-white">
                    {category.name}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="mt-16 md:mt-24">
        <BrandMarquee />
      </div>

      {/* One native dialog: top layer (above the z-[100] navbar), Esc to close, focus kept inside
          and handed back to the card on close. Every category's text is rendered (hidden) so all
          eight stay in the page for search engines, not just the one that was clicked. */}
      <dialog
        ref={dialogRef}
        aria-labelledby={selected ? titleId(selected.id) : undefined}
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

          {PRODUCT_CATEGORIES.map((category) => (
            <article key={category.id} hidden={selected?.id !== category.id}>
              <h3 id={titleId(category.id)} className="pr-12 text-2xl max-[359px]:text-xl font-black uppercase leading-tight">
                {category.name}
              </h3>
              <p className="mt-5 leading-relaxed text-white/70">{category.text}</p>
            </article>
          ))}

          <p className="text-white/70 text-sm md:text-base font-medium mt-6 mb-4">
            Ha nem biztos benne, hogy megtalálta a megfelelő információt vagy alkatrészt, hívjon minket bizalommal!
          </p>
          {/* Same pill as the other orange buttons, with a phone in the circle. */}
          <div className="w-full md:w-[280px]">
            <ArrowCta href="tel:+3666448228" icon={Phone} fullWidth>
              Üzlet hívása
            </ArrowCta>
          </div>
        </div>
      </dialog>
    </section>
  )
}
