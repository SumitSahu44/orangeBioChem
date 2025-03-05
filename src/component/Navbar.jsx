import { useState } from "react";
import { Menu, X } from "lucide-react"; // Import icons for mobile menu

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div>
          <img src="/images/orangebio.png" alt="Orange Biochem" className="h-12 w-auto" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 text-lg font-medium">
          <NavItem title="Home" isActive />
          <NavItem title="About" />

          {/* Products Dropdown */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            Products
            {dropdownOpen && (
              <ul className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md">
                {["Category 1", "Category 2", "Category 3"].map((category) => (
                  <li key={category} className="px-4 py-2 hover:bg-gray-100">
                    {category}
                  </li>
                ))}
              </ul>
            )}
          </li>

          <NavItem title="Gallery" />
          <NavItem title="Contact" />
          <NavItem title="Blogs" />
        </ul>

        {/* Order Now Button (Hidden on Small Screens) */}
        <button className="hidden md:block bg-[#F4941E] text-white px-4 py-2 rounded-md font-semibold hover:bg-orange-600 transition">
          Order Now
        </button>

        {/* Mobile Menu Icon */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (Sliding) */}
      {menuOpen && (
        <ul className="md:hidden bg-white text-lg font-medium py-4 px-6 border-t">
          <NavItem title="Home" isMobile />
          <NavItem title="About" isMobile />
          <NavItem title="Products" isMobile isDropdown />
          <NavItem title="Gallery" isMobile />
          <NavItem title="Contact" isMobile />
          <NavItem title="Blogs" isMobile />
          <button className="mt-4 w-full bg-[#F4941E] text-white px-4 py-2 rounded-md font-semibold hover:bg-orange-600 transition">
            Order Now
          </button>
        </ul>
      )}
    </nav>
  );
};

const NavItem = ({ title, isActive, isMobile, isDropdown }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return isDropdown ? (
    <li
      className="relative cursor-pointer"
      onClick={() => setDropdownOpen(!dropdownOpen)}
    >
      Products
      {dropdownOpen && (
        <ul className="mt-2 w-full bg-white shadow-md rounded-md">
          {["Category 1", "Category 2", "Category 3"].map((category) => (
            <li key={category} className="px-4 py-2 hover:bg-gray-100">
              {category}
            </li>
          ))}
        </ul>
      )}
    </li>
  ) : (
    <li className={`cursor-pointer hover:text-gray-600 ${isActive ? "font-bold" : ""} ${isMobile ? "py-2 border-b" : ""}`}>
      {title}
    </li>
  );
};

export default Navbar;
