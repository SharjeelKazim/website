import React from "react";

const Info = () => {
  return (
    <section className="bg-greyColor flex items-center pb-20 px-4 sm:px-0">
      <div className="w-full sm:w-[90%] mx-auto flex flex-col sm:flex-row overflow-hidden">
        <div className=" w-full flex justify-center items-center sm:pt-0 pt-10">
          <div className="w-full justify-between items-center flex lg:flex-row flex-col sm:w-[90%]">
            <div className="w-[90%] lg:w-[52%] flex flex-col">
              <div className="text-[32px] sm:text-[44px] font-playfair text-light pt-4 sm:pt-20">
                A little information for our valuable guest
              </div>
              <div className="text-light text-[16px] sm:text-[18px] font-medium font-dmSans pt-4">
                At place, we believe that dining is not just about food, but
                also about the overall experience. Our staff, renowned for their
                warmth and dedication, strives to make every visit an
                unforgettable event.
              </div>

              <div className="pt-10 grid grid-cols-2 gap-8  ">
                <div className="bg-white h-[150px] lg:w-[200px] rounded-lg pb-4 flex flex-col justify-center items-center">
                  <h1 className="font-playfair text-[40px] sm:text-[55px] font-medium text-light">
                    3
                  </h1>
                  <p className="font-dmSans font-medium text-[16px] sm:text-[18px]">
                    Locations
                  </p>
                </div>

                <div className="bg-white h-[150px] lg:w-[200px] pb-4 rounded-lg  flex flex-col justify-center items-center">
                  <h1 className="font-playfair text-[40px] sm:text-[55px] font-medium text-light">
                    1995
                  </h1>
                  <p className="font-dmSans font-medium text-[16px] sm:text-[18px]">
                    Founded
                  </p>
                </div>

                <div className="bg-white h-[150px] lg:w-[200px] pb-4 rounded-lg  flex flex-col justify-center items-center">
                  <h1 className="font-playfair text-[40px] sm:text-[55px] font-medium text-light">
                    65+
                  </h1>
                  <p className="font-dmSans font-medium text-[16px] sm:text-[18px]">
                    Staff Members
                  </p>
                </div>
                <div className="bg-white h-[150px] lg:w-[200px] pb-4 rounded-lg  flex flex-col justify-center items-center">
                  <h1 className="font-playfair text-[40px] sm:text-[55px] font-medium text-light">
                    100%
                  </h1>
                  <p className="font-dmSans font-medium lg:w-full w-[80px] text-center text-[16px] sm:text-[18px]">
                    Satisfied Customers
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[90%] lg:w-[45%] pt-8 sm:pt-20">
              <img
                src="/vegetable.svg"
                alt=""
                className=" w-[500px] rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
