import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="bg-custom-brown-light p-8 text-white rounded-xl w-4/5 md:w-full max-w-4xl mx-auto shadow-lg">
      <div
        id="sezTop"
        className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-8">
        <div id="input" className="flex flex-col space-y-4 w-full md:w-2/3">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg font-semibold">
              Nome:
            </label>
            <input
              type="text"
              id="name"
              className="rounded-lg p-2 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-custom-brown-dark"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="surname" className="text-lg font-semibold">
              Cognome:
            </label>
            <input
              type="text"
              id="surname"
              className="rounded-lg p-2 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-custom-brown-dark"
              value={surname}
              onChange={handleSurnameChange}
            />
          </div>
          <div className="flex flex-col">
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
        </div>
        <div className="w-full md:w-1/3">
          <p className="text-lg font-semibold mb-2">A COSA SEI INTERESSATO?:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gray-600"
                  value="CACCIA AL TARTUFO"
                />
                <span className="ml-2">CACCIA AL TARTUFO</span>
              </label>
            </li>
            <li>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gray-600"
                  value="ACQUISTARE TARTUFI"
                />
                <span className="ml-2">ACQUISTARE TARTUFI</span>
              </label>
            </li>
            <li>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gray-600"
                  value="INFORMAZIONI"
                />
                <span className="ml-2">INFORMAZIONI</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center mt-8">
        <label htmlFor="message" className="text-lg font-semibold">
          Messaggio:
        </label>
        <textarea
          id="message"
          className="w-full md:w-3/4 h-[200px] rounded-lg p-3 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-custom-brown-dark"
          value={message}
          onChange={handleMessageChange}
        />
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-custom-brown-dark hover:bg-custom-brown-dark-hover text-white font-bold py-2 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-brown-dark">
          INVIA
        </button>
      </div>
    </div>
  );
};

export default Contact;
