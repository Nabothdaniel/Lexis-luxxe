import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import img1 from '../assets/shirt2.jpeg'
import img2 from '../assets/shirt3.jpeg'
import img4 from '../assets/shirt4.jpeg'
import img5 from '../assets/shirt5.jpeg'
import img6 from '../assets/shirt6.jpeg'
import img7 from '../assets/shirt7.jpeg'
import img8 from '../assets/shirt8.jpeg'
import img9 from '../assets/shirt9.jpeg'
import img10 from '../assets/shirt10.jpeg'
import img11 from '../assets/shirt11.jpeg'
import img12 from '../assets/shirt12.jpeg'
import img13 from '../assets/shirt13.jpeg'
import img14 from '../assets/shirt14.jpeg'
import img15 from '../assets/shirt15.jpeg'
import img16 from '../assets/shirt16.jpeg'
import img17 from '../assets/shirt17.jpeg'
import img18 from '../assets/shirt18.jpeg'
import img19 from '../assets/shirt19.jpeg'
import img20 from '../assets/shirt20.jpeg'
import img21 from '../assets/shirt21.jpeg'

export default function Products() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('right');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const products = [
        { id: 1, image: img1, name: 'Casual Tee', description: 'A stylish and comfy casual tee.' },
        { id: 2, image: img2, name: 'Summer Vibes', description: 'Perfect shirt for the summer heat.' },
        { id: 3, image: img4, name: 'Urban Wear', description: 'Trendy shirt for the city life.' },
        { id: 4, image: img5, name: 'Bold Look', description: 'Make a statement anywhere you go.' },
        { id: 5, image: img6, name: 'Soft Fabric', description: 'Comfort with a smooth finish.' },
        { id: 6, image: img7, name: 'Retro Style', description: 'Classic look with modern comfort.' },
        { id: 7, image: img8, name: 'Minimalist', description: 'Clean, simple, elegant.' },
        { id: 8, image: img9, name: 'Work Ready', description: 'Smart casual for everyday hustle.' },
        { id: 9, image: img10, name: 'Weekend Fit', description: 'Chill style for weekend outings.' },
        { id: 10, image: img11, name: 'Night Out', description: 'Look sharp after hours.' },
        { id: 11, image: img12, name: 'Monochrome', description: 'Subtle tones for quiet elegance.' },
        { id: 12, image: img13, name: 'Streetwear', description: 'Bold graphics meet street style.' },
        { id: 13, image: img14, name: 'Chic Classic', description: 'Dress to impress, effortlessly.' },
        { id: 14, image: img15, name: 'Denim Ready', description: 'Pairs great with your favorite jeans.' },
        { id: 15, image: img16, name: 'Outdoor Vibe', description: 'Ready for adventure.' },
        { id: 16, image: img17, name: 'Formal Touch', description: 'Refined for the modern man.' },
        { id: 17, image: img18, name: 'Graphic Tee', description: 'Show off your personality.' },
        { id: 18, image: img19, name: 'Everyday Favorite', description: 'The shirt you’ll always reach for.' },
        { id: 19, image: img20, name: 'Eco Fit', description: 'Sustainably made, incredibly soft.' },
        { id: 20, image: img21, name: 'Luxury Feel', description: 'Premium cotton blend.' },
    ];

    const nextSlide = () => {
        setDirection('right');
        setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setDirection('left');
        setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const cardVariants = {
        enter: (direction) => ({
            x: direction === 'right' ? 300 : -300,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: {
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
            }
        },
        exit: (direction) => ({
            x: direction === 'right' ? -300 : 300,
            opacity: 0,
            transition: {
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
            }
        })
    };

    return (
        <div id='products' className="bg-black p-6 py-16 font-sans max-w-6xl mx-auto" ref={ref}>
            {/* Animated Section Header */}
            <AnimatePresence>
                {isInView && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-white text-4xl md:text-6xl  mb-2 tracking-wide ">
                            <span className="bg-gradient-to-r from-lime-400 via-lime-300 to-white bg-clip-text text-transparent">
                                Products
                            </span>
                        </h1>
                        <p className="text-white text-lg font-medium animate-pulse">
                            ✨ Discover Your Style ✨
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Slider & Buttons */}
            <div className="mb-6 flex justify-between items-start gap-4">
                <div className="relative h-96 md:h-[400px] flex-1 overflow-hidden">
                    <AnimatePresence custom={direction} initial={false}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={cardVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="absolute inset-0"
                        >
                            <div className="h-full w-full rounded-lg overflow-hidden border border-gray-700">
                                <img
                                    src={products[currentIndex].image}
                                    alt={`Product ${currentIndex}`}
                                    className="h-full w-full object-contain"
                                />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Buttons & thumbnails */}
                <div className="flex flex-col items-center gap-4">
                    <button
                        onClick={prevSlide}
                        className="bg-white text-black p-2 rounded-full hover:bg-gray-100 transition"
                    >
                        <FiChevronLeft size={20} />
                    </button>

                    <div className="space-y-2">
                        {[1, 2].map((offset) => {
                            const index = (currentIndex + offset) % products.length;
                            return (
                                <img
                                    key={index}
                                    src={products[index].image}
                                    alt={`Thumbnail ${index}`}
                                    className="w-16 h-16 rounded border border-gray-600 object-cover"
                                />
                            );
                        })}
                    </div>

                    <button
                        onClick={nextSlide}
                        className="bg-white text-black p-2 rounded-full hover:bg-gray-100 transition"
                    >
                        <FiChevronRight size={20} />
                    </button>
                </div>
            </div>

            {/* Product Title & Description */}
            <div className="text-center text-white space-y-2">
                <h2 className="text-2xl font-semibold">{products[currentIndex].name}</h2>
                <p className="text-gray-400">{products[currentIndex].description}</p>
            </div>
        </div>
    );
}
