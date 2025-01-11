import React from "react";
import { dummyData } from "./ServicesData";

const Services = () => {
  return (
    <section className="w-[90%] m-auto py-6 md:py-10">
      <div className="pt-6 md:pt-14 text-3xl md:text-5xl font-playfair text-light w-full md:w-[50%]">
        <h1>We also offer unique services for your events</h1>
      </div>

      <div className="pt-10 md:pt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {dummyData.map((val, index) => {
          return (
            <div
              key={index}
              className="flex  flex-col items-start justify-center text-left bg-white p-4 shadow-md rounded-lg"
            >
              <div className="w-full ">
                <img
                  src={val.imgsrc}
                  alt="Catering"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 pt-4">
                {val.heading}
              </h3>
              <p className="text-gray-600 text-sm">{val.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
