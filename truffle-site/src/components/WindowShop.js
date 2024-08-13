import React, { useState } from "react";
import { dataTruffle } from "../utils/dataTruffle";

const TruffleItem = ({ title, description, imgUrl }) => {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <div className="flex flex-col w-1/2 items-center m-7 px-5 h-full">
      <div className="h-[90px]">
        <h3 className=" text-center text-2xl py-3">{title}</h3>
      </div>
      <img src={imgUrl} alt="truffle" className="h-[250px] w-[250px]" />
      <p className={` ${showMore ? "" : "line-clamp-2"}`}>{description}</p>
      <button className="text-white underline mt-2" onClick={toggleShowMore}>
        {showMore ? "Mostra meno" : "Scopri di più"}
      </button>
      <button className="colored-background-light hover:bg-white hover:text-black text-white font-bold py-2 px-4 mt-5 w-1/3 rounded shadow-xl">
        ACQUISTA
      </button>
    </div>
  );
};

const WindowShop = () => {
  const truffleItems = dataTruffle;

  return (
    <div className="flex flex-col items-center mb-10">
      <div className="text-white flex flex-row w-2/3">
        {truffleItems.slice(0, 2).map((item, index) => (
          <TruffleItem
            key={index}
            title={item.title}
            description={item.description}
            imgUrl={item.imgUrl}
          />
        ))}
      </div>
      <div className="text-white flex flex-row w-2/3 h-[500px]">
        {truffleItems.slice(2).map((item, index) => (
          <TruffleItem
            key={index}
            title={item.title}
            description={item.description}
            imgUrl={item.imgUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default WindowShop;
