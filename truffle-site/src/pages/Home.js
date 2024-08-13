import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import NavBarMobile from "../components/NavBarMobile";
import videoCaccia from "../video/cacciaTartufo.mp4";
import Content from "../components/Content";
import ContentMobile from "../components/ContentMobile";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const Home = () => {
  const [backgroundFixed, setBackgroundFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Imposta il colore di sfondo fisso se la profondità di scorrimento supera i 1000px
      if (window.scrollY > 700) {
        setBackgroundFixed(true);
      } else {
        setBackgroundFixed(false);
      }
    };

    // Aggiungi l'event listener allo scroll
    window.addEventListener("scroll", handleScroll);

    // Rimuovi l'event listener al dismount del componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-full w-full colored-background">
      <div
        className={`hidden md:block px-5 z-10 fixed w-full py-5 ${
          backgroundFixed ? "bg-custom-brown-dark" : "bg-custom-brown-opacity"
        }`}>
        <NavBar current={"/"} />
      </div>
      <div className="block md:hidden z-10 fixed w-full bg-custom-brown-dark">
        <NavBarMobile current={"/"} />
      </div>

      <div className="flex flex-col justify-start items-center mb-8 md:w-full">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full mt-24 md:m-0 "
          src={videoCaccia}>
          Your browser does not support the video tag.
        </video>
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
