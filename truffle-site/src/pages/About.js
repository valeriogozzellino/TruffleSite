import React from "react";
import NavBar from "../components/NavBar";
import NavBarMobile from "../components/NavBarMobile";

const About = () => {
  return (
    <div className="h-full w-full colored-background">
      <div className={`hidden md:block px-5  w-full py-5`}>
        <NavBar current={"/booked"} />
      </div>
      <div className="block md:hidden  w-full bg-custom-brown-dark">
        <NavBarMobile current={"/booked"} />
      </div>
      <h1 className="text-4xl text-center mb-5 text-white">About</h1>
      <p className="text-center text-white text-xl w-4/5">
        This is a simple example of a React app that uses Truffle to manage
        smart contracts on the Ethereum blockchain. The app allows users to book
        appointments and shop for products.
      </p>
    </div>
  );
};
export default About;
