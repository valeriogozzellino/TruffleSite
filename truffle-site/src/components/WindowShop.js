import React, { useState } from "react";
import { dataTruffle } from "../utils/dataTruffle";
import ManageQuantity from "../atoms/ManageQuantity";

/**
 * truffle item component
 * @param {string} title
 * @param {string} description
 * @param {string} imgUrl
 * @returns
 */

const TruffleItem = ({ title, description, imgUrl }) => {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => setShowMore(!showMore);
  const [quantityVisible, setQuantityVisible] = useState(false);
  const [quantity, setQuantity] = useState(10);

  const openQuantity = () => {
    setQuantityVisible(!quantityVisible); // Toggle visibility state
    console.log("Open quantity");
  };

  return (
    <div className="flex flex-col w-1/2 items-center m-7 px-5 h-full">
      <div className="h-[90px]">
        <b>
          <h3 className="text-center outlined-title text-2xl py-3">{title}</h3>
        </b>
      </div>
      <img src={imgUrl} alt="truffle" className="h-[250px] w-[250px]" />
      <p
        className={`${
          showMore ? "" : "line-clamp-2"
        } outlined-text bg-custom-brown-opacity rounded-md text-lg p-2 py-1`}>
        <b>{description}</b>
      </p>
      <button
        className="text-white outlined-text underline mt-2"
        onClick={toggleShowMore}>
        {showMore ? "Mostra meno" : "Scopri di più"}
      </button>
      {!quantityVisible && (
        <button
          onClick={openQuantity}
          className="colored-background hover:bg-white hover:text-black text-white font-bold py-2 px-4 mt-5 w-1/3 rounded-xl shadow-xl">
          ORDINA
        </button>
      )}
      {quantityVisible && (
        <ManageQuantity
          quantity={quantity}
          setQuantity={setQuantity}
          setQuantityVisible={setQuantityVisible}
        />
      )}
    </div>
  );
};

/**
 * Window shop component
 * vengono mappati i componenti TruffleItem
 * @returns
 */
const WindowShop = () => {
  const truffleItems = dataTruffle;

  return (
    <div className="flex flex-col  opacity-90-bg items-center mb-10">
      <div className="text-white  flex flex-row w-2/3">
        {truffleItems.slice(0, 2).map((item, index) => (
          <TruffleItem
            title={item.title}
            description={item.description}
            imgUrl={item.imgUrl}
          />
        ))}
      </div>
      <div className="text-white flex flex-row w-2/3 ">
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
