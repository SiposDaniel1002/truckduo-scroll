import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { DIRECTIONS_URL } from '../data/company'
import ArrowCta from './ArrowCta'

const LINKS = [
  { label: 'TERMÉKEK', href: '#termekek' },
  { label: 'RÓLUNK', href: '#rolunk' },
  { label: 'VÉLEMÉNYEK', href: '#velemenyek' },
  { label: 'KAPCSOLAT', href: '#kapcsolat' },
]

const MENU_ID = 'mobil-menu'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isMobileMenuOpen) return

    closeRef.current?.focus()
    document.documentElement.style.overflow = 'hidden'
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.documentElement.style.overflow = ''
      toggleRef.current?.focus()
    }
  }, [isMobileMenuOpen])

  return (
    // <header> gives the page its banner landmark; the fixed <nav> inside takes no space in flow.
    <header>
      <nav aria-label="Fő navigáció" className="fixed top-0 w-full z-[100] bg-transparent">
        <div className="hidden md:grid grid-cols-5 items-center w-full max-w-[1400px] mx-auto px-6 py-6 text-white">
          {LINKS.slice(0, 2).map((link) => (
            <div key={link.href} className="flex justify-center uppercase tracking-widest text-sm">
              <a href={link.href} className="whitespace-nowrap text-white decoration-2 underline-offset-8 hover:underline">
                {link.label}
              </a>
            </div>
          ))}

          {/* font-logo keeps the Montserrat brand mark. */}
          <div className="flex justify-center font-black text-2xl lowercase font-logo tracking-[-0.02em]">
            <a href="#" className="text-white">
              truckduo
            </a>
          </div>

          {LINKS.slice(2).map((link) => (
            <div key={link.href} className="flex justify-center uppercase tracking-widest text-sm">
              <a href={link.href} className="whitespace-nowrap text-white decoration-2 underline-offset-8 hover:underline">
                {link.label}
              </a>
            </div>
          ))}
        </div>

        <div className="flex md:hidden w-full justify-between items-center px-6 py-4 fixed top-0 z-[110] bg-black/80 backdrop-blur-md">
          <a href="#" className="font-logo font-black text-2xl lowercase text-white tracking-[-0.02em]">
            truckduo
          </a>

          {/* -mr-2 p-2 gives the icon a 44px tap target without moving it off the px-6 edge. */}
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Menü megnyitása"
            aria-expanded={isMobileMenuOpen}
            aria-controls={MENU_ID}
            className="-mr-2 p-2 text-white"
          >
            <Menu aria-hidden="true" className="h-7 w-7" />
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id={MENU_ID}
              role="dialog"
              aria-modal="true"
              aria-label="Mobil menü"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16, transition: { duration: 0.2, ease: [0.4, 0, 1, 1] } }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-[120] bg-[#0a0a0a] flex flex-col justify-center items-center md:hidden"
            >
              <button
                ref={closeRef}
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Menü bezárása"
                className="absolute top-6 right-6 text-white cursor-pointer"
              >
                <X aria-hidden="true" className="w-8 h-8" />
              </button>

              <div className="flex flex-col items-center gap-10">
                {LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-bold uppercase tracking-widest text-white hover:text-[#f97316] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Sibling of the link list, so only mt-12 applies — inside it the gap-10 would add on top.
                  ArrowCta is the same pill component the hero and Kapcsolat use. */}
              <div className="mt-12 w-[280px] mx-auto">
                <ArrowCta
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  fullWidth
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Útvonalterv indítása
                </ArrowCta>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
