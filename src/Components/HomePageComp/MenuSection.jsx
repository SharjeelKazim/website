import React from "react";
import { Link } from "react-router-dom";

const MenuCards = () => {
  return (
    <section className="w-[90%] mx-auto py-24">
      <div className="">
      <div className="text-[26px] font-bold lg:font-light lg:text-5xl font-playfair text-center">
            <h1>Browse Our Menu</h1>
            
          </div>
        <div className=" p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <div className="flex flex-col items-center justify-center border rounded-lg shadow-md bg-white p-6 text-center">
            <div className="w-16 h-16 mb-4">
              <img
                src="/icon-1.svg" 
                alt="Breakfast"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Breakfast</h3>
            <p className="text-gray-600 text-sm mb-4">
              In the new era of technology we look in the future with certainty
              and pride for our life.
            </p>
            <Link to={"/menu"} >
            <a
              href="#"
              className="text-primary font-bold text-sm hover:text-red-700"
            >
              Explore Menu
            </a>
            </Link>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center justify-center border rounded-lg shadow-md bg-white p-6 text-center">
            <div className="w-16 h-16 mb-4">
              <img
                src="/icon-2.svg" 
                alt="Main Dishes"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Main Dishes
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              In the new era of technology we look in the future with certainty
              and pride for our life.
            </p>
            <Link to={"/menu"} >
            <a
              href="#"
              className="text-primary font-bold text-sm hover:text-red-700"
            >
              Explore Menu
            </a>
            </Link>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center justify-center border rounded-lg shadow-md bg-white p-6 text-center">
            <div className="w-16 h-16 mb-4">
              <img
                src="/icon-3.svg" 
                alt="Drinks"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Drinks</h3>
            <p className="text-gray-600 text-sm mb-4">
              In the new era of technology we look in the future with certainty
              and pride for our life.
            </p>
            <Link to={"/menu"} >
            <a
              href="#"
              className="text-primary font-bold text-sm hover:text-red-700"
            >
              Explore Menu
            </a>
            </Link>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center justify-center border rounded-lg shadow-md bg-white p-6 text-center">
            <div className="w-16 h-16 mb-4">
              <img
                src="/icon-4.svg"
                alt="Desserts"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Desserts</h3>
            <p className="text-gray-600 text-sm mb-4">
              In the new era of technology we look in the future with certainty
              and pride for our life.
            </p>
            <Link to={"/menu"} >
            <a
              href="#"
              className="text-primary font-bold text-sm hover:text-red-700"
            >
              Explore Menu
            </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuCards;
