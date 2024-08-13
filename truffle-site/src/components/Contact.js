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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission logic here
  // };

  return (
    <div className="stile-hover text-white rounded-xl w-2/3">
      <div id="sezTop" className="flex flex-row justify-around">
        <div id="input" className=" flex flex-col">
          <div className="flex flex-col">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              className="rounded text-black"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="surname">Surname:</label>
            <input
              type="text"
              id="surname"
              className="rounded text-black"
              value={surname}
              onChange={handleSurnameChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="rounded text-black"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
        </div>
        <div>
          <div>
            <p>Choices:</p>
            <ul>
              <li>Choice 1</li>
              <li>Choice 2</li>
              <li>Choice 3</li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" flex flex-row justify-center w-full">
        <div className="flex flex-col w-full items-center">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            className="w-2/3 h-[400px] rounded text-black"
            value={message}
            onChange={handleMessageChange}
          />
        </div>
      </div>
      <button className="colored-background-light hover:bg-white hover:text-black text-white font-bold py-2 px-4 mt-5 w-1/3  rounded">
        INVIA
      </button>
    </div>
  );
};

export default Contact;
