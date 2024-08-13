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
      <div className={`hidden md:block px-5  w-full py-5`}>
        <NavBar current={"/shop"} />
      </div>
      <div className="block md:hidden  w-full bg-custom-brown-dark">
        <NavBarMobile current={"/shop"} />
      </div>

      <div className=" flex flex-col justify-center">
        <img
          src={insegna}
          alt="truffle"
          className="h-[500px] w-4/5 mx-auto rounded-lg shadow-md"
        />
      </div>

      <div className="hidden md:flex">
        <WindowShop />
      </div>
      <div className="block h-full md:hidden">
        <CarouselShop />
      </div>
      <Footer />
    </div>
  );
};
export default Shop;
