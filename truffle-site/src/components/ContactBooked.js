import React, { useState } from "react";

const ContactBooked = () => {
  const [numeroPersone, setNumeroPersone] = useState(1);
  const [messaggio, setMessaggio] = useState("");
  const [showAllergie, setShowAllergie] = useState(false);
  const [allergie, setAllergie] = useState("");

  const handleNumeroPersoneChange = (event) => {
    setNumeroPersone(Math.max(1, event.target.value));
  };

  const handleAllergieClick = () => {
    setShowAllergie(!showAllergie);
  };

  return (
    <div className=" w-4/5 md:w-full border p-6 max-w-lg text-white m-5 bg-custom-brown-light rounded-xl shadow-lg">
      <div className="w-full h-full space-y-6">
        <h3 className="text-2xl text-center w-full font-semibold">
          Prenotazione al Tartufo
        </h3>

        <div className="flex flex-col space-y-2">
          <label className="text-lg">Numero di persone:</label>
          <input
            type="number"
            value={numeroPersone}
            onChange={handleNumeroPersoneChange}
            min="1"
            className="rounded-lg w-full p-2 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-custom-brown-dark"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-lg">Messaggio (Giorni di preferenza):</label>
          <textarea
            value={messaggio}
            onChange={(e) => setMessaggio(e.target.value)}
            placeholder="Inserisci eventuali giorni di preferenza..."
            className="rounded-lg w-full p-3 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-custom-brown-dark"
          />
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={handleAllergieClick}
            className="bg-custom-brown-dark text-white py-2 px-4 rounded-lg shadow hover:bg-custom-brown-dark-hover focus:outline-none focus:ring-2 focus:ring-custom-brown-dark">
            {showAllergie ? "Nascondi Allergie" : "Hai allergie?"}
          </button>
        </div>

        {showAllergie && (
          <div className="flex flex-col space-y-2 mt-4">
            <label className="text-lg">Specifica le tue allergie:</label>
            <textarea
              value={allergie}
              onChange={(e) => setAllergie(e.target.value)}
              placeholder="Inserisci eventuali allergie..."
              className="rounded-lg w-full p-3 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-custom-brown-dark"
            />
          </div>
        )}

        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-6 rounded-lg shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
            Invia Prenotazione
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactBooked;
