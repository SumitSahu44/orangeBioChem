import React from "react";

import Footer from "../component/Footer";
import Services from "../component/Services";

const About = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
    {/* About Section */}
    <div className="flex flex-wrap items-center justify-center gap-10 pt-10 px-5 md:px-10">
      <div className="w-full md:w-2/5 text-center md:text-left" data-aos="fade-right">
        <h1 className="capitalize text-4xl md:text-5xl text-orange-400">About Us</h1>
        <p className="text-lg md:text-xl leading-8 font-semibold mt-4">
          Founded 13 years ago, Orange Biochem is committed to advancing
          animal health with high-quality, pocket-friendly veterinary solutions.
          Rooted in compassion (Jivdaya), our mission is to enhance the
          well-being of animals through scientifically developed and
          ethically produced products.
        </p>
      </div>
      <div className="w-full md:w-1/2" data-aos="fade-left">
        <img
          className="w-full h-auto z-[50] max-h-[500px] rounded-md"
          src="https://s3-alpha-sig.figma.com/img/9c80/3fed/4307f463d4cf0846304909890f9ddc74?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=r6jF1jWgJpo6Frn0i2YE1SUaQjzQTPPsk0LG0WQgVYwXcwANwR2xigNbitW8NQNpzqToPpM-m9N3ZN4B6vzEjC9vPJI4I-ZdTC88wT35ALjFmwlpN2nUvEgBAq-vQLIQUmJjGbSl-71gaEFRQo8QBZ1UU6huOJIIWj0lqlU3olzMOfHe7WjaESQzKGlc1QvlC1~vyU4WaEALRkWKPsAKcfplR-7QErIWZFTZeawuVpdrtHiF-6~iKdiNZ0jMt9UXEHzD0vvW~OO9pT0rEjtpP~4G4Gt3FFVxn8hhfdb3a0t1cexS5YtZDjieNbrq~Zj4mxzv4OR0tRl6NYyx9Af5Kw__"
          alt="About"
        />
      </div>
    </div>

    {/* Commitment Section */}
    <div className="flex flex-wrap items-center justify-center mt-15 gap-10 pt-10 px-5 md:px-10">
      <div className="w-full md:w-1/2" data-aos="fade-right">
        <img
          className="w-full h-auto max-h-[500px] rounded-md"
          src="https://s3-alpha-sig.figma.com/img/f45e/a664/08904726729fb50eade1bfa1aac2edc3?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DtoBi4gGYFFWHkILrv5wAhn0XrYt5F6h1fM~BtG6Z~30IoHlypcs5eYMtOGvoWbaj6xCFUNx2E7BsjYWj~clDjuhtCZ8kVuJrGNw-XBcqM~YBPf2XHNO0SZ8Op9REblI~g2ObMw6sMkLiULpmqWONFXaPe17od-pL-Swt~u3kwIi07vK72XqOhAqKr7DUo8tMRbaDIjj3CXbJrPxm-3xxUIatTmtR~22USKpbpTHh0XNq4pzk8ZNMbHAKTfBxGgzWqYokqvlrBpxXcUgWigZSQOU~0~ssLR57y80IcSraRjCAHJlcVK38RRGQDU5Qrsc74EPz9KhDWW22V0Tj506DQ__"
          alt="Commitment"
        />
      </div>
      <div className="w-full md:w-2/5 text-center md:text-left" data-aos="fade-left">
        <h1 className="capitalize text-3xl md:text-4xl text-orange-400">
          Our Commitment to Animal Health
        </h1>
        <p className="text-lg md:text-xl leading-8 font-semibold mt-4">
          At Orange Biochem, we prioritize innovation and quality. Our
          exclusive formulations undergo rigorous R&D, certification, and
          clinical trials before reaching the market. With a strong belief in
          delivering zero-side-effect solutions, we ensure that every
          ingredient used meets the highest standards.
        </p>
      </div>
    </div>

    <Services title={"We Offer a Wide Range of Services"} />

    {/* Future Vision Section */}
    <div className="relative flex flex-col items-center text-center py-20 px-5 bg-slate-800 text-white" >
      <h1 className="text-3xl md:text-4xl font-bold" data-aos="fade-up">Future Vision & Expansion</h1>
      <ul className="text-lg md:text-xl pt-15 list-disc px-20" data-aos="fade-up">
        <li>
        We are planning to install an  Advanced ayurvedic-based  manufacturing plant to address unsolved animal health issues  through natural remedies.The Ayurvedic formulations will be rare and exclusive, offering unique solutions not available  elsewhere.
        </li>
        <li className="mt-15">
        With a strong foundation in the pet industry, we are gearing up  to export our products worldwide to bring our expertise to a  global market.
        </li>
      </ul>
    </div>

    {/* Product Excellence Section */}
    <div className="flex flex-wrap items-center justify-between px-5 md:px-20 py-10 bg-white">
      <div className="w-full md:w-2/3" data-aos="fade-up">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Our Product Excellence</h1>
        <ul className="list-disc text-lg space-y-4 font-semibold">
          <li>40+ premium veterinary products, including 10 exclusive formulations.</li>
          <li>Each product is designed to compete in the global market while maintaining affordability.</li>
          <li>Our commitment to research and innovation ensures safe,  effective, and high-quality solutions for animals.  At Orange Biochem, we are not just a company—we are a movement  dedicated to improving animal lives. With our unwavering passion  for Jivdaya and excellence, we continue to set new benchmarks in  veterinary care.</li>
        </ul>
      </div>
      <div className="w-full md:w-1/3 flex justify-center mt-8 md:mt-0" data-aos="zoom-in">
        <img src="/images/bottle.png" alt="Product" className="w-[200px] md:w-[250px] h-auto object-contain" />
      </div>
    </div>

    <Footer />
  </div>
  );
};

export default About;
