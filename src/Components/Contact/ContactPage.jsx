import React from "react";

const Heading = () => {
  return (
    <section className="bg-greyColor w-full relative m-auto">
      {/* Heading Section */}
      <div className="items-center text-center pt-10 h-[400px]">
        <h1 className="font-playfair text-4xl sm:text-6xl lg:text-8xl text-light">
          Contact Us
        </h1>
        <p className="text-desaturatedBlueGray font-dmSans lg:w-[50%] mx-auto text-sm md:text-base lg:text-lg mt-4">
          We consider all the drivers of change gives you the components you
          need to change to create a truly happens.
        </p>
      </div>

      {/* Contact Form */}
      <div className="bg-white z-50 w-[90%] sm:w-[812px] absolute  lg:top-[240px] left-[50%]  top-[190px] transform -translate-x-1/2 mx-auto rounded-[10px] border shadow-lg">
        <form className="p-6 flex flex-col">
          {/* Name and Email Fields */}
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex flex-col text-left gap-2 w-full sm:w-[48%]">
              <p className="font-dmSans font-bold text-base">Name</p>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full h-[60px] px-4 border border-pileGrey rounded-full focus:outline-none"
              />
            </div>
            <div className="flex flex-col text-left gap-2 w-full sm:w-[48%]">
              <p className="font-dmSans font-bold text-base">E-Mail</p>
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full h-[60px] px-4 border border-pileGrey rounded-full focus:outline-none"
              />
            </div>
          </div>

          {/* Subject Field */}
          <div className="flex flex-col text-left gap-2 mt-4">
            <p className="font-dmSans font-bold text-base">Subject</p>
            <input
              type="text"
              placeholder="Write a subject"
              className="w-full h-[60px] px-4 border border-pileGrey rounded-full focus:outline-none"
            />
          </div>

          <div className="flex flex-col text-left gap-2 mt-4">
            <p className="font-dmSans font-bold text-base">Message</p>
            <textarea
              placeholder="Write your message"
              className="w-full h-[150px] px-4 border border-pileGrey rounded-lg focus:outline-none"
            ></textarea>
          </div>

          <button className="bg-primary text-white rounded-full mt-8 py-4 hover:bg-primaryDark">
            Send
          </button>
        </form>
      </div>

      <div className="bg-white pt-[320px] pb-10 lg:py-10 text-center flex flex-col sm:flex-row justify-around">
        <div className="mt-[170px] lg:mt-[400px]  ">
          <p className="font-dmSans font-bold text-[20px] text-light">Call Us:</p>
          <p className="text-primary font-dmSans font-bold text-[18px] lg:text-[24px]">+1-234-567-8900</p>
        </div>
        <div className=" lg:mt-[400px]  ">
          <p className="font-dmSans font-bold text-[20px] text-light">Hours:</p>
          <p className="font-dmSans text-[18px] text-light">
            Mon-Fri: 11am - 8pm <br />
            Sat, Sun: 9am - 10pm
          </p>
        </div>
        <div className=" lg:mt-[400px]">
          <p className="font-dmSans font-bold text-[20px] text-light ">Our Location:</p>
          <p className="font-dmSans text-[18px] text-light ">
            123 Bridge Street <br />
            Nowhere Land, LA 12345 <br />
            
          </p>
        </div>
      </div>
    </section>
  );
};

export default Heading;
