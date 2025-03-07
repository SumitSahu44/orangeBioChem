import React from "react";
import { Routes, Route } from "react-router-dom"; // Added necessary imports

import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery/>}/>
      </Routes>
    </div>
  );
};

export default App;
