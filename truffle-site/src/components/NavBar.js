import React, { useState, useEffect } from "react";
import Logo from "../img/logoTruffle2.png";
import { useScrollDirection } from "../hook/UseScroollDirection";

const NavBar = ({ current }) => {
  const scrollDirection = useScrollDirection();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNavigation = (root) => {
    window.location.href = root;
  };

  const handleScroll = () => {
    const offset = window.pageYOffset;
    setIsScrolled(offset < 750);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-10 transition-transform duration-300 ${
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      } `}>
      <div
        className={`w-full hidden sm:flex h-28 flex-row justify-between shadow py-5 ${
          isScrolled ? "bg-custom-brown-opacity" : "bg-custom-brown-dark"
        }`}>
        <div className="w-auto h-auto">
          <img
            onClick={() => handleNavigation("/")}
            src={Logo}
            alt="Logo"
            className="w-[80px] h-[70px] ml-5 mb-3"
          />
        </div>
        <div className="text-white flex flex-row justify-center font-libre">
          <span
            className={`flex flex-col justify-center m-5 text-2xl hover:underline hover:-translate-y-1 ${
              current === "/booked" ? "underline" : ""
            }`}
            onClick={() => handleNavigation("/booked")}>
            CACCIA AL TARTUFO
          </span>
          <span
            className={`flex flex-col justify-center m-5 text-2xl hover:underline hover:-translate-y-1 ${
              current === "/shop" ? "underline" : ""
            }`}
            onClick={() => handleNavigation("/shop")}>
            NEGOZIO
          </span>
          <span
            className={`flex flex-col justify-center m-5 text-2xl hover:underline hover:-translate-y-1 ${
              current === "/about" ? "underline" : ""
            }`}
            onClick={() => handleNavigation("/about")}>
            CHI SIAMO
          </span>
          <span
            className={`flex flex-col justify-center m-5 text-2xl hover:underline hover:-translate-y-1 ${
              current === "/contact" ? "underline" : ""
            }`}
            onClick={() => handleNavigation("/contact")}>
            CONTATTI
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
