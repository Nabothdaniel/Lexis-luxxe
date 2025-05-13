import { FaWhatsapp, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function ContactUs() {
  const phoneNumber = '2348012345678'; // Replace with your WhatsApp number
  const message = encodeURIComponent("Hello, I’d like to make an inquiry.");

  const handleContactClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-1/2  flex items-center justify-center px-4 py-12">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-8  p-10 rounded-2xl shadow-lg border  hover:border-lime-200 hover:duration-100 active:border-lime-200 ">
        
        {/* WhatsApp Section */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h2 className="text-3xl font-bold text-white mb-3">Chat With Us</h2>
          <p className="text-gray-400 mb-6 text-sm">
            Need help or have questions? Reach out via WhatsApp and we’ll get back to you shortly.
          </p>
          <button
            onClick={handleContactClick}
            className="flex items-center justify-center  gap-3 bg-lime-800 text-white px-6 py-3 rounded-xl hover:bg-lime-500 active:bg-lime-500 active:text-white transition duration-300 font-medium text-lg shadow-md hover:shadow-lg"
          >
            <FaWhatsapp size={22} />
            Chat on WhatsApp
          </button>
          <p className="text-xs text-gray-600 mt-4">
            We typically respond within minutes during business hours.
          </p>
        </div>

        {/* Address Section */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h2 className="text-3xl font-bold text-white mb-3">Our Address</h2>
          <div className="text-gray-300 space-y-4 text-sm">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-lime-500" />
              <span>No. 12 Stylish Avenue, Lagos, Nigeria</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="text-lime-500" />
              <span>Mon - Sat: 9:00 AM – 9:00 PM</span>
            </div>
            <div className="mt-4 text-gray-500 text-xs">
              Feel free to walk in or schedule a visit.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
