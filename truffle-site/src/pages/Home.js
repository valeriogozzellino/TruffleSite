import React from "react";
import NavBar from "../components/NavBar";
import NavBarMobile from "../components/NavBarMobile";
import videoCaccia from "../video/cacciaTartufo.mp4";
import Content from "../components/Content";
import ContentMobile from "../components/ContentMobile";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { motion } from "framer-motion";

const Home = () => {
  // Opzioni per l'animazione
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3, // Incrementa il ritardo per ogni elemento
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="h-full w-full colored-background">
      <div>
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
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} // Animazione solo la prima volta che entra in vista
      >
        <div className="flex flex-row justify-center">
          <Contact />
        </div>
      </motion.div>
      <div className="shadow-top mt-10 flex flex-col justify-center h-52">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
