import heroBanner from '../assets/utils/grid-img.png'
import TypeWriter from './animation/TypeWriter';
import SwiperComponent from './SwipperComponents';

//image imports 

import Img1 from '../assets/hero/lexis-hero-img.png'
//import Img2 from '../assets/hero/lexis-hero-img2.png'

const Hero = () => {
  return (
    <section className=" text-white flex items-center   h-auto justify-center py-16 md:py-20 px-3  w-full" style={{ backgroundImage: `url(${heroBanner})` }}>

      <div className=" max-w-3xl text-center relative">
        <div className="">
          <img src={Img1} alt="hero icon" className='absolute top-5 right-2 z[-10]' />
        </div>
        <TypeWriter />
        <p className="text-base md:text-lg lg:text-2xl text-gray-200 mb-6 md:mb-8 px-4">
          Discover timeless fashion fits — only at Lexis Luxxe.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <a
            href="#"
            className="bg-transparent border border-white px-6 py-3 rounded font-semibold hover:bg-white active:bg-white hover:text-black transition"
          >
            Shop Now
          </a>
        </div>
        <SwiperComponent />

      </div>
    </section>
  );
};

export default Hero;
