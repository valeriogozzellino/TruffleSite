import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useLanguage } from "../hook/LanguagesContext";
const Footer = () => {
  const { language } = useLanguage();

  return (
    <div className="w-full h-40 text-xs md:text-base colored-background flex flex-row justify-center items-center">
      <div id="sezAzienda" className="w-1/3 h-full flex flex-col items-center ">
        <h1 className="text-white text-xl py-2">
          {" "}
          <b>MiloTruffle</b>
        </h1>
        <p
          className={`overflow-auto h-30 text-white m-2 custom-scroll`}
          style={{ transition: "height 0.5s ease" }}>
          {language === "it"
            ? "Simone Gulino e Giulia Canton sono una coppia appassionata di tartufi. Insieme ai loro due fedeli cani, Milo e Stella, si dedicano alla ricerca di tartufi nelle rigogliose campagne italiane. Simone e Giulia non solo cercano tartufi per passione, ma offrono anche esperienze guidate, permettendo agli entusiasti di esplorare il mondo affascinante della tartuficoltura insieme a loro."
            : "Simone Gulino and Giulia Canton are a couple passionate about truffle hunting. Together with their two loyal dogs, Milo and Stella, they search for truffles in the lush Italian countryside. Simone and Giulia do not only hunt truffles out of passion, but they also offer guided experiences, allowing enthusiasts to delve into the fascinating world of truffle hunting alongside them."}
        </p>
      </div>
      <div
        id="sezLink"
        className="w-1/3 h-full flex flex-col justify-stretch items-center">
        <h1 className="text-white text-xl py-2  ">
          <b>{language === "it" ? "Link Utili" : "Useful Links"}</b>
        </h1>
        <motion.button
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.8 }}
          className="py-2">
          <a href="/about" className="text-white hover:underline py-2">
            <b>{language === "it" ? "La nostra storia" : "our story"}</b>
          </a>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.8 }}
          className="py-2">
          <a href="/contact" className="text-white hover:underline py-2">
            <b>{language === "it" ? "Contatti" : "Contact"}</b>
          </a>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.8 }}
          className="py-2">
          <a href="/shop" className="text-white hover:underline py-2">
            <b>{language === "it" ? "Negozio" : "Shop"}</b>
          </a>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.8 }}
          className="py-2">
          <a href="/book" className="text-white hover:underline py-2">
            <b>{language === "it" ? "Caccia al Tartufo" : "Truffle Hunting"}</b>
          </a>
        </motion.button>
      </div>
      <div id="sezContatti" className="w-1/3 h-full flex flex-col items-center">
        <p className="text-white text-xl py-2">
          <b>{language === "it" ? "Contattaci" : "Contact Us"}</b>
        </p>
        <motion.button
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.8 }}
          className="py-2">
          <a
            href="mailto:miloTruffle10@gmail.com"
            className="text-white text-xl">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.8 }}
          className="py-2">
          <a href="tel:+393333333333" className="text-white  text-xl">
            <FontAwesomeIcon icon={faPhone} />{" "}
            {/* {language === "it" ? "Telefono" : "Phone"} */}
          </a>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.8 }}
          className="py-2">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Via+Roma+1,+00000,+Italia"
            className="text-white text-xl"
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLocationDot} />
          </a>
        </motion.button>
      </div>
    </div>
  );
};
export default Footer;
