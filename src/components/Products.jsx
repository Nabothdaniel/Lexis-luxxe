import { useState } from 'react';
import { FiChevronLeft, FiChevronRight,FiArrowRight,FiMail } from "react-icons/fi";

export default function Products() {
  const [email, setEmail] = useState('');
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing email:', email);
    setEmail('');
  };
  
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

  return (
    <div className="bg-black p-6 font-sans max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-1">For your essential style.</h2>
        <p className="text-sm text-gray-600 mb-4">
          Choose from our carefully curated collection to enhance 
          your own expressiveness and add, no matter what the situation 
          or the aesthetic.
        </p>
        
        {/* Navigation Arrows */}
        <div className="flex justify-end gap-2 mb-4">
          <button className="bg-yellow-200 p-2 rounded-full">
            <FiChevronLeft size={20} />
          </button>
          <button className="bg-yellow-200 p-2 rounded-full">
            <FiChevronRight size={20} />
          </button>
        </div>
      </div>
      
      {/* Product Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {products.map((product) => (
          <div key={product.id} className="relative rounded-lg overflow-hidden border border-gray-200">
            <div className={`${product.color} h-48 flex items-center justify-center`}>
              <img src={product.image} alt={product.name} className="h-full object-cover" />
            </div>
            <div className="bg-black text-white p-2">
              <h3 className="font-bold">{product.name}</h3>
              <p className="text-xs text-gray-300">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
      
    
    </div>
  );
}