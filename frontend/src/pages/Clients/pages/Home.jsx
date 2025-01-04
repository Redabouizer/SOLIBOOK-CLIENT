import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import RecommendedSection from '../components/RecommendedSection'
import NewArrivals from '../components/NewArrivals'
import Reviews from '../components/Reviews'
import Stats from '../components/Stats'
import Professional from '../components/Professional'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <RecommendedSection />
      <NewArrivals />
      <Reviews />
      <Stats />
      <Professional />
      <Footer />
    </div>
  )
}

export default Home