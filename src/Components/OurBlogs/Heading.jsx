import React from "react";

const MenuCard = ({ imgSrc, date, title }) => (
  <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
    <img
      className="w-full h-48 object-cover"
      src={imgSrc}
      alt={title}
    />
    <div className="px-4 py-4">
      <p className="text-start font-dmSans font-medium text-[14px] text-arcineGrey">
        {date}
      </p>
      <h3 className="text-start font-dmSans font-medium text-[20px] mt-2 text-light">
        {title}
      </h3>
    </div>
  </div>
);

const Heading = () => {
  const menuItems = [
    { imgSrc: "d-1.svg", date: "January 3, 2023", title: "How to prepare a delicious gluten free sushi" },
    { imgSrc: "d-2.svg", date: "January 3, 2023", title: "Exclusive baking lessons from the pastry king" },
    { imgSrc: "d-3.svg", date: "January 3, 2023", title: "How to prepare the perfect fries in an air fryer" },
    { imgSrc: "d-4.svg", date: "January 3, 2023", title: "How to prepare delicious chicken tenders" },
    { imgSrc: "d-5.svg", date: "January 3, 2023", title: "5 great cooking gadgets you can buy to save time" },
    { imgSrc: "d-6.svg", date: "January 3, 2023", title: "The secret tips & tricks to prepare a perfect burger" },
    { imgSrc: "d-7.svg", date: "January 3, 2023", title: "7 delicious cheesecake recipes you can prepare" },
    { imgSrc: "d-8.svg", date: "January 3, 2023", title: "5 great pizza restaurants you should visit this city" },
    { imgSrc: "d-10.svg", date: "January 3, 2023", title: "5 great cooking gadgets you can buy to save time" },
    { imgSrc: "d-11.svg", date: "January 3, 2023", title: "How to prepare a delicious gluten free sushi" },
    { imgSrc: "d-12.svg", date: "January 3, 2023", title: "Top 20 simple and quick desserts for kids" },
    { imgSrc: "d-13.svg", date: "January 3, 2023", title: "Top 20 simple and quick desserts for kids" },
  ];

  return (
    <section className="w-[90%] mx-auto py-10">
      <div className="items-center text-center pt-10">
        <div>
          <h1 className="font-playfair text-4xl lg:text-8xl text-light">Our Blog & Articles</h1>
          <p className="text-desaturatedBlueGray font-dmSans text-base lg:text-lg lg:w-[50%] mx-auto pt-8">
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </div>

        <div className="pt-10 md:pt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {menuItems.map((item, index) => (
            <MenuCard
              key={index}
              imgSrc={item.imgSrc}
              date={item.date}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Heading;
