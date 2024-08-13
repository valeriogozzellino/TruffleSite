import React from "react";
import Contact from "../components/Contact";
import NavBar from "../components/NavBar";
import NavBarMobile from "../components/NavBarMobile";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <div className="h-full colored-background">
      <div className={`hidden md:block  px-5  w-full py-5 shadow`}>
        <NavBar current={"/contact"} />
      </div>
      <div className="block md:hidden  w-full bg-custom-brown-dark">
        <NavBarMobile current={"/contact"} />
      </div>
      <div className="flex flex-col mt-10 justify-center items-center ">
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
