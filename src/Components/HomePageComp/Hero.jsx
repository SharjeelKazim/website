import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="relative flex items-center justify-center h-[calc(100vh-81px)] bg-white overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/image1.svg')" }}
    >
      <div className="text-center w-[90%] sm:w-[70%] md:w-[50%] lg:w-[30%]">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair text-light leading-tight">
          Best food for your taste
        </h1>
        <p className="text-light font-dmSans text-sm mt-4 leading-relaxed">
          Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 mt-6 flex flex-col sm:flex-row justify-center">
          <button className="px-6 py-2 bg-primary text-white font-dmSans font-bold rounded-full hover:shadow-lg">
            Book A Table
          </button>
          <Link to={"/Menu"}>
          <button className="px-6 py-2 border border-black text-black font-dmSans font-bold rounded-full hover:bg-gray-100">
            Explore Menu
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
