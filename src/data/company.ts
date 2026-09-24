const MAP_QUERY = encodeURIComponent('Szarvasi út 47, 5600 Békéscsaba, Magyarország')

export const MAP_EMBED_URL = `https://maps.google.com/maps?q=${MAP_QUERY}&hl=hu&z=16&output=embed`
export const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`

// Registry data as published on nemzeticegtar.hu (checked 2026-09-23). The registered seat
// (Székhely) differs from the shop (Üzlet); both are shown, labelled, wherever an address appears.
// The e-mail was confirmed by the client on 2026-09-24.
export const COMPANY = {
  name: 'TRUCK DUO Kereskedelmi és Szolgáltató Korlátolt Felelősségű Társaság',
  shortName: 'TRUCK DUO Kft.',
  seat: '5600 Békéscsaba, Gyöngyösi utca 89.',
  shop: '5600 Békéscsaba, Szarvasi út 47.',
  registrationNumber: '04-09-009158',
  registryCourt: 'Gyulai Törvényszék Cégbírósága',
  taxNumber: '14809730-2-04',
  email: 'truckduo@gmail.com',
  phones: [
    { label: 'Üzlet', number: '(06 66) 448 228', tel: '+3666448228' },
    { label: 'Pálfi János', number: '(06 30) 225 2390', tel: '+36302252390' },
    { label: 'Szemenyei Szabolcs', number: '(06 20) 253 2255', tel: '+36202532255' },
  ],
}

// Where the site is served from; the Impresszum must name it (Ekertv.: name, address, e-mail).
// The e-mail is the hosting contact the client specified on 2026-09-24.
export const HOSTING = {
  name: 'Cloudflare, Inc.',
  address: '101 Townsend St., San Francisco, CA 94107, Amerikai Egyesült Államok',
  email: 'donci.sipos@gmail.com',
  web: 'https://www.cloudflare.com',
}
