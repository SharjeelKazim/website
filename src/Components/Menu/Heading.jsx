import React, { useState } from "react";

const Heading = () => {
  const menuData = [
    {
      id: 1,
      name: "Fried Eggs",
      category: "Breakfast",
      price: "$9.99",
      image: "/menu-1.svg",
    },
    {
      id: 2,
      name: "Hawaiian Pizza",
      category: "Main Dishes",
      price: "$15.99",
      image: "/menu-2.svg",
    },
    {
      id: 3,
      name: "Martinez Cocktail",
      category: "Drinks",
      price: "$7.25",
      image: "/menu-3.svg",
    },
    {
      id: 4,
      name: "Butterscotch Cake",
      category: "Desserts",
      price: "$20.99",
      image: "/menu-4.svg",
    },
    {
      id: 5,
      name: "Mint Lemonade",
      category: "Drinks",
      price: "$5.89",
      image: "/menu-5.svg",
    },
    {
      id: 6,
      name: "Chocolate Icecream",
      category: "Desserts",
      price: "$18.05",
      image: "/menu-6.svg",
    },
    {
      id: 7,
      name: "Cheese Burger",
      category: "Main Dishes",
      price: "$12.55",
      image: "/menu-7.svg",
    },
    {
      id: 8,
      name: "Classic Waffles",
      category: "Breakfast",
      price: "$12.99",
      image: "/menu-8.svg",
    },
  ];

  const [filteredItems, setFilteredItems] = useState(menuData);
  const [filters, setFilters] = useState('All');

  const handleFilter = (category) => {
    if (category === "All") {
      setFilteredItems(menuData);
    } else {
      setFilteredItems(menuData.filter((item) => item.category === category));
    }
  };

  return (
    <section className="w-[90%] m-auto pb-20">
      <div className="items-center text-center pt-10">
        <div>
          <h1 className="font-playfair text-8xl text-light ">Our Menu</h1>
          <p className="text-desaturatedBlueGray font-dmSans text-lg">
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </div>

        <div className="pt-10 flex gap-10 justify-center">
          <button
            className={`${filters === 'All' ? 'bg-primary text-white' :''} rounded-full border border-lightDesaturatedGreen text-light font-bold text-base px-6 py-2`}
            onClick={() => {
              setFilters('All')
              handleFilter("All")}}
          >
            All
          </button>
          <button
            className={`${filters === 'Desserts' ? 'bg-primary text-white' :''} rounded-full border border-lightDesaturatedGreen text-light font-bold text-base px-6 py-2`}
            onClick={() => {
              setFilters('Desserts')
              handleFilter("Desserts")}}
          >
            Desserts
          </button>
          <button
            className={`${filters === 'Drinks' ? 'bg-primary text-white' :''} rounded-full border border-lightDesaturatedGreen text-light font-bold text-base px-6 py-2`}
            onClick={() => {
              setFilters("Drinks")
              handleFilter("Drinks")}}
          >
            Drinks
          </button>
          <button
            className={`${filters === 'Main Dishes'? 'bg-primary text-white':''} rounded-full border border-lightDesaturatedGreen text-light font-bold text-base px-6 py-2`}
            onClick={() => {
              setFilters("Main Dishes")
              handleFilter("Main Dishes")}}
          >
            Main Dishes
          </button>
          <button
            className={` ${ filters === "Breakfast" ? 'bg-primary text-white' : ''} rounded-full border border-lightDesaturatedGreen text-light font-bold text-base px-6 py-2`}
            onClick={() => {
              setFilters ("Breakfast")
              handleFilter("Breakfast")}}
          >
            Breakfast
          </button>
        </div>

        <div className=" pt-10 md:pt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center text-center bg-white border border-lightDesaturatedGreen shadow-sm rounded-lg"
            >
              <div>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-primary p-2">
                {item.price}
              </h3>
              <h3 className="text-2xl font-bold text-light ">{item.name}</h3>
              <p className="text-lightGrey text-base p-2">
                Made with eggs, lettuce, salt, oil and other ingredients.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Heading;
