import { Fragment, useEffect, useRef, useState } from 'react'
import { Clock, Mail, Map as MapIcon, MapPin, Phone } from 'lucide-react'
// Blurred backdrop: the 640px copy looks the same under the blur at a fraction of the bytes.
import kamionPic from '../assets/kamion-pic-640.webp'
import { COMPANY, DIRECTIONS_URL, MAP_EMBED_URL } from '../data/company'
import ArrowCta, { ArrowCtaButton } from './ArrowCta'

const PHONES = COMPANY.phones

const HOURS = [
  { days: 'Hétfő – Péntek', time: '8:00 – 17:00' },
  { days: 'Szombat', time: '8:00 – 12:00' },
  { days: 'Vasárnap', time: 'Zárva' },
]

const rowClass = 'flex items-center gap-4 text-white'
// Multi-line rows: the icon lines up with the first line of text, not the middle of the block.
const stackedRowClass = 'flex items-start gap-4 text-white'
const iconClass = 'h-5 w-5 shrink-0 text-white'
const stackedIconClass = `${iconClass} mt-0.5 md:mt-1`

export default function Contact() {
  // Google Maps sets cookies as soon as the embed loads, so the iframe is only rendered once the
  // visitor asks for it (click-to-load). Not remembered: every page view starts with the placeholder.
  const [mapConsent, setMapConsent] = useState(false)
  const mapRef = useRef<HTMLIFrameElement>(null)

  // The load button disappears on click; hand keyboard focus to the map rather than losing it.
  useEffect(() => {
    if (mapConsent) mapRef.current?.focus()
  }, [mapConsent])

  return (
    // overflow-clip: a hidden section with the scaled blur image is programmatically scrollable,
    // so focus or anchor jumps could shift its contents; hidden stays as the fallback.
    <section id="kapcsolat" className="min-h-screen relative flex items-center overflow-hidden overflow-clip">
      <img
        src={kamionPic}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full scale-125 object-cover blur-2xl"
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 container mx-auto px-6 z-10 relative py-24 md:py-32">
        <div>
          <p className="text-xs uppercase tracking-widest text-white/50">KAPCSOLAT</p>
          {/* text-6xl waits for lg: in a 768px half-column (and on sub-360 phones at 5xl)
              "üzletünkben!" is wider than the column. */}
          <h2 className="mt-4 text-5xl max-[359px]:text-4xl lg:text-6xl mb-8 font-bold leading-tight text-white">
            Várjuk üzletünkben!
          </h2>

          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-8">
            <address className="not-italic">
              <ul className="space-y-5 text-base md:text-lg">
                {/* The shop is the only address here — visitors come to Szarvasi út 47. The
                    registered seat belongs in the footer and the legal documents. */}
                <li className={stackedRowClass}>
                  <MapPin aria-hidden="true" className={stackedIconClass} />
                  {/* Wraps only at the comma, so "47." never ends up alone on a phone. */}
                  <span>
                    {COMPANY.shop.split(', ').map((part, i) => (
                      <Fragment key={part}>
                        {i > 0 && ', '}
                        <span className="whitespace-nowrap">{part}</span>
                      </Fragment>
                    ))}
                  </span>
                </li>
                <li className={stackedRowClass}>
                  <Phone aria-hidden="true" className={stackedIconClass} />
                  <ul className="space-y-1">
                    {PHONES.map((phone) => (
                      <li key={phone.tel}>
                        <a href={`tel:${phone.tel}`} className="text-white decoration-2 underline-offset-4 hover:underline">
                          {phone.label} - <span className="whitespace-nowrap">{phone.number}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className={rowClass}>
                  <Mail aria-hidden="true" className={iconClass} />
                  <a href={`mailto:${COMPANY.email}`} className="text-white decoration-2 underline-offset-4 hover:underline">
                    {COMPANY.email}
                  </a>
                </li>
                <li className={stackedRowClass}>
                  <Clock aria-hidden="true" className={stackedIconClass} />
                  <dl className="space-y-1">
                    {HOURS.map((row) => (
                      <div key={row.days}>
                        <dt className="inline">{row.days}:</dt>{' '}
                        <dd className="inline whitespace-nowrap">{row.time}</dd>
                      </div>
                    ))}
                  </dl>
                </li>
              </ul>
            </address>

            <ArrowCta href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" fullWidth className="mt-8">
              Útvonalterv indítása
            </ArrowCta>
          </div>
        </div>

        {/* The placeholder fills the same box the map will, so loading it moves nothing. */}
        <div className="rounded-2xl overflow-hidden shadow-2xl h-[400px] md:h-full min-h-[400px]">
          {mapConsent ? (
            <iframe
              ref={mapRef}
              title="Truck Duo Kft. – Békéscsaba, Szarvasi út 47"
              src={MAP_EMBED_URL}
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="h-full w-full border-0 [filter:invert(90%)_hue-rotate(180deg)]"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/40 px-6 py-10 text-center backdrop-blur-md">
              <MapIcon aria-hidden="true" className="h-10 w-10 text-white/70" strokeWidth={1.5} />
              <ArrowCtaButton onClick={() => setMapConsent(true)} className="mt-6">
                Térkép betöltése
              </ArrowCtaButton>
              <p className="mt-4 max-w-xs text-xs leading-relaxed text-white/60">
                A térkép betöltésével Ön elfogadja a Google adatvédelmi irányelveit.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
