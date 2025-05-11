import React from "react";

export default function ProductBox({ products }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-800 font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}
