
const Services = (props) => {
  return (
    <div>
      <div class="container w-[90%] mx-auto my-20 px-4 py-8  overflow-x-hidden" >
   <h1 class="text-5xl font-bold mb-4" data-aos="fade-up">
    {props.title}
   </h1>
   <p class="text-lg mb-12"  data-aos="fade-up">
    With constant innovation and understanding of specific market needs,
   </p>
   <div class="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
    <div class="bg-[#6ebe91] p-6 rounded-3xl text-center" data-aos="fade-up">
     <img alt="Icon representing range of products" class="mx-auto mb-4 rounded-full" height="50" src="https://storage.googleapis.com/a1aa/image/Z0bLknhlAg2uPQrawxjI7i_1j_hA75ngHWTPIIu3zmg.jpg" width="60"/>
     <h2 class="text-2xl font-bold mb-2">
      Range of Products
     </h2>
     <p>
      With constant innovation and understanding of specific market needs, we have evolved a wide range of products to meet our customers' diverse needs globally.
     </p>
    </div>
    <div class="bg-orange-300  p-6 rounded-3xl text-center" data-aos="fade-up">
     <img alt="Icon representing  quality" class="mx-auto mb-4 rounded-full"  height="50" src="https://storage.googleapis.com/a1aa/image/BK6eM6RV-63LmKMmEWDADH_zbqMxDLjCVj0gk_Km08s.jpg" width="60"/>
     <h2 class="text-2xl font-bold mb-2">
      Quality
     </h2>
     <p>
      Since 1992, the Orange Biochem's name has been synonymous with the trust and reliability inherent in the word Quality. Quality is ingrained in the work of our staff and all our Values.
     </p>
    </div>
    <div class="bg-[#6ebe91] p-6 rounded-3xl text-center" data-aos="fade-up"> 
     <img alt="Icon representing innovation" class="mx-auto mb-4 rounded-full" height="50" src="https://storage.googleapis.com/a1aa/image/FiAM1jd9g9dDY--Ro60H6QMphzXnqZCqthEWIV3Vd6o.jpg" width="60"/>
     <h2 class="text-2xl font-bold mb-2">
      Innovation
     </h2>
     <p>
      In order to look after animals more effectively and easily, we are expanding our offer of innovative products and services and we remain faithful to the reason our clients choose us.
     </p>
    </div>
   </div>
  </div>
 
    </div>
  )
}

export default Services
