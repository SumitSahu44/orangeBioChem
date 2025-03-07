import React from "react";

const products = [
  { id: 1, name: "Product Name", image: "/images/bottle.png" },
  { id: 2, name: "Product Name", image: "/images/bottle.png" },
  { id: 3, name: "Product Name", image: "/images/bottle.png" },
  { id: 4, name: "Product Name", image: "/images/bottle.png" },
  { id: 5, name: "Product Name", image: "/images/bottle.png" },
  { id: 6, name: "Product Name", image: "/images/bottle.png" },
  { id: 7, name: "Product Name", image: "/images/bottle.png" },
  { id: 8, name: "Product Name", image: "/images/bottle.png" },
  { id: 9, name: "Product Name", image: "/images/bottle.png" },
  { id: 10, name: "Product Name", image: "/images/bottle.png" },
];

const Products = () => {
  return (
    <div className="container mx-auto mt-15 py-8">
      <h1 className="text-5xl mb-2 text-center font-bold">Our Popular Products</h1>
      <p className="text-gray-600 text-center mb-20">
        With constant innovation and understanding of specific market needs,
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {products.map((product) => (
          <div key={product.id} className="text-center mb-8 transform transition duration-300 hover:scale-110">
            <img
              src={product.image}
              alt={product.name}
              className="mx-auto mb-2 w-24 h-50 object-contain drop-shadow-lg"
            />
            <p className="text-lg font-semibold">{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
