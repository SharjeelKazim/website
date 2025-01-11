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
  const [filters, setFilters] = useState("All");

  const handleFilter = (category) => {
    if (category === "All") {
      setFilteredItems(menuData);
    } else {
      setFilteredItems(menuData.filter((item) => item.category === category));
    }
  };

  return (
    <section className="w-[90%] mx-auto py-10 px-4">
      <div className="items-center text-center">
        <div>
          <h1 className="font-playfair text-3xl text-light md:text-4xl lg:text-5xl">
            Our Menu
          </h1>
          <p className="text-desaturatedBlueGray lg:w-[50%] mx-auto text-sm md:text-base lg:text-lg mt-4">
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </div>

        <div className="pt-6 flex flex-wrap gap-2 md:gap-4 justify-center">
          {["All", "Desserts", "Drinks", "Main Dishes", "Breakfast"].map(
            (category) => (
              <button
                key={category}
                className={`${
                  filters === category ? "bg-primary text-white" : ""
                } rounded-full border border-lightDesaturatedGreen text-light text-sm md:text-base font-medium px-4 py-2`}
                onClick={() => {
                  setFilters(category);
                  handleFilter(category);
                }}
              >
                {category}
              </button>
            )
          )}
        </div>

        <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center text-center bg-white border border-lightDesaturatedGreen shadow-sm rounded-lg p-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-lg md:text-xl font-bold text-primary mt-4">
                {item.price}
              </h3>
              <h3 className="text-md md:text-lg font-bold text-light mt-2">
                {item.name}
              </h3>
              <p className="text-sm md:text-base text-lightGrey mt-2">
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
