import React, { useState } from "react";
import { contentData } from "../utils/contentData";
import CarouselShop from "./CarouselShop";

const Section = ({ title, imgSrc, text, buttonText, onButtonClick }) => {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <div className="flex flex-col px-10">
      <h1 className="text-2xl text-center mb-5 text-white">{title}</h1>
      <div className="md:w-1/2">
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
          {showMore ? "Mostra meno" : "Scopri di più"}
        </button>
        <button
          className="colored-background-light hover:bg-white hover:text-black text-white font-bold py-2 px-4 mt-5 rounded"
          onClick={onButtonClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

const ContentMobile = () => {
  const handleRedirect = () => {
    window.location.href = "/about";
  };

  return (
    <div className="h-full w-full colored-background">
      {contentData.map((section, index) => (
        <div className="px-7 py-10" key={index}>
          <Section
            title={section.title}
            imgSrc={section.imgSrc}
            text={section.text}
            buttonText={section.buttonText}
            onButtonClick={handleRedirect}
          />
        </div>
      ))}
      <CarouselShop />
    </div>
  );
};

export default ContentMobile;
