// Self-hosted fonts: bundled into the site's own CSS, so nothing render-blocks on Google's servers
// and visitors' IP addresses are not sent to Google.

// Inter — body text; latin-ext carries the Hungarian ő/ű. Same weights Google served before
// (font-black therefore still renders at 700, as it always has).
import '@fontsource/inter/latin-400.css'
import '@fontsource/inter/latin-ext-400.css'
import '@fontsource/inter/latin-500.css'
import '@fontsource/inter/latin-ext-500.css'
import '@fontsource/inter/latin-600.css'
import '@fontsource/inter/latin-ext-600.css'
import '@fontsource/inter/latin-700.css'
import '@fontsource/inter/latin-ext-700.css'

// Montserrat Black — the logo, ASCII only.
import '@fontsource/montserrat/latin-900.css'

// The brand ticker's faces live in ./fonts-ticker and are loaded by BrandMarquee.
