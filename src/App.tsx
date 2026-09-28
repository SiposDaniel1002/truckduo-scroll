import AboutReviews from './components/AboutReviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Products from './components/Products'
import ScrollCarousel from './components/ScrollCarousel'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        {/* The visible headings are per-section h2s; this gives the page its single top-level
            heading for screen readers and search engines without changing the design. */}
        <h1 className="sr-only">Truck Duo – kamion, utánfutó és Simson alkatrészek Békéscsabán</h1>
        <ScrollCarousel />
        <AboutReviews />
        <Products />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
