
import React from 'react'
import ProductData from '../component/Products'
import Footer from '../component/Footer'
import { useParams } from "react-router-dom";


const OurProducts = () => {
  const { category } = useParams(); // Get category from URL params

  // Sample product categories
  const catProducts = [
    { id: 1, name: "Product cat 1", image: "/images/bottle.png" },
    { id: 2, name: "Product cat 2", image: "/images/bottle.png" },
  ];

  const dogProducts = [
    { id: 1, name: "Product Name dog 1", image: "/images/bottle.png" },
    { id: 2, name: "Product Name dog 2", image: "/images/bottle.png" },
  ];

  // Determine which products to show
  const products = category === "cat" ? catProducts : dogProducts;

  return (
    <div>

       <ProductData />
      

      {/* <h2>Showing Products for: {category}</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} width="100" />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div> */}



      <Footer/>
    </div>
  );
};

export default OurProducts;
