// components/Footer.jsx
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import Logo from './utils/Logo';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                {/* Brand Info */}
                <div className='flex flex-col gap-3 items-center md:items-start'>
                        <Logo />

                    <p className="text-gray-400">
                        Timeless fashion for every generation. Designed for comfort. Made for confidence.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
                    <ul className="space-y-1 text-gray-300">
                        <li><a href="/shop/men" className="hover:text-white">Men</a></li>
                        <li><a href="/shop/women" className="hover:text-white">Women</a></li>
                        <li><a href="/shop/kid" className="hover:text-white">Kid</a></li>
                        <li><a href="/about" className="hover:text-white">About Us</a></li>
                        <li><a href="/store-locator" className="hover:text-white">Store Locator</a></li>
                    </ul>
                </div>

                {/* Social Icons */}
                <div>
                    <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
                    <div className="flex justify-center md:justify-start gap-4 text-lg">
                        <a href="#" className="hover:text-lime-400"><FaFacebookF /></a>
                        <a href="#" className="hover:text-lime-400"><FaInstagram /></a>
                        <a href="#" className="hover:text-lime-400"><FaTwitter /></a>
                    </div>
                </div>
            </div>

            <div className="text-center text-gray-500 text-sm mt-10 border-t border-neutral-700 pt-6">
                © {new Date().getFullYear()} Lexis. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
