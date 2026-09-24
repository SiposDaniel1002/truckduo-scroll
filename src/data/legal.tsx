import type { ReactNode } from 'react'
import { COMPANY, HOSTING } from './company'

export type LegalDoc = {
  id: 'adatkezeles' | 'aszf' | 'impresszum'
  /** Footer link text */
  label: string
  /** Heading inside the dialog */
  title: string
  body: ReactNode
}

const EFFECTIVE = 'Hatályos: 2026. szeptember 24-től'

const External = ({ href, children }: { href: string; children: ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
)

const Phones = () => (
  <>
    {COMPANY.phones.map((p, i) => (
      <span key={p.tel}>
        {i > 0 && <br />}
        {p.label}: <a href={`tel:${p.tel}`}>{p.number}</a>
      </span>
    ))}
  </>
)

const CompanyDetails = ({ withCourt = false }: { withCourt?: boolean }) => (
  <dl>
    <dt>Cégnév</dt>
    <dd>{COMPANY.name}</dd>
    <dt>Rövidített cégnév</dt>
    <dd>{COMPANY.shortName}</dd>
    <dt>Székhely</dt>
    <dd>{COMPANY.seat}</dd>
    <dt>Üzlet</dt>
    <dd>{COMPANY.shop}</dd>
    <dt>Cégjegyzékszám</dt>
    <dd>{COMPANY.registrationNumber}</dd>
    {withCourt && (
      <>
        <dt>Nyilvántartó bíróság</dt>
        <dd>{COMPANY.registryCourt}</dd>
      </>
    )}
    <dt>Adószám</dt>
    <dd>{COMPANY.taxNumber}</dd>
    <dt>E-mail</dt>
    <dd>
      <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
    </dd>
    <dt>Telefon</dt>
    <dd>
      <Phones />
    </dd>
  </dl>
)

const impresszum: LegalDoc = {
  id: 'impresszum',
  label: 'Impresszum',
  title: 'Impresszum',
  body: (
    <>
      <p>
        Az elektronikus kereskedelmi szolgáltatások, valamint az információs társadalommal összefüggő szolgáltatások
        egyes kérdéseiről szóló 2001. évi CVIII. törvény alapján a weboldal üzemeltetőjének adatai:
      </p>

      <h3>Üzemeltető</h3>
      <CompanyDetails withCourt />

      <h3>Tárhelyszolgáltató</h3>
      <dl>
        <dt>Név</dt>
        <dd>{HOSTING.name}</dd>
        <dt>Cím</dt>
        <dd>{HOSTING.address}</dd>
        <dt>E-mail</dt>
        <dd>
          <a href={`mailto:${HOSTING.email}`}>{HOSTING.email}</a>
        </dd>
        <dt>Weboldal</dt>
        <dd>
          <External href={HOSTING.web}>{HOSTING.web.replace('https://', '')}</External>
        </dd>
      </dl>

      <h3>Szerzői jogok és védjegyek</h3>
      <p>
        A weboldal tartalma (szövegek, fényképek, grafikai elemek, logó) a {COMPANY.shortName} vagy jogosult harmadik
        felek szellemi tulajdona. A tartalom – részben vagy egészben – kizárólag a {COMPANY.shortName} előzetes írásbeli
        hozzájárulásával másolható, terjeszthető vagy használható fel.
      </p>
      <p>
        A weboldalon feltüntetett gyártói márkanevek és védjegyek (például Volvo, Scania, DAF, MAN, Mercedes-Benz,
        Simson, Valvoline) jogosultjaik tulajdonát képezik. Megjelenítésük kizárólag a forgalmazott alkatrészek és a
        kompatibilis járművek azonosítását szolgálja, és nem jelent hivatalos kereskedői vagy partneri kapcsolatot a
        védjegyek jogosultjaival.
      </p>
    </>
  ),
}

const aszf: LegalDoc = {
  id: 'aszf',
  label: 'Általános Szerződési Feltételek (ÁSZF)',
  title: 'Általános Szerződési Feltételek',
  body: (
    <>
      <p className="legal-effective">{EFFECTIVE}</p>

      <h3>1. A szolgáltató</h3>
      <p>
        A weboldalt a {COMPANY.name} (székhely: {COMPANY.seat}; üzlet: {COMPANY.shop}; cégjegyzékszám:{' '}
        {COMPANY.registrationNumber}; adószám: {COMPANY.taxNumber}; a továbbiakban: Szolgáltató) üzemelteti. További
        elérhetőségei az Impresszumban találhatók.
      </p>

      <h3>2. Az ÁSZF hatálya</h3>
      <p>
        Jelen Általános Szerződési Feltételek a weboldal használatára, valamint a weboldalon található elérhetőségeken
        kezdeményezett kapcsolatfelvételre vonatkoznak. A weboldal böngészésével a látogató tudomásul veszi az ÁSZF
        rendelkezéseit.
      </p>

      <h3>3. A weboldal jellege</h3>
      <p>
        A weboldal a Szolgáltató tájékoztató jellegű bemutatkozó felülete és alkatrész-katalógusa. A weboldalon nincs
        lehetőség online rendelésre, fizetésre vagy szerződéskötésre.
      </p>
      <p>
        A közzétett információk – termékkategóriák, leírások, képek – tájékoztató jellegűek, és nem minősülnek a Polgári
        Törvénykönyvről szóló 2013. évi V. törvény szerinti ajánlatnak. A termékek aktuális elérhetőségéről, műszaki
        adatairól és áráról személyesen az üzletben vagy telefonon adunk tájékoztatást. A képek illusztrációk; a
        ténylegesen forgalmazott termékek megjelenése eltérhet tőlük.
      </p>

      <h3>4. Vásárlás</h3>
      <p>
        Termékeink az üzletünkben ({COMPANY.shop}) nyitvatartási időben vásárolhatók meg. Telefonon előzetesen
        érdeklődhet egy alkatrész elérhetőségéről, és kérheti annak félretételét vagy beszerzését; az adásvételi
        szerződés az üzletben, a felek személyes jelenlétében jön létre. A vételár kiegyenlítése az üzletben, az ott
        elérhető fizetési módokon történik.
      </p>
      <p>
        Mivel a szerződés az üzlethelyiségben, a felek egyidejű jelenlétében jön létre, a fogyasztó és a vállalkozás
        közötti szerződések részletes szabályairól szóló 45/2014. (II. 26.) Korm. rendelet szerinti, távollévők között
        kötött szerződésekre vonatkozó 14 napos elállási jog nem alkalmazandó.
      </p>

      <h3>5. Szavatosság és jótállás</h3>
      <p>
        A vásárlót a hatályos jogszabályok – különösen a Polgári Törvénykönyv – szerinti kellékszavatossági jogok, a
        gyártóval szemben termékszavatossági jogok, valamint a jogszabályban meghatározott termékek esetén kötelező
        jótállás illetik meg. Igényét a vásárlást igazoló bizonylattal az üzletben érvényesítheti.
      </p>

      <h3>6. Felelősség</h3>
      <p>
        A Szolgáltató a weboldal tartalmát gondosan állítja össze, de nem vállal felelősséget az esetleges elírásokért,
        illetve a tájékoztató jellegű információk pontatlanságából eredő károkért. Egy alkatrész adott járműhöz való
        megfelelőségéről vásárlás előtt kérje munkatársaink tanácsát.
      </p>
      <p>
        A weboldal külső szolgáltatásokra (Google Térkép, Facebook) mutató hivatkozásokat, valamint a látogató kérésére
        betölthető beágyazott Google Térképet tartalmaz, amelyek tartalmáért és adatkezeléséért azok üzemeltetői
        felelnek.
      </p>

      <h3>7. Panaszkezelés</h3>
      <p>
        Panaszát személyesen az üzletben, telefonon a <a href={`tel:${COMPANY.phones[0].tel}`}>{COMPANY.phones[0].number}</a>{' '}
        számon vagy e-mailben a <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> címen jelezheti. Az írásban
        benyújtott panaszt 30 napon belül érdemben megvizsgáljuk és megválaszoljuk.
      </p>
      <p>
        Ha a panasz rendezése nem vezet eredményre, fogyasztóként a lakóhelye vagy tartózkodási helye szerint illetékes
        békéltető testülethez, illetve a fogyasztóvédelmi hatósághoz fordulhat.
      </p>

      <h3>8. Adatkezelés</h3>
      <p>A személyes adatok kezeléséről az Adatkezelési tájékoztató rendelkezik.</p>

      <h3>9. Záró rendelkezések</h3>
      <p>
        Az ÁSZF-re a magyar jog az irányadó. A Szolgáltató jogosult az ÁSZF-et egyoldalúan módosítani; a módosítás a
        weboldalon történő közzététellel lép hatályba.
      </p>
    </>
  ),
}

const adatkezeles: LegalDoc = {
  id: 'adatkezeles',
  label: 'Adatkezelési tájékoztató',
  title: 'Adatkezelési tájékoztató',
  body: (
    <>
      <p className="legal-effective">{EFFECTIVE}</p>
      <p>
        A {COMPANY.shortName} elkötelezett ügyfelei és weboldala látogatóinak személyes adatai védelme iránt. Jelen
        tájékoztató az Európai Parlament és a Tanács (EU) 2016/679 rendelete (általános adatvédelmi rendelet, GDPR),
        valamint az információs önrendelkezési jogról és az információszabadságról szóló 2011. évi CXII. törvény
        (Infotv.) alapján ismerteti, milyen személyes adatokat, milyen célból és meddig kezelünk, és milyen jogok
        illetik meg Önt.
      </p>

      <h3>1. Az adatkezelő</h3>
      <CompanyDetails />

      <h3>2. A weboldal látogatása</h3>
      <p>
        A weboldalon nincs regisztráció, kapcsolatfelvételi űrlap vagy hírlevél, és nem használunk látogatottságmérő vagy
        hirdetési célú követőkódot (például Google Analytics vagy Facebook Pixel). A betűtípusokat saját szerverünkről
        töltjük be, így azok megjelenítésekor sem kerül adat harmadik félhez.
      </p>
      <p>
        A weboldal megjelenítésekor a tárhelyszolgáltató szerverei a működéshez és a biztonsághoz szükséges technikai
        adatokat (IP-cím, böngésző típusa, a látogatás időpontja, a megtekintett oldal) rögzíthetik.
      </p>
      <ul>
        <li>
          <strong>Cél:</strong> a weboldal biztonságos működtetése, a visszaélések és támadások kivédése.
        </li>
        <li>
          <strong>Jogalap:</strong> az adatkezelő jogos érdeke (GDPR 6. cikk (1) bekezdés f) pont).
        </li>
        <li>
          <strong>Időtartam:</strong> a tárhelyszolgáltató szabályai szerinti rövid ideig.
        </li>
        <li>
          <strong>Adatfeldolgozó:</strong> {HOSTING.name} ({HOSTING.address}). A szolgáltató az EU–USA adatvédelmi
          keretrendszer (Data Privacy Framework) alapján tanúsított, így az Egyesült Államokba irányuló adattovábbítás
          megfelelő garanciák mellett történik.
        </li>
      </ul>

      <h3>3. Kapcsolatfelvétel és ajánlatkérés</h3>
      <p>
        Ha telefonon, e-mailben vagy személyesen keres meg minket, a megkeresés megválaszolásához szükséges adatokat
        kezeljük: név, telefonszám, e-mail-cím, valamint a megkeresés tartalma (például a jármű típusa és a keresett
        alkatrész).
      </p>
      <ul>
        <li>
          <strong>Cél:</strong> az érdeklődés megválaszolása, alkatrész felkutatása és beszerzése, árajánlat adása.
        </li>
        <li>
          <strong>Jogalap:</strong> az Ön kérésére a szerződés megkötését megelőző lépések megtétele (GDPR 6. cikk (1)
          bekezdés b) pont), illetve az adatkezelő jogos érdeke (f) pont).
        </li>
        <li>
          <strong>Időtartam:</strong> a megkeresés lezárását követő legfeljebb 1 évig, ha abból nem jön létre vásárlás.
        </li>
      </ul>

      <h3>4. Vásárlás és számlázás</h3>
      <p>Vásárláskor a számla kiállításához szükséges adatokat (név, cím, cég esetén adószám) kezeljük.</p>
      <ul>
        <li>
          <strong>Jogalap:</strong> jogi kötelezettség teljesítése (GDPR 6. cikk (1) bekezdés c) pont), a számvitelről
          szóló 2000. évi C. törvény alapján.
        </li>
        <li>
          <strong>Időtartam:</strong> a számviteli bizonylatokat a jogszabály előírása szerint 8 évig őrizzük meg.
        </li>
      </ul>

      <h3>5. Sütik (cookie-k)</h3>
      <p>A weboldal saját maga nem használ sütiket, és nem tárol adatot az Ön böngészőjében.</p>
      <p>
        A Kapcsolat szakaszban a Google Térkép nem töltődik be automatikusan: helyén egy helyőrző jelenik meg, és a
        térkép csak akkor töltődik be, ha Ön a „Térkép betöltése” gombra kattint. Addig a weboldal nem kapcsolódik a
        Google szervereihez, így adat sem kerül a Google-hoz.
      </p>
      <p>
        A gombra kattintva Ön hozzájárul a térkép betöltéséhez (GDPR 6. cikk (1) bekezdés a) pont). Ekkor a Google
        Ireland Limited (Gordon House, Barrow Street, Dublin 4, Írország) önálló adatkezelőként sütiket helyezhet el és
        adatokat (például IP-címet) gyűjthet a saját adatvédelmi szabályai szerint:{' '}
        <External href="https://policies.google.com/privacy">policies.google.com/privacy</External>. A hozzájárulás
        csak az adott oldalmegtekintésre szól, a weboldal nem jegyzi meg: az oldal újratöltése után a térkép ismét csak
        kattintásra jelenik meg. A Google által már elhelyezett sütiket böngészője beállításaiban törölheti.
      </p>
      <p>
        A tárhelyszolgáltató a szolgáltatás biztonsága érdekében technikailag szükséges, biztonsági célú sütit
        helyezhet el. A sütiket böngészője beállításaiban bármikor törölheti vagy letilthatja.
      </p>

      <h3>6. Külső hivatkozások</h3>
      <p>
        A weboldal a Facebook-oldalunkra mutató hivatkozást tartalmaz. A hivatkozásra kattintva a Meta Platforms
        Ireland Ltd. oldalára jut, ahol az adatkezelésre a Meta saját szabályai vonatkoznak. A weboldal nem ágyaz be
        Facebook-tartalmat, így a hivatkozásra kattintás előtt nem továbbít adatot a Meta részére.
      </p>

      <h3>7. Adattovábbítás és adatbiztonság</h3>
      <p>
        Személyes adatait nem adjuk el, és harmadik félnek csak jogszabályi kötelezettség alapján (például hatósági
        megkeresésre) továbbítjuk. Az adatokat megfelelő technikai és szervezési intézkedésekkel védjük a jogosulatlan
        hozzáférés, módosítás és megsemmisülés ellen.
      </p>

      <h3>8. Az Ön jogai</h3>
      <ul>
        <li>
          <strong>Hozzáférés:</strong> tájékoztatást kérhet arról, hogy kezelünk-e Önről személyes adatot, és ha igen,
          melyeket.
        </li>
        <li>
          <strong>Helyesbítés:</strong> kérheti pontatlan adatai kijavítását.
        </li>
        <li>
          <strong>Törlés:</strong> kérheti adatai törlését, ha az adatkezelésnek nincs más jogalapja.
        </li>
        <li>
          <strong>Korlátozás:</strong> kérheti az adatkezelés korlátozását.
        </li>
        <li>
          <strong>Adathordozhatóság:</strong> kérheti adatai tagolt, géppel olvasható formában történő kiadását.
        </li>
        <li>
          <strong>Tiltakozás:</strong> a jogos érdeken alapuló adatkezelés ellen bármikor tiltakozhat.
        </li>
      </ul>
      <p>
        Kérelmét e-mailben, a székhelyünkre címzett levélben vagy személyesen az üzletben nyújthatja be. Kérelmére
        indokolatlan késedelem nélkül, legfeljebb egy hónapon belül válaszolunk.
      </p>

      <h3>9. Jogorvoslat</h3>
      <p>
        Ha úgy érzi, hogy személyes adatai kezelése sérti a jogszabályokat, panaszt tehet a Nemzeti Adatvédelmi és
        Információszabadság Hatóságnál (NAIH):
      </p>
      <dl>
        <dt>Cím</dt>
        <dd>1055 Budapest, Falk Miksa utca 9–11.</dd>
        <dt>Levelezési cím</dt>
        <dd>1363 Budapest, Pf. 9.</dd>
        <dt>Telefon</dt>
        <dd>
          <a href="tel:+3613911400">+36 1 391 1400</a>
        </dd>
        <dt>E-mail</dt>
        <dd>
          <a href="mailto:ugyfelszolgalat@naih.hu">ugyfelszolgalat@naih.hu</a>
        </dd>
        <dt>Weboldal</dt>
        <dd>
          <External href="https://www.naih.hu">www.naih.hu</External>
        </dd>
      </dl>
      <p>
        Jogai megsértése esetén bírósághoz is fordulhat; a pert – választása szerint – a lakóhelye vagy tartózkodási
        helye szerint illetékes törvényszék előtt is megindíthatja.
      </p>

      <h3>10. A tájékoztató módosítása</h3>
      <p>
        Az adatkezelő fenntartja a jogot a tájékoztató módosítására. A mindenkor hatályos változat a weboldalon érhető
        el.
      </p>
    </>
  ),
}

// Footer order
export const LEGAL_DOCS: LegalDoc[] = [adatkezeles, aszf, impresszum]
