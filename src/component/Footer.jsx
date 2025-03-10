import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1e2641] rounded-lg text-white py-15 px-6 md:px-50">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Link</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/products" className="hover:underline">Products</a></li>
            <li><a href="#" className="hover:underline">Pricing</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Status</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">RESOURCES</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Developer API</a></li>
            <li><a href="#" className="hover:underline">Tools</a></li>
            <li><a href="/blogs" className="hover:underline">Blog</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">COMPANY</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Sustainability</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:underline">Privacy</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Subscribe to our newsletter</h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Your email" 
              className="p-2 rounded-md text-white border-2 w-full sm:w-60"
            />
            <button className="bg-[#F4941E] text-white px-4 py-2 rounded-md hover:bg-[#f4941edf]">
              SUBSCRIBE
            </button>
          </div>

          <div className="mt-2 flex space-x-4">
            <a href="#" className=" p-2 bg-white rounded-full hover:bg-gray-600">
              <img src="https://imgs.search.brave.com/K5_pyQLpVtlcymeD8Q-qIaAxBeDS2CYiTsC0nywbHng/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9iL2I5LzIw/MjNfRmFjZWJvb2tf/aWNvbi5zdmcvMjIw/cHgtMjAyM19GYWNl/Ym9va19pY29uLnN2/Zy5wbmc" alt="Facebook" className="w-6" />
            </a>
            <a href="#" className=" p-2 bg-white rounded-full hover:bg-gray-600">
              <img src="https://imgs.search.brave.com/kmmTW9pbAkysdhnD-HiP4lMF9mrSppi3PcdsEphuB94/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZmFlYjU0OTYw/NmUyZTMzMTZhMzU1/ZDQ1MzY3OWNjN2Y1/YmVmYWNlYTY2Mzg3/MGJiYmYxYjhkNjYx/ZTE5NDEwNi9hYm91/dC54LmNvbS8" alt="Twitter" className="w-6" />
            </a>
            <a href="#" className="p-2 bg-white rounded-full hover:bg-gray-600">
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;