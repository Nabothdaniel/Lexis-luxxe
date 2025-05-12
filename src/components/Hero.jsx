// components/HeroSection.jsx
const Hero = () => {
  return (
    <section className=" text-white flex items-center justify-center py-16 md:py-20 px-6">
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      <div className="relative z-10 max-w-3xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Wear Confidence. <br className="hidden md:block" /> Define Your Style.
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Discover timeless fashion fits — only at Lexis Luxxe.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
          <a
            href="#"
            className="bg-transparent border border-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-black transition"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
