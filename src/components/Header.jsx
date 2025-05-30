// components/Navbar.jsx
import { useState } from 'react';
import {
    HiMenuAlt3,
    HiX,
    HiHome,
    HiInformationCircle,
    HiShoppingBag,
    HiMail,
    HiShoppingCart
} from 'react-icons/hi';
import Logo from './utils/Logo';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = [
        { name: 'Home', icon: <HiHome className="mr-2" />, href: '#home' },
        { name: 'About Us', icon: <HiInformationCircle className="mr-2" />, href: '#about' },
        { name: 'Products', icon: <HiShoppingBag className="mr-2" />, href: '#products' },
        { name: 'Contact Us', icon: <HiMail className="mr-2" />, href: '#contact' }
    ];

    const phoneNumber = '2349169294534'; // Replace with your WhatsApp number
    const message = encodeURIComponent("Hello, I’d like to make an inquiry.");

    const handleContactClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(url, '_blank');
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <nav className="bg-neutral-900 text-white border-b border-neutral-700 px-5 py-3 flex justify-between items-center w-full">
                {/* Logo */}
                <div className="flex items-center">
                    <Logo />
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 items-center">
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                className="flex items-center text-sm hover:text-gray-300 transition"
                            >
                                {item.icon}
                                {item.name}
                            </a>
                        </li>
                    ))}
                    <li>
                        <button
                        onClick={handleContactClick}
                            
                            className="flex items-center bg-lime-500 text-black px-4 py-1 rounded hover:bg-lime-400 transition"
                        >
                            <HiShoppingCart className="mr-1" />
                            Order Now
                        </button>
                    </li>
                </ul>

                {/* Mobile Menu Icon */}
                <div
                    className="md:hidden text-2xl cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                >
                    {menuOpen ? <HiX /> : <HiMenuAlt3 />}
                </div>

                {/* Mobile Overlay */}
                <div
                    className={`fixed inset-0 transition-opacity duration-300 md:hidden ${menuOpen ? 'opacity-100 z-40' : 'opacity-0 pointer-events-none'}`}
                    onClick={() => setMenuOpen(false)}
                >
                    {/* Mobile Panel */}
                    <div
                        className={`fixed top-[60px] left-0 w-full bg-neutral-900 border-t border-neutral-700 transition-transform duration-300 ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ul className="flex flex-col space-y-2 p-4">
                            {menuItems.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        onClick={() => setMenuOpen(false)}
                                        className="flex items-center text-sm hover:bg-gray-300 py-3 px-3 rounded-sm hover:text-black transition"
                                    >
                                        {item.icon}
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a
                                    href="#order"
                                    onClick={() => setMenuOpen(false)}
                                    className="flex items-center justify-center bg-lime-500 text-black w-full py-3 rounded hover:bg-lime-400 transition"
                                >
                                    <HiShoppingCart className="mr-2" />
                                    Order Now
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
