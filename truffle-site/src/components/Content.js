import React from "react";
import { contentData } from "../utils/contentData";
import WindowShop from "./WindowShop";

const Content = () => {
  const handleRedirect = (rootDest) => {
    window.location.href = rootDest;
  };

  return (
    <div className="h-full w-full colored-background">
      {contentData.map((section, index) => (
        <div key={index} className="px-10 py-10">
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
        </div>
      ))}
      <h1 className="text-4xl text-center mb-5 mt-10 text-white">
        I NOSTRI PRODOTTI
      </h1>
      <WindowShop />
    </div>
  );
};

export default Content;
