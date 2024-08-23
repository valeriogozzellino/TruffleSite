import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import NavBarMobile from "../components/NavBarMobile";
import Footer from "../components/Footer";
import { useLanguage } from "../hook/LanguagesContext";
import { about } from "../utils/about";

const About = () => {
  const { language } = useLanguage();
  const [languageData, setLanguageData] = useState(about[0]);

  useEffect(() => {
    if (language === "it") {
      setLanguageData(about[0]);
    } else {
      setLanguageData(about[1]);
    }
  }, [language]);

  return (
    <div className="h-full w-full colored-background">
      <div>
        <NavBar current={"/about"} />
      </div>
      <div className="block md:hidden w-full bg-custom-brown-dark">
        <NavBarMobile current={"/about"} />
      </div>
      <h1 className="text-4xl text-center pt-5 md:pt-36 text-white">
        {languageData.title}
      </h1>
      <div className="flex flex-col items-center">
        <img
          src="../img/img1.png"
          alt="Logo"
          className="md:w-4/5 m-6 md:h-[700px] rounded"
        />
        <p
          className="text-center text-white m-9 text-xl w-4/5"
          dangerouslySetInnerHTML={{ __html: languageData.text }}
        />
        <div className="flex flex-col items-center">
          <h2 className="text-2xl text-center text-white m-10">
            {languageData.subtitle}
          </h2>
          <h2 className="text-white text-2xl font-semibold m-5">
            {language === "it" ? "I NOSTRI CANI" : "OUR DOGS"}
          </h2>
          <div className="flex text-white text-center flex-row justify-between items-center">
            <div>
              <h3 className="">MILO</h3>
              <img
                src="../img/milo.png"
                alt="Logo"
                className="md:w-[300px] m-6 md:h-[300px] rounded"
              />
            </div>
            <div>
              <h3 className="text-center">STELLA</h3>
              <img
                src="../img/stella.png"
                alt="Logo"
                className="md:w-[300px] m-6 md:h-[300px]  rounded"
              />
            </div>
          </div>
        </div>
        <div className="shadow-top mt-10 w-full flex flex-col justify-center h-52">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default About;
