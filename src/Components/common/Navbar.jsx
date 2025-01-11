import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };
  
  return (
    <div style={{backgroundColor:location.pathname==="/Contact"?"#F9F9F7":""}}>
      <nav className="w-[90%] m-auto">
        <div className="">
          <div className="flex justify-between items-center py-4">
            {/* Logo Section */}

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            > 
              <img src="/japanese-food.svg" alt="Logo" className="w-10 " />
              <h1 className="font-playfair text-4xl italic font-semibold text-darkGray cursor-pointer">
                Bistro Bliss
              </h1>
              </motion.div>

            {/* Desktop Menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="hidden md:flex gap-8 text-base font-dmSans font-medium"
            >

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
            </motion.div>

            {/* Book A Table Button */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="hidden md:block"
            >

            
              <Link to={"/booktable"}>
                <button className="w-[147px] h-[48px] border border-black text-black font-dmSans font-bold rounded-full hover:bg-gray-100">
                  Book A Table
                </button>
              </Link>
            </motion.div>

            {/* Mobile Menu Toggle */}

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="md:hidden"
            >
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-black focus:outline-none"
              >
                {/* Hamburger Icon */}
                {isMenuOpen ? (
                  <span className="text-xl font-bold !text-black">X</span>
                ) : (
                  <span className="text-xl">☰</span>
                )}
              </button>
            </motion.div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (

<motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center py-6 gap-4 mt-4 md:hidden"
            >

              <div className="text-light hover:text-primary cursor-pointer">
              <Link to={"/"}>Home </Link>
              </div>
              <div className="text-light hover:text-primary cursor-pointer">
              <Link to={"/about"}>  About</Link>
              </div>
              <div className="text-light hover:text-primary cursor-pointer">
              <Link to={"/menu"}>   Menu</Link>
              </div>
              <div className="text-light hover:text-primary cursor-pointer">
              <Link to={"/OurBlogs"}>   Pages</Link>
              </div>
              <div className="text-light hover:text-primary cursor-pointer">
              <Link to={"/Contact"}> Contact</Link>
              </div>
              {/* Book A Table Button for Mobile */}
              <button className="px-6 py-3 border border-black text-black font-dmSans font-bold rounded-full hover:bg-gray-100">
               <Link to={"/booktable"}> Book A Table</Link>
              </button>
            </motion.div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
