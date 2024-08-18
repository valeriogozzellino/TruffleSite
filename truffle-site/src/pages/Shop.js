import React from "react";
import WindowShop from "../components/WindowShop";
import CarouselShop from "../components/CarouselShop";
import insegna from "../img/InsegnaShop.webp";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import NavBarMobile from "../components/NavBarMobile";

const Shop = () => {
  return (
    <div className="h-full w-full colored-background">
      <div>
        <NavBar current={"/shop"} />
      </div>
      <div className="block md:hidden  w-full bg-custom-brown-dark">
        <NavBarMobile current={"/shop"} />
      </div>

      <div className=" flex flex-col pt-10 md:pt-32 justify-center">
        <img
          src={insegna}
          alt="truffle"
          className="h-[500px] w-4/5 mx-auto rounded-lg shadow-md"
        />
      </div>
      <h1 className="text-2xl text-center mb-5 mt-10 text-white">
        <b>I NOSTRI PRODOTTI</b>
      </h1>
      <div className="hidden md:flex">
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
