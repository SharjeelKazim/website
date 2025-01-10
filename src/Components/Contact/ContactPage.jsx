import React from "react";

const Heading = () => {
  
  return (
    <section className="bg-greyColor w-full relative m-auto">
      {/* Heading Section */}
      <div className="items-center text-center pt-10 h-[400px]">
        <h1 className="font-playfair text-8xl text-light">Contact Us</h1>
        <p className="text-desaturatedBlueGray font-dmSans text-lg w-[50%] mx-auto">
          We consider all the drivers of change gives you the components you
          need to change to create a truly happens.
        </p>
      </div>

      {/* Contact Form */}
      <div className="bg-white z-50 w-[812px] absolute left-[50%] top-[240px] transform -translate-x-1/2 mx-auto rounded-[10px] border shadow-lg">
        <form className="p-6 flex flex-col">
          {/* Name and Email Fields */}
          <div className="flex justify-between gap-4">
            <div className="flex flex-col text-left gap-2">
              <p className="font-dmSans font-bold text-base">Name</p>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-[350px] h-[60px] px-4 border border-pileGrey rounded-full focus:outline-none"
              />
            </div>
            <div className="flex flex-col text-left gap-2">
              <p className="font-dmSans font-bold text-base">E-Mail</p>
              <input
                type="email"
                placeholder="Enter email address"
                className="w-[350px] h-[60px] px-4 border border-pileGrey rounded-full focus:outline-none"
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

      <div className="bg-white h-screen  p-10  text-center flex justify-around">
        <div className="mt-[400px]">
          <p className="font-dmSans font-bold text-[20px] text-light">Call Us:</p>
          <p className="text-primary font-dmSans font-bold text-[24px] ">+1-234-567-8900</p>
        </div>
        <div className="mt-[400px]">
          <p className="font-dmSans font-bold text-[20px] text-light">Hours:</p>
          <p className="font-dmSans text-[18px] text-light">
            Mon-Fri: 11am - 8pm <br />
            Sat, Sun: 9am - 10pm
          </p>
        </div>
        <div className="mt-[400px]">
          <p className="font-dmSans font-bold text-[20px] text-light">Our Location:</p>
          <p className="font-dmSans text-[18px] text-light">
            123 Bridge Street <br />
            Nowhere Land, LA 12345 <br />
            United States
          </p>
        </div>
      </div>
    </section>
  );
};

export default Heading;
