import React from "react";
import AboutSocial from "../component/AboutSocial";
import Footer from "../component/Footer";

const About = () => {
  return (
    <div className="min-h-screen ">
      <div className="h-[80vh]  flex justify-center gap-10 pt-10 ">
        <div className="w-[30vw] ">
          <h1 className="capitalize text-[4.2vw] pt-15 text-orange-400">
            about us
          </h1>
          <p className="w-[30vw] text-[1.3vw] pt-3 leading-9 whitespace-pre-line font-[Ramaraja] font-semibold">
            Founded 13 years ago, Orange Biochem is committed to advancing
            animal health with high-quality, pocket-friendly veterinary
            solutions. Rooted in compassion (Jivdaya), our mission is to enhance
            the well-being of animals through scientifically developed and
            ethically produced products. Rooted in compassion (Jivdaya), our
            mission is to enhance the well-being of animals through
            scientifically developed and ethically produced products.
          </p>
        </div>
        <div className="w-[40vw] ">
          <img
            className="h-[70vh] rounded pt-10"
            src="https://s3-alpha-sig.figma.com/img/9c80/3fed/4307f463d4cf0846304909890f9ddc74?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=r6jF1jWgJpo6Frn0i2YE1SUaQjzQTPPsk0LG0WQgVYwXcwANwR2xigNbitW8NQNpzqToPpM-m9N3ZN4B6vzEjC9vPJI4I-ZdTC88wT35ALjFmwlpN2nUvEgBAq-vQLIQUmJjGbSl-71gaEFRQo8QBZ1UU6huOJIIWj0lqlU3olzMOfHe7WjaESQzKGlc1QvlC1~vyU4WaEALRkWKPsAKcfplR-7QErIWZFTZeawuVpdrtHiF-6~iKdiNZ0jMt9UXEHzD0vvW~OO9pT0rEjtpP~4G4Gt3FFVxn8hhfdb3a0t1cexS5YtZDjieNbrq~Zj4mxzv4OR0tRl6NYyx9Af5Kw__"
            alt=""
          />
        </div>
      </div>

      <div className="h-[75vh]  flex justify-center  pt-10 ">
        <div className="w-[30vw]  pt-10">
          <img
            className="h-[45vh] w-[25vw] rounded pt-10"
            src="https://s3-alpha-sig.figma.com/img/f45e/a664/08904726729fb50eade1bfa1aac2edc3?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DtoBi4gGYFFWHkILrv5wAhn0XrYt5F6h1fM~BtG6Z~30IoHlypcs5eYMtOGvoWbaj6xCFUNx2E7BsjYWj~clDjuhtCZ8kVuJrGNw-XBcqM~YBPf2XHNO0SZ8Op9REblI~g2ObMw6sMkLiULpmqWONFXaPe17od-pL-Swt~u3kwIi07vK72XqOhAqKr7DUo8tMRbaDIjj3CXbJrPxm-3xxUIatTmtR~22USKpbpTHh0XNq4pzk8ZNMbHAKTfBxGgzWqYokqvlrBpxXcUgWigZSQOU~0~ssLR57y80IcSraRjCAHJlcVK38RRGQDU5Qrsc74EPz9KhDWW22V0Tj506DQ__"
            alt=""
          />
        </div>
        <div className="w-[v48w] pt-10 ">
          <h1 className="capitalize text-[3vw] pt-15 text-orange-400">
            Our Commitment to Animal Health
          </h1>
          <p className="w-[40vw] text-[1.3vw] pt-3 leading-9 whitespace-pre-line font-[Ramaraja] font-semibold">
            At Orange Biochem, we prioritize innovation and quality. Our
            exclusive formulations undergo rigorous R&D, certification, and
            clinical trials before reaching the market. With a strong belief in
            delivering zero-side-effect solutions, we ensure that every
            ingredient used meets the highest standards.
          </p>
        </div>
      </div>

      <AboutSocial />

      <div className="bg-slate-200 relative flex justify-center mt-10 min-h-[55vh]">
        <img
          className="h-full w-full object-cover absolute"
          src="https://imgs.search.brave.com/xoftcCaiKC9xHEc5_28-AvJrCoTQSczkM6DbmXMrG2Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEwLzc1LzE2Lzg4/LzM2MF9GXzEwNzUx/Njg4MzZfSnRDd3BP/VGZBODA4MW9HVDJG/dnFWZFBpRVIycEFM/cWsuanBn"
          alt="Background"
        />
        <div className="absolute flex flex-col items-center w-[70vw]">
          <h1 className="text-white text-[2.5vw] capitalize font-bold mt-10">
            Future Vision & Expansion
          </h1>
          <ul className="w-[70vw] list-disc text-white text-[1.5vw] py-10">
            <li>
              We are planning to install an advanced Ayurvedic-based
              manufacturing plant to address unsolved animal health issues
              through natural remedies. The Ayurvedic formulations will be rare
              and exclusive, offering unique solutions not available elsewhere.
            </li>
            <li className="mt-5">
              With a strong foundation in the pet industry, we are gearing up to
              export our products worldwide to bring our expertise to a global
              market.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-start justify-between px-32 py-10 bg-white">
        <div className="w-2/3">
          <h1 className="text-[3vw] font-bold mb-20">Our Product Excellence</h1>
          <ul className="list-disc text-lg space-y-4 w-[60vw] font-semibold">
            <li>
              40+ premium veterinary products, including 10 exclusive
              formulations.
            </li>
            <li>
              Each product is designed to compete in the global market while
              maintaining affordability.
            </li>
            <li>
              Our commitment to research and innovation ensures safe, effective,
              and high-quality solutions for animals. At Orange Biochem, we are
              not just a company—we are a movement dedicated to improving animal
              lives. With our unwavering passion for Jivdaya and excellence, we
              continue to set new benchmarks in veterinary care.
            </li>
          </ul>
        </div>

        <div className="w-1/3 flex justify-end">
          <img
            src="/images/bottle.png"
            alt="Product"
            className="w-[250px] h-[60vh] mt-10 object-contain"
          />
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default About;
