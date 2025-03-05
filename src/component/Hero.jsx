import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#F4941E] border h-[140vh] md:h-[120vh] lg:h-[92vh] text-white  py-20 px-8">
      <div className="container  w-[90%] mx-auto flex flex-col lg:flex-row items-center gap-10 justify-center">
        
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left"  data-aos="fade-right">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Caring For The <br /> Speechless Since 1992
          </h1>
          <p className="mt-4 text-lg text-white/90">
            With constant innovation and understanding of specific market needs, we have evolved a wide range of products to meet our customers’ diverse needs globally.
          </p>
          <button className="mt-6 bg-white text-orange-500 font-semibold px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition">
            About Us
          </button>
        </div>

        {/* Right Images */}
        <div className="lg:w-1/2 flex justify-center lg:justify-center mt-8 lg:mt-0"  data-aos="fade-left">
          <div className="flex space-x-4">
            <img src="/images/bottle.png" alt="Product 1" className="h-60  lg:h-120 drop-shadow-lg" />
            <img src="/images/bottle.png" alt="Product 2" className="h-80  lg:h-140 drop-shadow-lg" />
            <img src="/images/bottle.png" alt="Product 3" className="h-60  lg:h-120 drop-shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
