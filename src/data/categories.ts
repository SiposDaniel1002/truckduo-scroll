import kamionPic from '../assets/kamion-pic.webp'
import kamionPic640 from '../assets/kamion-pic-640.webp'
import kamionPic1024 from '../assets/kamion-pic-1024.webp'
import kamionPic1440 from '../assets/kamion-pic-1440.webp'
import mercedesPic from '../assets/mercedes-pic.webp'
import mercedesPic640 from '../assets/mercedes-pic-640.webp'
import mercedesPic1024 from '../assets/mercedes-pic-1024.webp'
import mercedesPic1440 from '../assets/mercedes-pic-1440.webp'
import simsonPic from '../assets/simson-pic.webp'
import simsonPic640 from '../assets/simson-pic-640.webp'
import utanfuto from '../assets/utanfuto.webp'
import utanfuto640 from '../assets/utanfuto-640.webp'
import utanfuto1024 from '../assets/utanfuto-1024.webp'
import utanfuto1440 from '../assets/utanfuto-1440.webp'

// srcset from { width: url }: smaller copies of the same photo (same aspect ratio), then the full file.
const widths = (sources: Record<number, string>) =>
  Object.entries(sources)
    .map(([width, url]) => `${url} ${width}w`)
    .join(', ')

export type VehicleCategory = {
  id: string
  title: string
  category: string
  desc: string
  img: string
  srcSet: string
  // Intrinsic pixel size of the full file, rendered as width/height attributes.
  imgWidth: number
  imgHeight: number
}

export const categories: VehicleCategory[] = [
  {
    id: 'kamion',
    title: 'KAMION ALKATRÉSZEK',
    category: 'Tehergépjármű',
    desc: 'Minden, amire egy kamionnak szüksége lehet. Széles választék, megbízható minőség, hogy a rakomány mindig célba érjen.',
    img: kamionPic,
    srcSet: widths({ 640: kamionPic640, 1024: kamionPic1024, 1440: kamionPic1440, 1920: kamionPic }),
    imgWidth: 1920,
    imgHeight: 1440,
  },
  {
    id: 'mercedes',
    title: 'SZEMÉLYAUTÓK',
    category: 'Autó',
    desc: 'Garantáljuk a zavartalan utazást. Minőségi alkatrészek és kiegészítők minden autótípushoz.',
    img: mercedesPic,
    srcSet: widths({ 640: mercedesPic640, 1024: mercedesPic1024, 1440: mercedesPic1440, 1920: mercedesPic }),
    imgWidth: 1920,
    imgHeight: 1440,
  },
  {
    id: 'motor',
    title: 'MOTOROS KIEGÉSZÍTŐK',
    category: 'Motor',
    desc: 'Két keréken szabadon. Alkatrészek, felszerelések és kiegészítők a maximális vezetési élményért.',
    img: simsonPic,
    srcSet: widths({ 640: simsonPic640, 1184: simsonPic }),
    imgWidth: 1184,
    imgHeight: 1480,
  },
  {
    id: 'utanfuto',
    title: 'UTÁNFUTÓ KIEGÉSZÍTŐK',
    category: 'Utánfutó',
    desc: 'Minden, ami a biztonságos vontatáshoz és teherszállításhoz szükséges. Megbízható utánfutó alkatrészek és kiegészítők széles választéka.',
    img: utanfuto,
    srcSet: widths({ 640: utanfuto640, 1024: utanfuto1024, 1440: utanfuto1440, 2159: utanfuto }),
    imgWidth: 2159,
    imgHeight: 1440,
  },
]
