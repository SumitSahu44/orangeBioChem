import React from "react";
import { Routes, Route } from "react-router-dom"; // Added necessary imports

import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import OurProducts from "./pages/OurProducts";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import BlogSection from "./pages/BlogSection";

const App = () => {
  return (
    <div>

      <Navbar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourProducts" element={<OurProducts />} />
        <Route path="/ProductDetails" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/gallery" element={<Gallery/>}/>        
        <Route path="/blogs" element={<BlogSection/>}/>

        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/product/:category" element={<OurProducts />} />

      </Routes>
    </div>
  );
};

export default App;
