import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-darkGray py-10  ">
      <div className="w-[90%] m-auto flex flex-wrap justify-between gap-10">
        <div className="w-full sm:w-[22%] mb-10 sm:mb-0">
          <div className="flex items-center mb-4">
            <img src="/Vector.svg" alt="Logo" className="w-10 mr-3" />
            <h1 className="font-playfair text-4xl italic font-semibold text-white">
              Bistro Bliss
            </h1>
          </div>
          <p className="text-pileGrey leading-6">
            In the new era of technology we look to the future with certainty
            and pride for our company and.
          </p>
          <div className="flex gap-4 mt-4">
            <img src="1.svg" alt="Social Icon" className="w-6 h-6" />
            <img src="2.svg" alt="Social Icon" className="w-6 h-6" />
            <img src="3.svg" alt="Social Icon" className="w-6 h-6" />
            <img src="4.svg" alt="Social Icon" className="w-6 h-6" />
          </div>
        </div>

        <div className="w-full sm:w-[22%] text-pileGrey">
          <h2 className="text-white font-semibold text-lg mb-4">Pages</h2>
          <ul className="space-y-2">
            <li><button className="hover:text-white">Home</button></li>
            <Link to={"/about"}> <li className="pt-2"><button className="hover:text-white">About</button></li></Link>
            <Link to={"/menu"}><li className="pt-2"><button className="hover:text-white">Menu</button></li></Link>
            <li><button className="hover:text-white">Pricing</button></li>
            <li><button className="hover:text-white">Blog</button></li>
            <li><button className="hover:text-white">Contact</button></li>
            <li><button className="hover:text-white">Delivery</button></li>
          </ul>
        </div>

        <div className="w-full sm:w-[22%] text-pileGrey">
          <h2 className="text-white font-semibold text-lg mb-4">Utility Pages</h2>
          <ul className="space-y-2">
            <li><button className="hover:text-white">Start Here</button></li>
            <li><button className="hover:text-white">Styleguide</button></li>
            <li><button className="hover:text-white">Password Protected</button></li>
            <li><button className="hover:text-white">404 Not Found</button></li>
            <li><button className="hover:text-white">Licenses</button></li>
            <li><button className="hover:text-white">Changelog</button></li>
            <li><button className="hover:text-white">View More</button></li>
          </ul>
        </div>

        <div className="w-full sm:w-[22%] lg:flex hidden lg:flex-col">
          <h2 className="text-white font-semibold text-lg mb-4">Follow Us On Instagram</h2>
          <div className="grid  grid-cols-2 gap-4">
            <img src="p-1.svg" alt="Instagram Image 1"  className=" w-full h-auto rounded" />
            <img src="p-2.svg" alt="Instagram Image 2" className="w-full h-auto rounded" />
            <img src="p-3.svg" alt="Instagram Image 3" className="w-full h-auto rounded" />
            <img src="p-4.svg" alt="Instagram Image 4" className="w-full h-auto rounded" />
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-pileGrey text-sm">
        Copyright © 2025 Sharjeel Developer. All Rights Reserved.
      </div>
    </footer>
  );
};

export default  Footer ;
