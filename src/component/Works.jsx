
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const images = [
  "/images/work1.png", 
  "/images/work2.png", 
  "/images/work3.png", 
  "/images/work1.png", 
  "/images/work2.png", 
  "/images/work3.png", 
  "/images/work1.png", 
  "/images/work2.png", 
  "/images/work3.png"
 
];

const Works = () => {
  return (
    <div className="w-full p-4 text-center">
      <h2 className="text-5xl mt-20 mb-5 font-bold">Explore Our Works</h2>
      <p className="text-gray-500 mb-10">With constant innovation and understanding of specific market needs,</p>
      <div className="overflow-hidden mt-12">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={10}
          loop={true}
          speed={3000} 
          autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true, stopOnLastSlide: false }}
          freeMode={true}
          grabCursor={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img src={src} alt={`Slide ${index + 1}`} className="w-full h-64 object-cover rounded-lg" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Works;
