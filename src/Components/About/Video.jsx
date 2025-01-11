import React from "react";

const Video = () => {
  return (
    <section className="bg-white relative py-12">
      <div
        className="relative h-[450px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('BG.svg')" }}
      >
        <div className="w-full sm:w-[50%] mx-auto font-playfair bg-opacity-50 text-white text-[35px] sm:text-[55px] font-medium">
          <div className="flex justify-center">
            <img src="Play.svg" alt="Play button"  />
          </div>
          <p className="text-center text-[16px] sm:text-[20px]">
            Feel the authentic & original taste from us
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-10 p-10">
        <div className="w-full sm:w-[30%] flex gap-4 items-center">
          <img src="i-1.svg" alt="Multi Cuisine" className="w-16 h-16 sm:w-20 sm:h-20" />
          <div>
            <h1 className="text-light font-dmSans font-bold text-[16px] sm:text-[20px]">
              Multi Cuisine
            </h1>
            <p className="text-lightGrey font-dmSans text-[14px] sm:text-[16px]">
              In the new era of technology, we look to the future with certainty.
            </p>
          </div>
        </div>
        <div className="w-full sm:w-[30%] flex gap-4 items-center">
          <img src="i-2.svg" alt="Easy To Order" className="w-16 h-16 sm:w-20 sm:h-20" />
          <div>
            <h1 className="text-light font-dmSans font-bold text-[16px] sm:text-[20px]">
              Easy To Order
            </h1>
            <p className="text-lightGrey font-dmSans text-[14px] sm:text-[16px]">
              In the new era of technology, we look to the future with certainty.
            </p>
          </div>
        </div>
        <div className="w-full sm:w-[30%] flex gap-4 items-center">
          <img src="i-3.svg" alt="Fast Delivery" className="w-16 h-16 sm:w-20 sm:h-20" />
          <div>
            <h1 className="text-light font-dmSans font-bold text-[16px] sm:text-[20px]">
              Fast Delivery
            </h1>
            <p className="text-lightGrey font-dmSans text-[14px] sm:text-[16px]">
              In the new era of technology, we look to the future with certainty.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
