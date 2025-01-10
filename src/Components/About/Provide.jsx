import React from "react";

const Provide = () => {
  return (
    <section className=" h-[100vh] flex items-center pt-10 ">
      <div className="w-[90%] mx-auto flex flex-column flex-row">
        <div className="sm:w-[50%] ">
          <img src="/provide.svg" alt="" />
        </div>
        <div className="sm:w-[50%] flex justify-center items-center ">
          <div className="w-[90%] ">
            <div className="text-[55px] font-playfair text-light">
              We provide healthy food for your family.
            </div>
            <div className="text-light  text-[18px] font-medium font-dmSans pt-4">
              Our story began with a vision to create a unique dining experience
              that merges fine dining, exceptional service, and a vibrant
              ambiance. Rooted in city's rich culinary culture, we aim to honor
              our local roots while infusing a global palate.
            </div>
            <div className="  font-dmSans text-lightGrey  pt-2">
              At place, we believe that dining is not just about food, but also
              about the overall experience. Our staff, renowned for their warmth
              and dedication, strives to make every visit an unforgettable
              event.
            </div>
            <div className="pt-8 ">
              <button className="text-[#182226] border border-solid border-[#182226] rounded-full py-2 px-4 bg-transparent hover:bg-gray-100">
                Morw About us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Provide;