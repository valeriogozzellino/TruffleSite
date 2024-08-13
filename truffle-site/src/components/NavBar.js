import React from "react";
import Logo from "../img/logoTruffle2.png";

const NavBar = ({ current }) => {
  const handleNavigation = (root) => {
    // Potresti usare section per definire la logica di routing in modo dinamico
    window.location.href = root;
  };

  return (
    <div className="w-full hidden sm:flex h-24 flex-row justify-between">
      <div className="w-auto h-auto">
        <img
          onClick={() => handleNavigation("/")}
          src={Logo}
          alt="Logo"
          className="w-fit h-24 ml-3"
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
  );
};

export default NavBar;
