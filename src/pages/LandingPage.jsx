import AboutUs from '../components/AboutUs'
import ContactUs from '../components/ContactUs'
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
            <ContactUs/>
            <Footer/>
        </div>
    )
}

export default LandingPage
