import React from "react";
import { useState } from "react";
import { Star } from "lucide-react";
import TestimonialCarousel from "../component/TestimonialCarousel";
import Products from '../component/Products'
import Footer from "../component/Footer";
const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const images = [
    "https://s3-alpha-sig.figma.com/img/fea0/8836/12d7885efacca0cd1c06d39f8927ef39?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bYlFw5xkKdE5BPaQzfpC20--MDOvn0iePXe6sHEkpPRdWPUKtnc5dyz5OcMzpYO~XaBmYAjBtOFbGOBJF~VWgm02PAwvf0ti6DDtDMQCOU6a8gJDyXPZ349gqjp3p-eIjQNfEN9gvBHdBiSIarLYreLwEFZFvWawxjhz-Rqfo7s0jJww8D9PK1DNLACiL6B0nXmVSmVbmVPrmbPjzB3HvLZVKttcE8i2dz~t6ObMT3aiuBac9WpVpgXOav2ho5y8ZlCAdVeU5hm1icGVKKR6kGEBHffcV9aIMvU21b~ikOAORc60W79n-G7AFzfoFrrDIxqPQszXsKCdUIg73CC6Yw__",
    "https://s3-alpha-sig.figma.com/img/f9a0/6a54/7b454cd47f0a2e4b5e494c0208d8ce49?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=np5WJGwXaCYCR5YIzWKuKuJHYDtJiPLf96uBoLoC3Hb5qQWdTkh0TpTbMFcJoKctehL6IsIUgMxq38q9nqmI~gSnHdXvaOkFAblC5tV4~gWXprdWTZ~fBIeuDXOp2wHXngh8QzJtonMPBYdK1l2o3~yt2lG~HgZgZHxY1Hum060Ugp7C5mpujdTwjsWElo~jt-6JBZg7W2dtF1fhLiVFDwQtSD6WJq7SjMNtvoSQWYSt2XNC4-L3~5v8l2o-fbhp59NBQ5s-c6KRo0tX3e7rdm0Uo8OkGVgC6hgwjRntNKhOaSSvLSRuZwYnTuSWrsewDRKRi~lK3qYrEAQeJa175A__"
  ];

  const [mainImage, setMainImage] = useState(images[0]);
  return (
    <div className="min-h-screen  ">
      <div className="container   pt-20 flex flex-col md:flex-row gap-15 justify-center ">
      <div className="flex flex-col items-center">
      {/* Main Image */}
      <div className="relative rounded-lg overflow-hidden flex justify-center items-center">
        <img src={mainImage} alt="Product" className="w-80 h-96 object-cover transition-all duration-300" />
      </div>

      {/* Thumbnail Images */}
      <div className="flex justify-center gap-4 mt-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index}`}
            className={`w-20 h-24 rounded-lg cursor-pointer transition-transform duration-300 ${
              mainImage === img ? "border-4 border-orange-500 scale-110" : ""
            }`}
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>
    </div>

        <div className="ml-8 md:w-1/2 pt-3">
          <h1 className="text-4xl font-bold">Product Name</h1>
          <p className="text-gray-600 mt-2">
            With constant innovation and understanding of specific market needs, we have evolved a wide range of products to meet our customers’ diverse needs globally.With constant innovation and understanding of specific market needs, we have evolved a wide range of products to meet our customers’ diverse needs globally.

          </p>
          <div className="mt-4">
            <span className="text-gray-500 line-through">₹5999</span>
            <span className="text-orange-600 font-bold text-xl ml-2">₹599</span>
          </div>
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-yellow-500  w-5 h-5 fill-yellow-500"  />
            ))}
            <span className="ml-2 text-gray-600">(40 reviews)</span>
          </div>

          <div className="mt-4">
            <h2 className="text-lg font-semibold">More About Product</h2>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Available: In stock</li>
              <li>Category</li>
              <li>Shipping Area: All over India</li>
            </ul>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <input
              type="number"
              value={quantity}
              min="1"
              onChange={(e) => setQuantity(e.target.value)}
              className="w-16 px-2 py-1 border rounded text-center"
            />
            <span>Qty</span>
          </div>

          <button className="mt-4 w-[80%] mx-auto md:w-auto bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded">
            Add to Cart
          </button>

        </div>
      </div>


      <Products />
{/* 
      <div class="container mt-20 py-8">
        <h1 class="text-5xl mb-2 text-center font-bold capitalize">
          Our similar Products
        </h1>
        <p class="text-gray-600 text-center mb-20">
          With constant innovation and understanding of specific market needs,
        </p>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          <div class="text-center">
            <img alt="Product image of a bottle with a pink label" class="mx-auto mb-2" height="150" src="/images/bottle.png" width="100" />
            <p>
              Product Name
            </p>
          </div>
          <div class="text-center">
            <img alt="Product image of a bottle with a pink label" class="mx-auto mb-2" height="150" src="/images/bottle.png" width="100" />
            <p>
              Product Name
            </p>
          </div>
          <div class="text-center">
            <img alt="Product image of a bottle with a pink label" class="mx-auto mb-2" height="150" src="/images/bottle.png" width="100" />
            <p>
              Product Name
            </p>
          </div>
          <div class="text-center">
            <img alt="Product image of a bottle with a pink label" class="mx-auto mb-2" height="150" src="/images/bottle.png" width="100" />
            <p>
              Product Name
            </p>
          </div>
          <div class="text-center">
            <img alt="Product image of a bottle with a pink label" class="mx-auto mb-2" height="150" src="/images/bottle.png" width="100" />
            <p>
              Product Name
            </p>
          </div>
          <div class="text-center">
            <img alt="Product image of a bottle with a pink label" class="mx-auto mb-2" height="150" src="/images/bottle.png" width="100" />
            <p>
              Product Name
            </p>
          </div>
          <div class="text-center">
            <img alt="Product image of a bottle with a pink label" class="mx-auto mb-2" height="150" src="/images/bottle.png" width="100" />
            <p>
              Product Name
            </p>
          </div>
          <div class="text-center">
            <img alt="Product image of a bottle with a pink label" class="mx-auto mb-2" height="150" src="/images/bottle.png" width="100" />
            <p>
              Product Name
            </p>
          </div>
          <div class="text-center">
            <img alt="Product image of a bottle with a pink label" class="mx-auto mb-2" height="150" src="/images/bottle.png" width="100" />
            <p>
              Product Name
            </p>
          </div>
          <div class="text-center">
            <img alt="Product image of a bottle with a pink label" class="mx-auto mb-2" height="150" src="/images/bottle.png" width="100" />
            <p>
              Product Name
            </p>
          </div>
        </div>
      </div> */}
      <TestimonialCarousel/>
      <Footer/>
    </div>
  );
};

export default ProductDetails;
