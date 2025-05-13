import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight} from "react-icons/fi";

export default function Products() {
    const [email, setEmail] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('right');



   

    const products = [
        {
            id: 1,
            name: "Cozy",
            description: "Stylish brown corduroy jacket",
            image: "/api/placeholder/150/200",
            color: "bg-green-200"
        },
        {
            id: 2,
            name: "Elegant",
            description: "Sophisticated casual jacket",
            image: "/api/placeholder/150/200",
            color: "bg-purple-200"
        },
        {
            id: 3,
            name: "Casual",
            description: "Comfortable fit for any occasion",
            image: "/api/placeholder/150/200",
            color: "bg-yellow-200"
        },
        {
            id: 4,
            name: "Vibrant",
            description: "Bold patterns and colors",
            image: "/api/placeholder/150/200",
            color: "bg-pink-300"
        }
    ];

    const nextSlide = () => {
        setDirection('right');
        setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setDirection('left');
        setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
    };

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
        <div className="bg-black p-6 py-12 font-sans max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="mb-6">
                <h2 className="text-xl font-bold mb-1 text-white">For your essential style.</h2>
                <p className="text-sm text-gray-400 mb-4">
                    Choose from our carefully curated collection to enhance
                    your own expressiveness and add, no matter what the situation
                    or the aesthetic.
                </p>

                {/* Navigation Arrows */}
                <div className="flex justify-end gap-2 mb-4">
                    <button
                        onClick={prevSlide}
                        className="bg-yellow-200 p-2 rounded-full hover:bg-yellow-300 transition"
                    >
                        <FiChevronLeft size={20} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="bg-yellow-200 p-2 rounded-full hover:bg-yellow-300 transition"
                    >
                        <FiChevronRight size={20} />
                    </button>
                </div>
            </div>

            {/* Product Cards Swiper */}
            <div className="relative h-96 md:h-[400px] w-full overflow-hidden mb-8">
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
                        <div className={`${products[currentIndex].color} h-full rounded-lg overflow-hidden border border-gray-700 flex flex-col`}>
                            <div className="flex-1 flex items-center justify-center p-4">
                                <img
                                    src={products[currentIndex].image}
                                    alt={products[currentIndex].name}
                                    className="h-full w-full object-contain"
                                />
                            </div>
                            <div className="bg-black text-white p-4">
                                <h3 className="font-bold text-lg">{products[currentIndex].name}</h3>
                                <p className="text-sm text-gray-300">{products[currentIndex].description}</p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Product Dots Indicator */}
            <div className="flex justify-center gap-2 mb-8">
                {products.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setDirection(index > currentIndex ? 'right' : 'left');
                            setCurrentIndex(index);
                        }}
                        className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-yellow-200 w-6' : 'bg-gray-600'
                            }`}
                    />
                ))}
            </div>

         
        </div>
    );
}