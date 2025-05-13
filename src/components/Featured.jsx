// components/FeaturedSection.jsx
const products = [
  { name: 'Men’s Jacket', price: '$89', category: 'Men' },
  { name: 'Women’s Blazer', price: '$95', category: 'Women' },
  { name: 'Kid’s Hoodie', price: '$49', category: 'Kid' },
];

const Featured = () => {
  return (
    <section className=" bg-black text-white py-20  px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Featured Picks</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {products.map((product, index) => (
            <div key={index} className="bg-neutral-800 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-400 mb-2">{product.category}</p>
              <p className="text-lime-400 font-bold">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
