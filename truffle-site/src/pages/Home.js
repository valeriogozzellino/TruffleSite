import React from "react";
import NavBar from "../components/NavBar";
import NavBarMobile from "../components/NavBarMobile";
import ImgCopertina from "../img/ImgCopertina.png";
import Content from "../components/Content";
import ContentMobile from "../components/ContentMobile";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
const Home = () => {
  return (
    <div className="h-full w-full colored-background">
      <div className="px-5 py-5">
        <NavBarMobile />
        <NavBar />
      </div>
      <div className="flex flex-col justify-start items-center mb-8  md:w-full">
        <img src={ImgCopertina} alt="Logo" className="w-4/5 h-screen rounded" />
      </div>
      <div className="hidden md:block">
        <Content />
      </div>
      <div className="block md:hidden">
        <ContentMobile />
      </div>
      <h1 className="text-white text-4xl text-center py-4">CONTATTACI</h1>
      <div className="flex flex-row justify-center">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
