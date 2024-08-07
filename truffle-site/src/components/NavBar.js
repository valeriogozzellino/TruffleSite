import React from "react";
import Logo from "../img/logoTruffle2.png";

const NavBar = () => {
  return (
    <div className="w-full hidden sm:flex h-40  flex-row justify-between">
      <div className="w-auto h-auto">
        <img src={Logo} alt="Logo" className="w-fit h-40 ml-3" />
      </div>
      <div className="text-white flex flex-row justify-center font-libre">
        <span className="flex flex-col justify-center m-5 text-2xl   hover:underline">
          CACCIA AL TARTUFO
        </span>
        <span className="flex flex-col justify-center m-5 text-2xl   hover:underline">
          NEGOZIO
        </span>
        <span className="flex flex-col justify-center m-5 text-2xl  hover:underline">
          CHI SIAMO
        </span>
        <span className="flex flex-col justify-center m-5 text-2xl  hover:underline">
          CONTATTI
        </span>
      </div>
    </div>
  );
};

export default NavBar;
