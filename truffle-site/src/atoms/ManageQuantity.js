import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import { useLanguage } from "../hook/LanguagesContext";

const ManageQuantity = ({
  quantity,
  setQuantity,
  setQuantityVisible,
  truffle,
}) => {
  const { language } = useLanguage();
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [addNote, setAddNote] = useState(false);

  const handleAddNote = () => {
    setAddNote(!addNote);
  };

  const handleConfirmClick = () => {
    setIsConfirmed(true);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      nome: `${name}  ${email}`,
      from_email: email,
      subject: "Richiesta ACQUISTO SITO",
      message: `Tartufo: ${truffle}\nMessaggio: ${message}\nQuantità: ${quantity}\nTelefono: ${phone}\nIndirizzo: ${address}`,
    };

    emailjs
      .send(
        "service_xzkwixu",
        "template_7e4e2r9",
        templateParams,
        "uR9nBHO2ncwAu9Ilu"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setSuccess(true);
          setName("");
          setEmail("");
          setMessage("");
          setPhone("");
          setAddress("");
          setQuantity(10);
          setTimeout(() => setSuccess(false), 5000); // Hide the popup after 5 seconds
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          if (language === "it") {
            alert("Si è verificato un errore durante l'invio della mail.");
          } else {
            alert("An error occurred while sending the email.");
          }
        }
      );
  };

  return (
    <div className="flex flex-col border rounded shadow mt-4 w-full items-center bg-custom-brown-light">
      <div className="m-3">
        <p>
          {language === "it"
            ? "SELEZIONA LA QUANTITA' E RICEVERAI UNA MAIL IL PRIMA POSSIBILE"
            : "SELECT QUANTITY AND YOU WILL RECEIVE AN EMAIL AS SOON AS POSSIBLE"}
        </p>
      </div>
      <div className="flex flex-col items-center">
        <label className="text-lg" htmlFor="quantity">
          {language === "it" ? "Quantità in Grammi:" : "Quantity in Grams:"}
        </label>
        <input
          type="number"
          id="quantity"
          className="w-3/4 mt-1 p-2 rounded-lg border border-gray-300 text-black"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <div className="flex flex-row w-full space-x-2 mb-2 justify-center">
        <button
          onClick={() => {
            setQuantity(10); // Imposta la quantità
            setQuantityVisible(false); // Nascondi il componente di gestione quantità
          }}
          className="bg-custom-brown-dark hover:bg-white hover:text-black text-white font-bold py-2 px-4 mt-5  rounded shadow-xl">
          {language === "it" ? "Annulla" : "Delete"}
        </button>
        <button
          onClick={handleConfirmClick}
          className="bg-custom-brown-dark hover:bg-white hover:text-black text-white font-bold py-2 px-4 mt-5  rounded shadow-xl">
          {language === "it" ? "Conferma" : "Confirm"}
        </button>
      </div>

      <AnimatePresence>
        {isConfirmed && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className=" mb-5 mt-5 w-full overflow-hidden">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-row">
                <div className="flex flex-col w-1/2 px-3 ">
                  <label className="text-lg font-semibold" htmlFor="email">
                    Nome:
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full mt-1 p-2 rounded-lg border border-gray-300 text-black"
                    value={name}
                    onChange={handleNameChange}
                  />
                </div>
                <div className="flex flex-col w-1/2 px-3 ">
                  <label className="text-lg font-semibold" htmlFor="phone">
                    {language === "it" ? "Telefono" : "Phone"}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full mt-1 p-2 rounded-lg border border-gray-300 text-black"
                    value={phone}
                    onChange={handlePhoneChange}
                  />
                </div>
              </div>
              <div className="flex flex-col px-3 ">
                <label className="text-lg font-semibold" htmlFor="email">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full mt-1 p-2 rounded-lg border border-gray-300 text-black"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="flex flex-col px-3 ">
                <label className="text-lg font-semibold" htmlFor="address">
                  {language === "it" ? "Indirizzo:" : "Address:"}
                </label>
                <input
                  type="text"
                  id="address"
                  className="w-full mt-1 p-2 rounded-lg border border-gray-300 text-black"
                  value={address}
                  onChange={handleAddressChange}
                />
              </div>
              <div className="flex justify-between items-center">
                <button
                  onClick={handleAddNote}
                  className="bg-custom-brown-dark text-white py-2 px-4 ml-3 rounded-lg shadow hover:bg-custom-brown-dark-hover focus:outline-none focus:ring-2 focus:ring-custom-brown-dark">
                  {addNote ? "Elimina Messaggio" : "Aggiungi Messaggio"}
                </button>
              </div>

              <AnimatePresence>
                {addNote && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center mt-4">
                    <label htmlFor="message" className="text-lg font-semibold">
                      {language === "it" ? "Messaggio:" : "Message:"}
                    </label>
                    <textarea
                      id="message"
                      className="w-3/4 md:w-3/4 h-[100px] rounded-lg p-3 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-custom-brown-dark"
                      value={message}
                      onChange={handleMessageChange}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex justify-center mt-8">
                {!isLoading ? (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleSubmit}
                    className="bg-custom-brown-dark hover:bg-custom-brown-dark-hover text-white font-bold py-2 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-brown-dark">
                    {language === "it" ? "INVIA" : "SEND"}
                  </motion.button>
                ) : (
                  <p>
                    {language === "it" ? "Invio in corso..." : "Sending..."}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {success && (
        <div className="fixed top-0 z-10 left-0 right-0 bg-green-500 text-white text-center p-4 rounded-b-lg">
          {language === "it"
            ? "Richiesta inviata con successo"
            : "Request sent successfully"}
        </div>
      )}
    </div>
  );
};

export default ManageQuantity;
