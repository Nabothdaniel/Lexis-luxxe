import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Import your images (replace with actual paths)
import springCollection from "../assets/shirt2.jpeg";
import summerEssentials from "../assets/shirt3.jpeg";
import autumnFavorites from "../assets/shirts.jpeg";

const SwipperComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const cards = [
    {
      id: 1,
      title: "Spring Collection",
      description: "Fresh styles for the new season",
      image: springCollection,
      cta: "Shop Now",
    },
    {
      id: 2,
      title: "Summer Essentials",
      description: "Lightweight fabrics for warm days",
      image: summerEssentials,
      cta: "Explore",
    },
    {
      id: 3,
      title: "Autumn Favorites",
      description: "Cozy layers for crisp weather",
      image: autumnFavorites,
      cta: "Discover",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    let interval
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        handleNext();
      }, 5000); // Change slide every 5 seconds
    }

    return () => clearInterval(interval);
  },[currentIndex, isAutoPlaying]);

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000); // Resume auto-play after 8 seconds
  };

  const slideVariants = {
    hidden: (direction) => ({
      x: direction === "right" ? "100%" : "-100%",
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
    exit: (direction) => ({
      x: direction === "right" ? "-100%" : "100%",
      opacity: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  const contentVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { delay: 0.3, duration: 0.5 }
    },
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      {/* External Controls */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">Featured Collections</h2>
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition shadow-sm"
            aria-label="Previous slide"
          >
            <FiChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition shadow-sm"
            aria-label="Next slide"
          >
            <FiChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Swiper Container */}
      <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-2xl shadow-lg">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0"
          >
            {/* Background Image */}
            <div className="absolute inset-0 bg-gray-100">
              <img
                src={cards[currentIndex].image}
                alt={cards[currentIndex].title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/20" /> {/* Overlay */}
            </div>

            {/* Content */}
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              className="relative h-full flex flex-col justify-center items-start p-12 text-white max-w-2xl"
            >
              <motion.h3 
                className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg"
                transition={{ delay: 0.4 }}
              >
                {cards[currentIndex].title}
              </motion.h3>
              <motion.p
                className="text-lg md:text-xl mb-8 drop-shadow-md"
                transition={{ delay: 0.5 }}
              >
                {cards[currentIndex].description}
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-gray-900 font-medium rounded-full shadow-lg"
                transition={{ delay: 0.6 }}
              >
                {cards[currentIndex].cta}
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicator Dots */}
      <div className="flex justify-center mt-8 gap-2">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-gray-900 w-6" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SwipperComponent;