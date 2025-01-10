import React from "react";

const Blog = () => {
  return (
    <section className=" bg-greyColor pb-20">
      <div className="w-[90%] m-auto">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-playfair text-gray-800">
          Our Blog & Articles
        </h2>
        <button className="px-5 py-2 bg-primary text-white font-medium rounded-full hover:bg-red-700">
          Read All Articles
        </button>
      </div>

      <div className="flex flex-wrap gap-6">
        <div className="w-full lg:w-[50%] bg-white rounded-lg shadow-md overflow-hidden hover:">
          <img src="/burger.svg" alt="" className="w-full h-98 object-cover" />
          <div className="p-6">
            <p className="text-sm text-gray-500">January 3, 2023</p>
            <h3 className="mt-2 font-dmSans font-medium text-xl text-gray-800">
              The secret tips & tricks to prepare a perfect burger & pizza for our customers
            </h3>
            <p className="font-dmSans text-base text-gray-800 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illum repellendus dignissimos labore aut pariatur autem quaerat perspiciatis vero iure molestiae, mollitia incidunt, aliquam quia eius soluta ipsam quas repudiandae.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[47%] grid grid-cols-2 gap-6 ">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              className="w-full h-48 object-cover transform transition-transform duration-100 ease-in-out group-hover:scale-105"
              src="/fries.svg"
              alt="Food Image"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500">January 3, 2023</p>
              <h3 className="mt-2 font-dmSans font-medium text-xl text-gray-800 ">
                How to prepare the perfect french fries in an air fryer
              </h3>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              className="w-full h-48 object-cover"
              src="/crunch.svg"
              alt="Food Image"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500">January 3, 2023</p>
              <h3 className="mt-2 font-dmSans font-medium text-xl text-gray-800">
                How to prepare delicious chicken tenders
              </h3>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              className="w-full h-48 object-cover"
              src="/brownie.svg"
              alt="Food Image"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500">January 3, 2023</p>
              <h3 className="mt-2 font-dmSans font-medium text-xl text-gray-800">
                7 delicious cheesecake recipes you can prepare
              </h3>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              className="w-full h-48 object-cover"
              src="/pizza.svg"
              alt="Food Image"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500">January 3, 2023</p>
              <h3 className="mt-2 font-dmSans font-medium text-xl text-gray-800">
                6 great pizza restaurants you should visit this city
              </h3>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Blog;
