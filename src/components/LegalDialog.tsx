import type { RefObject } from 'react'
import { X } from 'lucide-react'
import type { LegalDoc } from '../data/legal'

const TITLE_ID = 'jogi-dokumentum-cim'

type LegalDialogProps = {
  dialogRef: RefObject<HTMLDialogElement>
  doc: LegalDoc | null
}

export default function LegalDialog({ dialogRef, doc }: LegalDialogProps) {
  const close = () => dialogRef.current?.close()

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={TITLE_ID}
      onClose={() => {
        document.documentElement.style.overflow = ''
      }}
      onClick={(event) => {
        // The panel fills the dialog, so a click that targets the dialog itself hit the backdrop.
        if (event.target === event.currentTarget) close()
      }}
      className="m-auto w-[min(94vw,48rem)] max-h-[85vh] overflow-hidden rounded-2xl border border-white/10 bg-[#111] p-0 text-white shadow-2xl backdrop:bg-black/75 backdrop:backdrop-blur-sm open:animate-dialog-in backdrop:animate-fade-in motion-reduce:open:animate-none motion-reduce:backdrop:animate-none"
    >
      {/* Header stays put while the document scrolls. It is always rendered so the close button
          exists when showModal() runs and receives the initial focus. */}
      <div className="flex max-h-[85vh] flex-col">
        <div className="flex items-start justify-between gap-4 border-b border-white/10 px-6 py-5 md:px-10 md:py-6">
          <h2 id={TITLE_ID} className="text-xl font-black uppercase leading-tight md:text-2xl">
            {doc?.title}
          </h2>
          <button
            type="button"
            onClick={close}
            aria-label="Bezárás"
            className="-mr-2 -mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#f97316]"
          >
            <X aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>

        {doc && (
          // key resets the scroll position when another document is opened
          <div
            key={doc.id}
            tabIndex={0}
            role="region"
            aria-labelledby={TITLE_ID}
            className="legal-prose min-h-0 flex-1 overflow-y-auto px-6 py-6 focus-visible:outline-none md:px-10 md:py-8"
          >
            {doc.body}
          </div>
        )}
      </div>
    </dialog>
  )
}
