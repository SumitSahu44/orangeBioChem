
import Footer from '../component/Footer'
const Contact = () => {
  return (
    <div className='min-h-screen'>
    <div className="pt-10 pb-20 flex items-center justify-center bg-orange-100 p-4">
      <div className="max-w-4xl bg-white rounded-2xl shadow-xl p-8 grid md:grid-cols-2 gap-6">
        <div className='mt-10'>
          <h2 className="text-4xl font-bold text-[#F4941E]">Get in touch</h2>
          <p className="text-gray-600 mt-2">We are here for you! How can we help?</p>
          <form className="mt-4 space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#F4941E] text-white py-3 rounded-lg hover:bg-[#f4941ed3] transition"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <img
            src="https://i.pinimg.com/736x/b9/a9/c4/b9a9c44d0faa77a2bbe98f4bf8448ea6.jpg"
            alt="Contact Us"
            className="w-90 h-90"
          />
          <p className="text-gray-700">
            <i className="fas fa-map-marker-alt text-[#F4941E]"></i> 545 Mavis Island, IL 89191
          </p>
          <p className="text-gray-700">
            <i className="fas fa-phone text-[#F4941E]"></i> +2034 4040 3030
          </p>
          <p className="text-gray-700">
            <i className="fas fa-envelope text-[#F4941E]"></i> hello@gmail.com
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-[#F4941E] text-2xl"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-[#F4941E] text-2xl"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-[#F4941E] text-2xl"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="text-[#F4941E] text-2xl"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Contact
