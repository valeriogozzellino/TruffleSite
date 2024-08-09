import React from "react";
import Img from "../img/truffleElement.png";
const WindowShop = () => {
  return (
    <div className="flex flex-col items-center">
      <div id="sez1" className="text-white flex flex-row w-2/3 ">
        <div id="el1" className="flex flex-col w-1/2 items-center m-5 px-5">
          <h3 className="text-2xl py-3"> MAGNATUM PICO (TARTUFO BIANCO) </h3>
          <img src={Img} alt="truffle" />
          <p className="">
            Il tartufo nero, conosciuto anche come il diamante nero della
            cucina, è uno dei funghi più pregiati e ricercati al mondo...
          </p>
          <button className="colored-background-light hover:bg-white hover:text-black text-white font-bold py-2 px-4 mt-5 w-1/3  rounded">
            ACQUISTA
          </button>
        </div>
        <div id="el1" className="flex flex-col w-1/2 items-center m-5 px-5">
          <h3 className="text-2xl py-3"> NERO ESTIVO (SCORZONE) </h3>
          <img src={Img} alt="truffle" />
          <p className="">
            Il tartufo nero, conosciuto anche come il diamante nero della
            cucina, è uno dei funghi più pregiati e ricercati al mondo...
          </p>
          <button className="colored-background-light hover:bg-white hover:text-black text-white font-bold py-2 px-4 mt-5  w-1/3 rounded">
            ACQUISTA
          </button>
        </div>
      </div>
      <div id="sez1" className="text-white flex flex-row w-2/3 ">
        <div id="el1" className="flex flex-col w-1/2 items-center m-5 px-5">
          <h3 className="text-2xl py-3">NERO PREGIATO (MELANOSPORUM VITT)</h3>
          <img src={Img} alt="truffle" />
          <p className="">
            Il tartufo nero, conosciuto anche come il diamante nero della
            cucina, è uno dei funghi più pregiati e ricercati al mondo...
          </p>
          <button className="colored-background-light hover:bg-white hover:text-black text-white font-bold py-2 px-4 mt-5 rounded">
            ACQUISTA
          </button>
        </div>
        <div id="el1" className="flex flex-col w-1/2 items-center m-5 px-5">
          <h3 className="text-2xl py-3">NERO INVERNALE (BRUMALE)</h3>
          <img src={Img} alt="truffle" />
          <p className="">
            Il tartufo nero, conosciuto anche come il diamante nero della
            cucina, è uno dei funghi più pregiati e ricercati al mondo...
          </p>
          <button className="colored-background-light hover:bg-white hover:text-black text-white font-bold py-2 px-4 mt-5 rounded">
            ACQUISTA
          </button>
        </div>
      </div>
    </div>
  );
};
export default WindowShop;
