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

      <h1 className="text-2xl text-center pt-10 md:pt-32 mb-5 mt-10 text-white">
        <b>{language === "it" ? "I NOSTRI PRODOTTI" : "OUR PRODUCTS"}</b>
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
