import AboutUs from '../components/Aboutus'
import Featured from '../components/Featured'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Products from '../components/Products'

const LandingPage = () => {
    return (
        <div className=' bg-black text-white'>
            <Header />
            <Hero />
            <AboutUs/>
            <Products/>
            <Featured/>
            <Footer/>
        </div>
    )
}

export default LandingPage
