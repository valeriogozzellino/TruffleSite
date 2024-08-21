import React from "react";
import { motion } from "framer-motion";
import { contentData } from "../utils/contentData";
import { englishContent } from "../utils/contentDataEn";
import WindowShop from "./WindowShop";
import { useLanguage } from "../hook/LanguagesContext";
import { useEffect, useState } from "react";
const Content = () => {
  const { language } = useLanguage();
  const [languageData, setLanguageData] = useState(contentData);
  useEffect(() => {
    if (language === "it") {
      setLanguageData(contentData);
    } else {
      setLanguageData(englishContent);
    }
  }, [language]);

  const handleRedirect = (rootDest) => {
    window.location.href = rootDest;
  };

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
    <div className="h-full w-full bg-custom-brown-dark">
      {languageData.map((section, index) => (
        <motion.div
          key={index}
          className="px-10 py-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          custom={index}
          viewport={{ once: true }} // Animazione solo la prima volta che entra in vista
        >
          <h1 className="text-4xl text-center mb-5 text-white">
            {section.title}
          </h1>
          <div className="flex h-[500px] flex-row ">
            {section.imgPosition === "left" && (
              <div className="md:w-1/2">
                <img
                  src={section.imgSrc}
                  alt={section.title}
                  className="w-full h-full rounded"
                />
              </div>
            )}
            <div className="w-1/2 flex flex-col justify-start items-center mt-5">
              <p className="text-center text-white text-xl w-4/5">
                {section.text}
              </p>
              <button
                className="colored-background-light hover:bg-white hover:text-black text-white font-bold py-2 px-4 mt-5 rounded"
                onClick={() => handleRedirect(section.root)}>
                {section.buttonText}
              </button>
            </div>
            {section.imgPosition === "right" && (
              <div className="md:w-1/2">
                <img
                  src={section.imgSrc}
                  alt={section.title}
                  className="w-full h-full rounded"
                />
              </div>
            )}
          </div>
          <div className="w-4/5 h-[1px] bg-black mt-8 ml-32"></div>
        </motion.div>
      ))}
      <h1 className="text-4xl text-center mb-5 mt-10 text-white">
        {language === "it" ? "I NOSTRI PRODOTTI" : "OUR PRODUCTS "}
      </h1>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} // Animazione solo la prima volta che entra in vista
        className="bkImageShop">
        <WindowShop />
      </motion.div>
    </div>
  );
};

export default Content;
