import React from "react";

const Delivery = () => {
  return (
    <section className="flex flex-col md:flex-row  m-auto bg-greyColor h-auto md:min-h-screen p-6 md:p-10 items-center md:items-start gap-6">
      {/* Image Grid Section */}
      <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6  md:w-[50%]">
        {/* Large Image */}
        <div className="row-span-2 h-[300px] md:h-[500px] w-full">
          <img
            src="/man.svg"
            alt="Chef at work"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        {/* Small Image 1 */}
        <div className="h-[150px] md:h-[240px] w-full">
          <img
            src="/curry.svg"
            alt="Dish 1"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        {/* Small Image 2 */}
        <div className="h-[150px] md:h-[240px] w-full">
          <img
            src="/salads 1.svg"
            alt="Dish 2"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-[50%] p-4 md:p-14">
        <h1 className="text-3xl md:text-5xl text-light font-playfair">
          Fastest Food Delivery in City
        </h1>
        <p className="font-dmSans font-medium text-sm md:text-base text-lightGrey pt-6 leading-relaxed">
          Our visual designer lets you quickly drag and drop your way to custom
          apps for both desktop and mobile platforms.
        </p>
        {/* Features Section */}
        <div className="space-y-6 pt-10">
          {/* Feature 1 */}
          <div className="flex items-center">
            <img
              src="time.svg"
              alt="Delivery Time"
              className="w-10 h-10 object-contain"
            />
            <h2 className="pl-6 text-lg md:text-xl font-medium text-gray-800">
              Delivery within 30 minutes
            </h2>
          </div>
          {/* Feature 2 */}
          <div className="flex items-center">
            <img
              src="offer.svg"
              alt="Special Offer"
              className="w-10 h-10 object-contain"
            />
            <h2 className="pl-6 text-lg md:text-xl font-medium text-gray-800">
              Exclusive Discounts Available
            </h2>
          </div>
          {/* Feature 3 */}
          <div className="flex items-center">
            <img
              src="service.svg"
              alt="Customer Service"
              className="w-10 h-10 object-contain"
            />
            <h2 className="pl-6 text-lg md:text-xl font-medium text-gray-800">
              Exceptional Customer Service
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
