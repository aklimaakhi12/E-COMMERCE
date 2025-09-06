import React, { useState } from "react";


export default function ProductGrid() {
 const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  const products = [
    {
      id: 1,
      name: "Elegant Kurti",
      price: "1500 BDT",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300",
      rating: 4,
      category: "Women"
    },
    {
      id: 2,
      name: "Men's Polo Shirt",
      price: "1200 BDT",
      image: "https://images.unsplash.com/photo-1530845641249-2a177ec1d94c?w=300",
      rating: 5,
      category: "Men"
    },
    // Add more product objects here
  ];

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#f7f7f7] min-h-screen">
      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-white border-b">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border px-4 py-2 rounded w-full md:w-1/3 mb-2 md:mb-0"
        />
        <div className="flex space-x-3 text-sm">
          <button className="px-3 py-1 border rounded hover:bg-gray-200">Women</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-200">Men</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-200">Accessories</button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.slice(0, visibleCount).map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition duration-200 overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-gray-500 mb-2">{product.price}</p>
              <div className="flex items-center mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < product.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.179c.969 0 1.371 1.24.588 1.81l-3.384 2.46a1 1 0 00-.364 1.118l1.286 3.975c.3.921-.755 1.688-1.54 1.118l-3.384-2.46a1 1 0 00-1.176 0l-3.384 2.46c-.784.57-1.838-.197-1.539-1.118l1.286-3.975a1 1 0 00-.364-1.118L2.045 9.402c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.975z" />
                  </svg>
                ))}
              </div>
              <button className="w-full bg-[#e53935] text-white py-2 rounded hover:bg-[#d32f2f] transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < filteredProducts.length && (
        <div className="text-center mt-6">
          <button
            onClick={() => setVisibleCount(visibleCount + 4)}
            className="px-6 py-2 border rounded bg-white hover:bg-gray-100 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}