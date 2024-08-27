import React from "react";
import WindowShop from "../components/WindowShop";
import CarouselShop from "../components/CarouselShop";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import NavBarMobile from "../components/NavBarMobile";
import { useLanguage } from "../hook/LanguagesContext";
const Shop = () => {
  const { language } = useLanguage();
  return (
    <div className="h-full w-full colored-background">
      <div>
        <NavBar current={"/shop"} />
      </div>
      <div className="block md:hidden  w-full bg-custom-brown-dark">
        <NavBarMobile current={"/shop"} />
      </div>

      <h1 className="text-3xl md:text-4xl text-center mb-8 px-1 pt-5 md:pt-36 text-white">
        {language === "it" ? "I NOSTRI PRODOTTI" : "OUR PRODUCTS"}
      </h1>
      <div className="hidden md:flex bkImageShop">
        <WindowShop />
      </div>
      <div className="block h-full md:hidden">
        <CarouselShop />
      </div>
      <div className="shadow-top mt-10 flex flex-col justify-center h-52">
        <Footer />
      </div>
    </div>
  );
};
export default Shop;
