import React from "react";
import NavBar from "../components/NavBar";
import NavBarMobile from "../components/NavBarMobile";
import videoCaccia from "../video/cacciaTartufo.mp4";
import Content from "../components/Content";
import ContentMobile from "../components/ContentMobile";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { useLanguage } from "../hook/LanguagesContext";
const Home = () => {
  const { language } = useLanguage();
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false, // Disabilita le frecce di navigazione
  };

  return (
    <div className="h-full w-full colored-background">
      <div>
        <NavBar current={"/"} />
      </div>
      <div className="block md:hidden z-10 fixed w-full bg-custom-brown-dark">
        <NavBarMobile current={"/"} />
      </div>

      <Slider {...settings} className="pt-28 md:pt-0 mb-7">
        <div>
          <video autoPlay loop muted className="w-full h-[400px] md:h-screen">
            <source src={videoCaccia} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <img
            src="../img/tartufiVENDITA.png"
            alt="immagine prova"
            className="w-full  h-[400px] md:h-screen"
          />
        </div>
        <div>
          <img
            src="../img/IMG_4397.png"
            alt="immagine prova"
            className="w-full h-[400px] md:h-screen"
          />
        </div>
        <div>
          <img
            src="../img/IMG_4881.jpg"
            alt="immagine prova"
            className="w-full h-[400px] md:h-screen"
          />
        </div>
      </Slider>

      <div className="hidden md:block">
        <Content />
      </div>
      <div className="block md:hidden">
        <ContentMobile />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} // Animazione solo la prima volta che entra in vista
        className=" py-10">
        <h1 className="text-white text-4xl text-center py-4">
          {" "}
          {language === "it" ? "CONTATTACI" : "CONTACT US"}
        </h1>
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
