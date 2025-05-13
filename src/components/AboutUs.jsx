import { motion } from 'framer-motion';
import aboutImage1 from '../assets/lexis-ceo.jpeg';

const AboutUs = () => {
  return (
    <section id="about" className="relative bg-black overflow-hidden px-6 py-20">
      {/* Slanted Image Background */}
      <div className="absolute inset-0 flex overflow-hidden opacity-20">
        <div className="relative w-1/3 h-full transform -skew-x-12 origin-center overflow-hidden">
          <img
            src={aboutImage1}
            alt="Men's collection"
            className="w-full h-full object-cover transform skew-x-8 md:skew-x-12"
          />
        </div>
      </div>

      {/* Animated Content */}
      <motion.div 
        className="relative max-w-4xl mx-auto text-center z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-lime-400 via-lime-300 to-white bg-clip-text text-transparent">
            About Lexis Luxxe
          </span>
        </h2>

        <div className="bg-black/80 backdrop-blur-sm p-8 rounded-xl border border-white">
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
            At Lexis, we believe fashion is more than just clothing — it's a statement of identity and confidence.
          </p>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
            Our collections are crafted with premium materials and timeless designs to suit every personality.
          </p>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Whether you're dressing up or keeping it casual, Lexis has something that fits <span className="italic text-white">you</span>.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
