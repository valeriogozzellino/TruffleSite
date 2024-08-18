import React from "react";
import Contact from "../components/Contact";
import NavBar from "../components/NavBar";
import NavBarMobile from "../components/NavBarMobile";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <div className="colored-background">
      <div>
        <NavBar current={"/"} />
      </div>
      <div className="block md:hidden z-10 fixed w-full bg-custom-brown-dark">
        <NavBarMobile current={"/"} />
      </div>
      <div className="flex flex-col pt-32 justify-center items-center ">
        <h1 className="text-4xl text-center mb-5 text-white">Contact Us</h1>
        <p className=" text-center  text-white">
          Fill out the form below to get in touch with us.
        </p>
        <p className=" text-center mb-5 text-white">
          We will respond as soon as possible.
        </p>
        <Contact />
      </div>
      <div className="shadow-top mt-10 flex flex-col justify-center h-52">
        <Footer />
      </div>
    </div>
  );
};
export default ContactUs;
