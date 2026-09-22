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
        <ScrollCarousel />
        <AboutReviews />
        <Products />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
