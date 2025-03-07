import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    text: "Working with your design team was an absolute pleasure. The attention to detail and creativity exceeded my expectations. Thank you for making my home beautiful!",
    name: "Sophie Carter",
    location: "New York, USA",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "Exceptional service! From the initial consultation to the final reveal, your team demonstrated professionalism and a keen eye for design. Highly recommend!",
    name: "James Bennett",
    location: "Toronto, Canada",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  }
  ,
  {
    text: "Exceptional service! From the initial consultation to the final reveal, your team demonstrated professionalism and a keen eye for design. Highly recommend!",
    name: "James Bennett",
    location: "Toronto, Canada",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  }
  ,
  {
    text: "Exceptional service! From the initial consultation to the final reveal, your team demonstrated professionalism and a keen eye for design. Highly recommend!",
    name: "James Bennett",
    location: "Toronto, Canada",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  }
];

const TestimonialCarousel = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.start();
    }
  }, []);

  return (
    <div className="w-full p-6 text-center mb-20">
      <h2 className="text-5xl font-bold py-15">What Our Customers Say About Us</h2>
      <div className="flex justify-center items-center gap-4 mt-6">
        <button className="p-2 bg-orange-500 text-white rounded" onClick={() => swiperRef.current.swiper.slidePrev()}>
         <p>{`<`}</p>
        </button>
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          navigation={false}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
          className="w-3/4"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="p-6 bg-orange-500 rounded-lg text-white">
              <p className="text-lg">❝ {testimonial.text} ❞</p>
              <div className="flex items-center mt-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-3" />
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-200">{testimonial.location}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="p-2 bg-orange-500 text-white rounded" onClick={() => swiperRef.current.swiper.slideNext()}>
        <p>{`>`}</p>
        </button>
      </div>


      <style>
        {`
          .swiper-pagination-bullet {
          
            background: orange !important;
            width: 12px;
            height: 12px;
          }
          .swiper-pagination {
             margin-top: 120px !important;
          }
        `}
      </style>
    </div>
  );
};

export default TestimonialCarousel;
