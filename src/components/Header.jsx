// components/Navbar.jsx
import { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import Logo from './utils/Logo';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuItems = ['Home', 'About Us', 'Products', 'Contact US '];

    return (
        <nav className="bg-neutral-900 text-white border-b border-neutral-700 px-5 py-3 flex justify-between items-center relative z-50 w-full">
            <Logo />

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-6 items-center">
                {menuItems.map((item) => (
                    <li
                        key={item}
                        className="text-sm hover:text-gray-300 cursor-pointer transition"
                    >
                        {item}
                    </li>
                ))}
                <li>
                    <button className="bg-lime-500 text-black px-4 py-1 rounded hover:bg-lime-400 transition">
                        Order Now
                    </button>
                </li>
            </ul>

            {/* Mobile Menu Icon */}
            <div className="md:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <HiX /> : <HiMenuAlt3 />}
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="fixed top-[60px] left-0 w-full bg-neutral-900 border-t border-neutral-700 md:hidden overflow-hidden">
                    <ul className="flex flex-col space-y-4 p-4">
                        {menuItems.map((item) => (
                            <li 
                                key={item} 
                                className="text-sm hover:bg-gray-300 py-2 px-3 rounded-sm hover:duration-250 hover:text-black cursor-pointer"
                                onClick={() => setMenuOpen(false)}
                            >
                                {item}
                            </li>
                        ))}
                        <li>
                            <button className="bg-lime-500 text-black w-full py-2 rounded hover:bg-lime-400 transition">
                                Order Now
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Header;