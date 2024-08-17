import React, { useState } from "react";

const ManageQuantity = ({ quantity, setQuantity, setQuantityVisible }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const handleConfirmClick = () => {
    console.log("Confirm");
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
    <div className="flex flex-col border rounded shadow mt-4 w-full items-center bg-custom-brown-light">
      <div className="m-3">
        <p> SELECT QUANTITY</p>
      </div>
      <div className="flex flex-row space-x-4">
        <button
          onClick={() => setQuantity(quantity - 10)}
          className="text-white border w-7 rounded-xl">
          -
        </button>
        <p className="text-white">{quantity}g</p>
        <button
          onClick={() => setQuantity(quantity + 10)}
          className="text-white border w-7 rounded-xl">
          +
        </button>
      </div>
      <div className="flex flex-row w-full space-x-2 mb-2 justify-center">
        <button
          onClick={() => {
            setQuantity(10); // Imposta la quantità
            setQuantityVisible(false); // Nascondi il componente di gestione quantità
          }}
          className="bg-custom-brown-dark hover:bg-white hover:text-black text-white font-bold py-2 px-4 mt-5  rounded shadow-xl">
          Annulla
        </button>
        <button
          onClick={handleConfirmClick}
          className="bg-custom-brown-dark hover:bg-white hover:text-black text-white font-bold py-2 px-4 mt-5  rounded shadow-xl">
          Conferma
        </button>
      </div>

      {isConfirmed && (
        <div className=" mb-5 mt-5 w-full">
          <div className="flex flex-col  space-y-4">
            <div className="flex flex-col px-3 ">
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
            <div className="flex flex-col px-3 ">
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
            <div className="flex flex-col px-3 ">
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

export default ManageQuantity;
