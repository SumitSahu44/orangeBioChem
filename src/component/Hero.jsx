import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/about");
  };

  return (
    <section className="bg-[#F4941E] border min-h-screen flex items-center text-white py-16 px-6">
      <div className="container mx-auto flex px-14 flex-col lg:flex-row items-center gap-10">
        
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left " data-aos="fade-right">
          <h1 className="text-3xl md:text-4xl lg:text-6xl  font-bold leading-tight">
            Caring For The <br /> Speechless Since 1992
          </h1>
          <p className="mt-4 text-base md:text-lg text-white/90">
            With constant innovation and understanding of specific market needs, we have evolved a wide range of products to meet our customers’ diverse needs globally.
          </p>
          <button onClick={handleClick} className="mt-6 bg-white text-orange-500 font-semibold px-15 py-3 rounded-md shadow-md hover:bg-gray-100 transition">
            About Us
          </button>
        </div>
        {/* Right Images */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0" data-aos="fade-left">
          <div className="flex space-x-2 sm:space-x-4">
            <img src="/images/bottle.png" alt="Product 1" className="h-40 sm:h-52 md:h-60 lg:h-[28rem] drop-shadow-lg" />
            <img src="/images/bottle.png" alt="Product 2" className="h-52 sm:h-64 md:h-80 lg:h-[32rem] drop-shadow-lg" />
            <img src="/images/bottle.png" alt="Product 3" className="h-40 sm:h-52 md:h-60 lg:h-[28rem] drop-shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
