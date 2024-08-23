import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../hook/LanguagesContext";
const Footer = () => {
  const { language } = useLanguage();

  return (
    <div className="w-full h-20 text-xs md:text-base colored-background flex flex-row justify-center items-center">
      <div id="sezAzienda" className="w-1/3  flex flex-col items-center">
        <h1 className="text-white">
          {" "}
          <b>MiloTruffle</b>
        </h1>
        <p
          className={`overflow-auto h-20 text-white m-2 custom-scroll`}
          style={{ transition: "height 0.5s ease" }}>
          {language === "it"
            ? "Simone Gulino e Giulia Canton sono una coppia appassionata di tartufi. Insieme ai loro due fedeli cani, Milo e Mia, si dedicano alla ricerca di tartufi nelle rigogliose campagne italiane. Simone e Giulia non solo cercano tartufi per passione, ma offrono anche esperienze guidate, permettendo agli entusiasti di esplorare il mondo affascinante della tartuficoltura insieme a loro."
            : "Simone Gulino and Giulia Canton are a couple passionate about truffle hunting. Together with their two loyal dogs, Milo and Mia, they search for truffles in the lush Italian countryside. Simone and Giulia do not only hunt truffles out of passion, but they also offer guided experiences, allowing enthusiasts to delve into the fascinating world of truffle hunting alongside them."}
        </p>
      </div>
      <div
        id="sezLink"
        className="w-1/3 flex flex-col justify-center items-center">
        <h1 className="text-white ">
          <b>Link Utili</b>
        </h1>
        <a href="/about" className="text-white hover:underline">
          {language === "it" ? "La nostra storia" : "our story"}
        </a>
        <a href="/contact" className="text-white hover:underline">
          {language === "it" ? "Contatti" : "Contact"}
        </a>
        <a href="/shop" className="text-white hover:underline">
          {language === "it" ? "Negozio" : "Shop"}
        </a>
        <a href="/book" className="text-white hover:underline">
          {language === "it" ? "Caccia al Tartufo" : "Truffle Hunting"}
        </a>
      </div>
      <div id="sezContatti" className="w-1/3 flex flex-col items-center">
        <p className="text-white m-3">
          <b>{language === "it" ? "Contattaci" : "Contact Us"}</b>
        </p>
        <a href="mailto:miloTruffle10@gmail.com" className="text-white">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="tel:+393333333333" className="text-white">
          <FontAwesomeIcon icon={faPhone} />{" "}
          {/* {language === "it" ? "Telefono" : "Phone"} */}
        </a>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Via+Roma+1,+00000,+Italia"
          className="text-white"
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLocationDot} />
        </a>
      </div>
    </div>
  );
};
export default Footer;
