import React from "react";

const OrderThrough = () => {
  return (
    <section className="bg-greyColor py-10">
      <div className="flex flex-col lg:flex-row w-[90%] m-auto">
        <div className="w-full lg:w-[40%] p-4">
          <h1 className="text-light font-playfair font-medium text-4xl lg:text-5xl">
            You can order through apps
          </h1>
          <p className="text-base font-dmSans text-lightGrey pt-6">
            Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum
            sed et aliquet aliquet risus tempor semper.
          </p>
        </div>
        <div className=" lg:w-[50%] grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4 w-full">
          <img src="/Order-1.svg" alt="Order 1" className="w-full h-auto" />
          <img src="/Order-2.svg" alt="Order 2" className="w-full h-auto" />
          <img src="/Order-3.svg" alt="Order 3" className="w-full h-auto" />
          <img src="/Order-4.svg" alt="Order 4" className="w-full h-auto" />
          <img src="/Order-5.svg" alt="Order 5" className="w-full h-auto" />
          <img src="/Order-6.svg" alt="Order 6" className="w-full h-auto" />
          <img src="/Order-7.svg" alt="Order 7" className="w-full h-auto" />
          <img src="/Order-8.svg" alt="Order 8" className="w-full h-auto" />
          <img src="/Order-9.svg" alt="Order 9" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default OrderThrough;
