import React from "react";
import NavBar from "../components/NavBar";
import NavBarMobile from "../components/NavBarMobile";
import Footer from "../components/Footer";
const Booked = () => {
  return (
    <div className="h-full w-full colored-background">
      <div className={`hidden md:block px-5  w-full py-5`}>
        <NavBar current={"/booked"} />
      </div>
      <div className="block md:hidden  w-full bg-custom-brown-dark">
        <NavBarMobile current={"/booked"} />
      </div>
      <h1 className="text-4xl text-center mb-5 text-white">
        Grazie per aver prenotato!
      </h1>
      <p className="text-center text-white text-xl w-4/5">
        La tua prenotazione è stata registrata con successo. Ti invieremo una
        conferma via email.
      </p>
      <div className="shadow-top mt-10 flex flex-col justify-center h-52">
        <Footer />
      </div>
    </div>
  );
};
export default Booked;
