import kamionPic from '../assets/kamion-pic.jpg'
import mercedesPic from '../assets/mercedes-pic.jpg'
import motorPic from '../assets/motor-pic.jpg'
import kerekparPic from '../assets/kerekpar-pic.jpg'

export type VehicleCategory = {
  id: string
  title: string
  category: string
  desc: string
  img: string
}

export const categories: VehicleCategory[] = [
  {
    id: 'kamion',
    title: 'KAMION ALKATRÉSZEK',
    category: 'Tehergépjármű',
    desc: 'Minden, amire egy kamionnak szüksége lehet. Széles választék, megbízható minőség, hogy a rakomány mindig célba érjen.',
    img: kamionPic,
  },
  {
    id: 'mercedes',
    title: 'SZEMÉLYAUTÓK',
    category: 'Autó',
    desc: 'Garantáljuk a zavartalan utazást. Minőségi alkatrészek és kiegészítők minden autótípushoz.',
    img: mercedesPic,
  },
  {
    id: 'motor',
    title: 'MOTOROS KIEGÉSZÍTŐK',
    category: 'Motor',
    desc: 'Két keréken szabadon. Alkatrészek, felszerelések és kiegészítők a maximális vezetési élményért.',
    img: motorPic,
  },
  {
    id: 'kerekpar',
    title: 'KERÉKPÁR ÉS EGYÉB',
    category: 'Kerékpár',
    desc: 'Aktív kikapcsolódás profi felszereléssel. Bicikli alkatrészek és egyéb jármű kiegészítők széles kínálata.',
    img: kerekparPic,
  },
]
