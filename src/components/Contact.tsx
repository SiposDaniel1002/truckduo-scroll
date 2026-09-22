import { Clock, MapPin, Phone } from 'lucide-react'
import kamionPic from '../assets/kamion-pic.jpg'
import { DIRECTIONS_URL, MAP_EMBED_URL } from '../data/company'
import ArrowCta from './ArrowCta'

const rowClass = 'flex items-center gap-4 text-white'
const iconClass = 'h-5 w-5 shrink-0 text-white'

export default function Contact() {
  return (
    // overflow-clip: a hidden section with the scaled blur image is programmatically scrollable,
    // so focus or anchor jumps could shift its contents; hidden stays as the fallback.
    <section id="kapcsolat" className="min-h-screen relative flex items-center overflow-hidden overflow-clip">
      <img
        src={kamionPic}
        alt=""
        aria-hidden="true"
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
                <li className={rowClass}>
                  <MapPin aria-hidden="true" className={iconClass} />
                  <span>Békéscsaba, Szarvasi út 47, 5600</span>
                </li>
                <li className={rowClass}>
                  <Phone aria-hidden="true" className={iconClass} />
                  <a href="tel:+3666448228" className="text-white decoration-2 underline-offset-4 hover:underline">
                    (06 66) 448 228
                  </a>
                </li>
                <li className={rowClass}>
                  <Clock aria-hidden="true" className={iconClass} />
                  <span>Nyitva: H-P, 8:00-tól</span>
                </li>
              </ul>
            </address>

            <ArrowCta href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" fullWidth className="mt-8">
              Útvonalterv indítása
            </ArrowCta>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-2xl h-[400px] md:h-full min-h-[400px]">
          <iframe
            title="Truck Duo Kft. – Békéscsaba, Szarvasi út 47"
            src={MAP_EMBED_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="h-full w-full border-0 [filter:invert(90%)_hue-rotate(180deg)]"
          />
        </div>
      </div>
    </section>
  )
}
