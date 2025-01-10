import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  console.log(location.pathname)

  return (
    <div style={{backgroundColor:location.pathname==="/Contact"?"#F9F9F7":""}}>
      <nav className="w-[90%] m-auto">
        <div className="container mx-auto">
          <div className="flex justify-between items-center py-4">
            {/* Logo Section */}
            <div className="flex items-center">
              <img src="/japanese-food.svg" alt="Logo" className="w-10" />
              <h1 className="font-playfair text-4xl italic font-semibold text-darkGray">
                Bistro Bliss
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 text-base font-dmSans font-medium">
              <div className="text-light hover:text-primary cursor-pointer">
                <Link to={"/"}>Home </Link>
              </div>
              <div className="text-light hover:text-primary cursor-pointer">
                <Link to={"/about"}>About</Link>
              </div>
              <div className="text-light hover:text-primary cursor-pointer">
                <Link to={"/menu"}>Menu</Link>
              </div>
              <div className="text-light hover:text-primary cursor-pointer">
                <Link to={"/OurBlogs"}>Pages</Link>
              </div>
              <div className="text-light hover:text-primary cursor-pointer">
                <Link to={"/Contact"}>Contact</Link>
              </div>
            </div>

            {/* Book A Table Button */}
            <div className="hidden md:block">
              <Link to={"/booktable"}>
                <button className="w-[147px] h-[48px] border border-black text-black font-dmSans font-bold rounded-full hover:bg-gray-100">
                  Book A Table
                </button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-black focus:outline-none"
              >
                {/* Hamburger Icon */}
                {isMenuOpen ? (
                  <span className="text-xl">✖</span>
                ) : (
                  <span className="text-xl">☰</span>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="flex flex-col items-center gap-4 mt-4 md:hidden">
              <div className="text-light hover:text-primary cursor-pointer">
                Home
              </div>
              <div className="text-light hover:text-primary cursor-pointer">
                About
              </div>
              <div className="text-light hover:text-primary cursor-pointer">
                Menu
              </div>
              <div className="text-light hover:text-primary cursor-pointer">
                Pages
              </div>
              <div className="text-light hover:text-primary cursor-pointer">
                Contact
              </div>
              {/* Book A Table Button for Mobile */}
              <button className="px-6 py-3 border border-black text-black font-dmSans font-bold rounded-full hover:bg-gray-100">
                Book A Table
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
