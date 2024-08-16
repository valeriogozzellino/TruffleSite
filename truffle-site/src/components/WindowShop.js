import React, { useState } from "react";
import { dataTruffle } from "../utils/dataTruffle";

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
        <h3 className="text-center text-2xl py-3">{title}</h3>
      </div>
      <img src={imgUrl} alt="truffle" className="h-[250px] w-[250px]" />
      <p className={`${showMore ? "" : "line-clamp-2"}`}>{description}</p>
      <button className="text-white underline mt-2" onClick={toggleShowMore}>
        {showMore ? "Mostra meno" : "Scopri di più"}
      </button>
      {!quantityVisible && (
        <button
          onClick={openQuantity}
          className="colored-background-light hover:bg-white hover:text-black text-white font-bold py-2 px-4 mt-5 w-1/3 rounded shadow-xl">
          ACQUISTA
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

const ManageQuantity = ({ quantity, setQuantity, setQuantityVisible }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const handleConfirmClick = () => {
    setIsConfirmed(true);
  };
  const handleBuyClick = () => {
    console.log("Email: ", email);
    console.log("Phone: ", phone);
    console.log("Address: ", address);
    console.log("Quantity: ", quantity);
    setIsConfirmed(false);
    setQuantityVisible(false);
  };
  const price = quantity * 10;

  return (
    <div className="flex flex-col border rounded shadow mt-4 h-auto w-full items-center bg-custom-brown-light p-4">
      <div>
        <p className="text-lg font-semibold">SELEZIONA QUANTITÀ</p>
      </div>
      <div className="flex flex-row space-x-4 my-4">
        <button
          onClick={() => setQuantity(quantity - 10)}
          className="text-white border w-7 rounded-xl">
          -
        </button>
        <p className="text-white">{quantity}</p>
        <button
          onClick={() => setQuantity(quantity + 10)}
          className="text-white border w-7 rounded-xl">
          +
        </button>
      </div>
      <div className="flex flex-row w-full space-x-2 justify-center">
        <button
          onClick={() => {
            setQuantity(10); // Imposta la quantità
            setQuantityVisible(false); // Nascondi il componente di gestione quantità
          }}
          className="bg-custom-brown-dark hover:bg-white hover:text-black text-white font-bold py-2 px-4 mt-5 w-1/3 rounded shadow-xl">
          Annulla
        </button>
        <button
          onClick={handleConfirmClick}
          className="bg-custom-brown-dark hover:bg-white hover:text-black text-white font-bold py-2 px-4 mt-5 w-1/3 rounded shadow-xl">
          Conferma
        </button>
      </div>

      {isConfirmed && (
        <div className="mt-6 w-full">
          <div className="flex flex-col space-y-4">
            <div>
              <label className="text-lg font-semibold" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-1 p-2 rounded-lg border border-gray-300 text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="text-lg font-semibold" htmlFor="phone">
                Numero di Telefono:
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full mt-1 p-2 rounded-lg border border-gray-300 text-black"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <label className="text-lg font-semibold" htmlFor="address">
                Address:
              </label>
              <input
                type="text"
                id="address"
                className="w-full mt-1 p-2 rounded-lg border border-gray-300 text-black"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div>
              <p className="text-lg font-semibold">
                Prezzo Totale: <span className="text-xl">{price}€</span>
              </p>
            </div>
            <div className="w-full flex justify-center">
              <button
                onClick={handleBuyClick}
                className="bg-custom-brown-dark hover:bg-white hover:text-black text-white font-bold py-2 px-4 mt-5 w-2/3 rounded shadow-xl">
                Conferma Acquisto
              </button>
            </div>
          </div>
        </div>
      )}
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
