import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { Menu, X } from "lucide-react"; // Import icons for mobile menu

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between  px-6 py-4">
        
        {/* Logo */}
        <div>
          <Link to="/">
            <img src="/images/orangebio.png" alt="Orange Biochem" className="h-12 w-auto" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-15 text-lg font-medium"> 
          <NavItem title="Home" link="/" isActive />
          <NavItem title="About" link="/about" />

          {/* Products Dropdown */}
          <li
            className="relative cursor-pointer px-3"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            Products
            {dropdownOpen && (
              <ul className="absolute left-0 mt-2 w-44 bg-white shadow-md rounded-md">
                {["Category 1", "Category 2", "Category 3"].map((category, index) => (
                  <li key={index} className="px-5 py-2 hover:bg-gray-100">
                    <Link to={`/products/${category.toLowerCase().replace(/\s+/g, "-")}`}>
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <NavItem title="Gallery" link="/gallery" />
          <NavItem title="Contact" link="/contact" />
          <NavItem title="Blogs" link="/blogs" />
        </ul>

        {/* Order Now Button (Hidden on Small Screens) */}
        <Link to="/order">
          <button className="hidden md:block bg-[#F4941E] text-white px-5 py-2 rounded-md font-semibold hover:bg-orange-600 transition">
            Order Now
          </button>
        </Link>

        {/* Mobile Menu Icon */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (Sliding) */}
      {menuOpen && (
        <ul className="md:hidden bg-white text-lg font-medium py-4 px-6 border-t space-y-4">
          <NavItem title="Home" link="/" isMobile />
          <NavItem title="About" link="/about" isMobile />
          <NavItem title="Products" isDropdown />
          <NavItem title="Gallery" link="/gallery" isMobile />
          <NavItem title="Contact" link="/contact" isMobile />
          <NavItem title="Blogs" link="/blogs" isMobile />
          <Link to="/order">
            <button className="mt-4 w-full bg-[#F4941E] text-white px-4 py-2 rounded-md font-semibold hover:bg-orange-600 transition">
              Order Now
            </button>
          </Link>
        </ul>
      )}
    </nav>
  );
};

const NavItem = ({ title, link, isActive, isMobile, isDropdown }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return isDropdown ? (
    <li
      className="relative cursor-pointer px-3 py-3"
      onClick={() => setDropdownOpen(!dropdownOpen)}
    >
      Products
      {dropdownOpen && (
        <ul className="mt-2 w-full bg-white shadow-md rounded-md">
          {["Category 1", "Category 2", "Category 3"].map((category, index) => (
            <li key={index} className="px-5 py-2 hover:bg-gray-100">
              <Link to={`/products/${category.toLowerCase().replace(/\s+/g, "-")}`}>
                {category}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  ) : (
    <li className={`cursor-pointer px-3 py-3 hover:text-gray-600 ${isActive ? "font-bold" : ""} ${isMobile ? "border-b" : ""}`}>
      <Link to={link}>{title}</Link>
    </li>
  );
};

export default Navbar;
