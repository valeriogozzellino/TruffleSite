import React, { useState } from "react";
import { useLanguage } from "../hook/LanguagesContext";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
const ContactBooked = () => {
  const { language } = useLanguage();
  const [email, setEmail] = useState("");
  const [numeroPersone, setNumeroPersone] = useState(1);
  const [message, setMessage] = useState("");
  const [showAllergie, setShowAllergie] = useState(false);
  const [allergie, setAllergie] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const [interests, setInterests] = useState({
    conDegustazione: false,
    senzaDegustazione: false,
  });

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNumeroPersoneChange = (event) => {
    setNumeroPersone(Math.max(1, event.target.value));
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAllergieClick = () => {
    setShowAllergie(!showAllergie);
  };
  const decrementaPersone = () => {
    setNumeroPersone((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleCheckboxChange = (event) => {
    setInterests({ ...interests, [event.target.name]: event.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const selectedInterests = Object.entries(interests)
      .filter(([key, value]) => value)
      .map(([key]) =>
        key
          .replace(/([A-Z])/g, " $1")
          .toUpperCase()
          .trim()
      )
      .join(", ");

    const templateParams = {
      from_email: email, // Assicurati che questo sia l'email del mittente
      subject: "Richiesta PRENOTAZIONE CACCIA AL TARTUFO",
      message: `${message}\nAllergie: ${allergie}\nNumero di Persone: ${numeroPersone}\nTipologia: ${selectedInterests}`,
      nome: `${name} ${email}`, // Cambiato per corrispondere all'EmailJS template
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
          setEmail("");
          setNumeroPersone(1);
          setName("");
          setAllergie("");
          setMessage("");
          setTimeout(() => setSuccess(false), 5000); // Hide the popup after 5 seconds
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          if (language === "it") {
            console.error("Failed to send email:", error);
            alert("Si è verificato un errore durante l'invio della mail.");
          } else {
            console.error("Failed to send email:", error);
            alert("An error occurred while sending the email.");
          }
        }
      );
  };

  return (
    <div className=" w-4/5 md:w-full border p-6 max-w-lg text-white m-5 bg-custom-brown-light rounded-xl shadow-lg">
      <div className="w-full h-full space-y-6">
        <h3 className="text-2xl text-center w-full font-semibold">
          {language === "it"
            ? "Prenota la tua Caccia al tartufo"
            : "Book your Hunting Experience"}
        </h3>

        <div className="flex flex-col space-y-2">
          <label className="text-lg">
            {language === "it" ? "Numero di persone:" : "Number of people:"}
          </label>
          <input
            type="number"
            value={numeroPersone}
            onChange={handleNumeroPersoneChange}
            min="1"
            className="rounded-lg w-full p-2 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-custom-brown-dark"
          />
          <div className="flex flex-row space-x-4">
            <button
              onClick={() => decrementaPersone()}
              className="text-white border w-7 rounded-xl">
              -
            </button>
            <button
              onClick={() => setNumeroPersone(numeroPersone + 1)}
              className="text-white border w-7 rounded-xl">
              +
            </button>
          </div>
        </div>
        <div className="w-full md:w-full">
          <ul className="list-none space-y-2">
            <li>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gray-600"
                  name="conDegustazione"
                  checked={interests.conDegustazione}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-2">
                  {language === "it" ? "CON DEGUSTAZIONE" : "WITH TASTING"}
                </span>
              </label>
            </li>

            <li>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gray-600"
                  name="senzaDegustazione"
                  checked={interests.senzaDegustazione}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-2">
                  {language === "it" ? "SENZA DEGUSTAZIONE" : "WITHOUT TASTING"}
                </span>
              </label>
            </li>
          </ul>
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="text-lg font-semibold">
            {language === "it" ? "Nome:" : "Name:"}
          </label>
          <input
            type="text"
            id="name"
            className="rounded-lg p-2 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-custom-brown-dark"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-lg font-semibold">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="rounded-lg p-2 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-custom-brown-dark"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-lg">
            {language === "it"
              ? "Messaggio (Giorni di preferenza):"
              : "Message (preferred days)"}
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
            <label className="text-lg">
              {language === "it"
                ? "Specifica le tue allergie:"
                : "Specify your allergies"}
            </label>
            <textarea
              value={allergie}
              onChange={(e) => setAllergie(e.target.value)}
              placeholder="Inserisci eventuali allergie..."
              className="rounded-lg w-full p-3 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-custom-brown-dark"
            />
          </div>
        )}

        <div className="flex justify-end mt-6">
          {!isLoading ? (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleSubmit}
              className="bg-custom-brown-dark hover:bg-custom-brown-dark-hover text-white font-bold py-2 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-brown-dark">
              {language === "it" ? "INVIA" : "SEND"}
            </motion.button>
          ) : (
            <p>{language === "it" ? "Invio in corso..." : "Sending..."}</p>
          )}
        </div>
        {success && (
          <div className="fixed top-0 z-10 left-0 right-0 bg-green-500 text-white text-center p-4 rounded-b-lg">
            {language === "it"
              ? "Richiesta inviata con successo"
              : "Request sent successfully"}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactBooked;
