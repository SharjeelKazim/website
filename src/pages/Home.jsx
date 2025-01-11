import React from "react";
import Navbar from "../Components/common/Navbar";
import Hero from "../Components/HomePageComp/Hero";
import MenuCards from "../Components/HomePageComp/MenuSection";
import MoreAbout from "../Components/HomePageComp/MoreAbout";
import Services from "../Components/HomePageComp/Services";
import Delivery from "../Components/HomePageComp/Delivery";
import Blog from "../Components/HomePageComp/Blog";
import Footer from "../Components/common/Footer";
import CustomersSays from "../Components/HomePageComp/CustomersSays";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <MenuCards />
      <MoreAbout />
      <Services />
      <Delivery />
      <CustomersSays/>

      <Blog />
      <Footer />
    </>
  );
};

export default Home;
