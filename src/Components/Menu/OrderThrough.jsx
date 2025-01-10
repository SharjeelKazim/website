import React from "react";

const OrderThrough = () => {
  return (
    <section className=" bg-greyColor py-10">
      <div className="flex w-[90%] m-auto ">
        <div className="w-[40%] p-4">
          <h1 className="text-light font-playfair font-medium text-5xl">You can order through apps</h1>
          <p className="text-base font-dmSans text-lightGrey pt-6">
            Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum
            sed et aliquet aliquet risus tempor semper.
          </p>
        </div>
        <div className="w-[50%]  grid grid-cols-3">
            <img src="/Order-1.svg" alt="" />
            <img src="/Order-2.svg" alt="" />
            <img src="/Order-3.svg" alt="" />
            <img src="/Order-4.svg" alt="" />
            <img src="/Order-5.svg" alt="" />
            <img src="/Order-6.svg" alt="" />
            <img src="/Order-7.svg" alt="" />
            <img src="/Order-8.svg" alt="" />
            <img src="/Order-9.svg" alt="" />

        </div>
      </div>
    </section>
  );
};

export default OrderThrough;
