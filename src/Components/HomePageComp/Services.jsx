import React from 'react';

const Services = () => {
  return (
    <section className="w-[90%] m-auto py-6 md:py-10">
      {/* Heading */}
      <div className="pt-6 md:pt-14 text-3xl md:text-5xl font-playfair text-light w-full md:w-[50%]">
        <h1>We also offer unique services for your events</h1>
      </div>

      {/* Cards */}
      <div className="pt-10 md:pt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="flex flex-col items-start justify-center text-left bg-white p-4 shadow-md rounded-lg">
          <div>
            <img
              src="/kebab-set-table 1.svg"
              alt="Catering"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-gray-800 pt-4">Caterings</h3>
          <p className="text-gray-600 text-sm">
            In the new era of technology, we look into the future with certainty for life.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-start justify-center text-left bg-white p-4 shadow-md rounded-lg">
          <div>
            <img
              src="/Birthday.svg"
              alt="Birthday"
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="text-xl font-bold text-gray-800 pt-4">Birthdays</h3>
          <p className="text-gray-600 text-sm">
            In the new era of technology, we look into the future with certainty for life.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-start justify-center text-left bg-white p-4 shadow-md rounded-lg">
          <div>
            <img
              src="/Wedding.svg"
              alt="Wedding"
              className="w-full h-full object-contain rounded-md"
            />
          </div>
          <h3 className="text-xl font-bold text-gray-800 pt-4">Weddings</h3>
          <p className="text-gray-600 text-sm">
            In the new era of technology, we look into the future with certainty for life.
          </p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-start justify-center text-left bg-white p-4 shadow-md rounded-lg">
          <div>
            <img
              src="/Events.svg"
              alt="Events"
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="text-xl font-bold text-gray-800 pt-4">Events</h3>
          <p className="text-gray-600 text-sm">
            In the new era of technology, we look into the future with certainty for life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
