import React from "react";

const Video = () => {
  return (
    <section className="bg-white mt-10 relative pb-12">
      <div
        class="relative h-[450px] flex items-center"
        style={{ backgroundImage: "url('BG.svg')" }}
      >
        <div class="  w-[50%] mx-auto  font-playfair bg-opacity-50 text-white text-[55px] font-medium">
        <div className="flex justify-center">
          <img src="Play.svg" />
          </div>         
          <p className="text-center">Feel the authentic & original taste from us</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-10  p-10">
        <div className="w-[30%] flex gap-4 ">
          <img src="i-1.svg" alt="" />
          <div>
            <h1 className="text-light font-dmSans font-bold texy-[20px]">
              Multi Cuisine
            </h1>
            <p className="text-lightGrey font-dmSans text[16px]">
              In the new era of technology we look in the future with certainty
              life.
            </p>
          </div>
        </div>
        <div className=" w-[30%] flex gap-4 ">
          <img src="i-2.svg" alt="" />
          <div>
            <h1 className="text-light font-dmSans font-bold texy-[20px]">
              Easy To Order
            </h1>
            <p>
              In the new era of technology we look in the future with certainty
              life.
            </p>
          </div>
        </div>
        <div className=" w-[30%] flex gap-4">
          <img src="i-3.svg" alt="" />
          <div>
            <h1 className="text-light font-dmSans font-bold texy-[20px]">
              Fast Delivery
            </h1>
            <p>
              In the new era of technology we look in the future with certainty
              life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
