import React, { useEffect, useState } from "react";
import { contentData } from "../utils/contentData";
import CarouselShop from "./CarouselShop";
import { motion } from "framer-motion";
import { useLanguage } from "../hook/LanguagesContext";
import { englishContent } from "../utils/contentDataEn";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1, // Incrementa il ritardo per ogni elemento
      duration: 0.5,
    },
  }),
};

const Section = ({ title, imgSrc, text, buttonText, onButtonClick, index }) => {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <motion.div
      className="flex flex-col px-10"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      custom={index}
      viewport={{ once: true }}>
      <h1 className="text-2xl text-center mb-5 text-white">
        <b>{title}</b>
      </h1>
      <div className="md:w-4/5">
        <img src={imgSrc} alt="Logo" className="w-full h-[300px] rounded" />
      </div>
      <div className="flex flex-col justify-start items-center mt-5">
        <p
          className={`text-center text-white text-xl w-4/5 ${
            showMore ? "" : "line-clamp-4"
          }`}>
          {text}
        </p>
        <button className="text-white underline mt-2" onClick={toggleShowMore}>
          <i>{showMore ? "Mostra meno" : "Scopri di più"}</i>
        </button>
        <button
          className="shadow-md colored-background-light hover:bg-white hover:text-black text-white font-bold py-2 px-4 mt-5 rounded"
          onClick={onButtonClick}>
          {buttonText}
        </button>
      </div>
    </motion.div>
  );
};

const ContentMobile = () => {
  const { language } = useLanguage();
  const [element, setElement] = useState(contentData);
  const handleRedirect = (root) => {
    window.location.href = root;
  };
  useEffect(() => {
    if (language === "it") {
      setElement(contentData);
    } else {
      setElement(englishContent);
    }
  }, [language]);
  return (
    <div className="h-full w-full colored-background">
      {element.map((section, index) => (
        <div className="py-10" key={index}>
          <Section
            index={index}
            title={section.title}
            imgSrc={section.imgSrc}
            text={section.text}
            buttonText={section.buttonText}
            onButtonClick={() => handleRedirect(section.root)}
          />
        </div>
      ))}
      <h1 className="text-2xl text-center mt-5 text-white">
        <b>I NOSTRI PRODOTTI</b>
      </h1>
      <CarouselShop />
    </div>
  );
};

export default ContentMobile;
