import React from "react";

const Says = () => {
  const reviews = [
    {
      title: "“The best restaurant”",
      description:
        "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
      image: "pic-1.svg",
      name: "Andy Smith",
    },
    {
      title: "“An amazing experience”",
      description:
        "We had a wonderful time at the place.Because we know about the man. The food was exquisite, and the service was exceptional. Highly recommend this spot for anyone!",
      image: "pic-2.svg",
      name: "Lisa Johnson",
    },
    {
      title: "“Unforgettable flavors”",
      description:
        "The dishes served here were truly unforgettable memories of life. Each bite was bursting with flavor, and the ambiance made it even more enjoyable.",
      image: "pic-3.svg",
      name: "Michael Brown",
    },
  ];

  return (
    <section className="w-[90%] m-auto  p-20">
      <div className="container mx-auto">
        <div className="text-5xl font-playfair text-center">
          <h1>What Our Customers Say</h1>
        </div>
        <div className=" p-6 grid grid-cols-1 md:grid-cols-3 gap-6">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-start border rounded-lg shadow-md bg-greyColor p-6 text-left mb-4"
            >
              <h3 className="text-primary font-bold text-sm hover:text-red-700 mb-2">
                {review.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{review.description}</p>

              <div className="w-full h-full mb-4 flex pt-2">
                <img
                  src={review.image}
                  alt="Main Dishes"
                  className="w-10 h-10 object-contain"
                />
                <h1 className="pl-6 text-xl font-medium text-gray-800 mb-2">
                  {review.name}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Says;
