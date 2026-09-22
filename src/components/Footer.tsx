import { Facebook } from 'lucide-react'

const LINKS = [
  { label: 'TERMÉKEK', href: '#termekek' },
  { label: 'RÓLUNK', href: '#rolunk' },
  { label: 'VÉLEMÉNYEK', href: '#velemenyek' },
  { label: 'KAPCSOLAT', href: '#kapcsolat' },
]

// Placeholder until the company's own Facebook page URL is known.
const FACEBOOK_URL = 'https://www.facebook.com/'

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 py-10 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* md:flex-1 on both side columns keeps the menu on the true centre line even though
              the logo is wider than the icon. */}
          <div className="flex md:flex-1 md:justify-start">
            <a href="#" className="font-logo font-black text-2xl text-white lowercase tracking-[-0.02em]">
              truckduo
            </a>
          </div>

          {/* max-sm width cap: on phones the four links wrap 2 + 2 instead of leaving
              "KAPCSOLAT" alone on the second line. */}
          <nav aria-label="Lábléc navigáció" className="flex flex-wrap justify-center gap-6 md:gap-10 max-sm:max-w-[15rem]">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs md:text-sm text-white/70 hover:text-white uppercase tracking-widest transition-colors duration-300 focus-visible:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex md:flex-1 md:justify-end">
            {/* p-2/-m-2 widens the tap target to 40px without moving the 24px icon. */}
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Truck Duo a Facebookon"
              className="-m-2 p-2 text-white hover:text-[#f97316] focus-visible:text-[#f97316] transition-colors duration-300"
            >
              <Facebook aria-hidden="true" className="w-6 h-6" />
            </a>
          </div>
        </div>

        <p className="text-white/30 text-xs mt-10 md:mt-12 text-center w-full block">
          © 2026 Truck Duo Kft. Minden jog fenntartva.
        </p>
      </div>
    </footer>
  )
}
