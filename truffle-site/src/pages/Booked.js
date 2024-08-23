import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import NavBarMobile from "../components/NavBarMobile";
import Footer from "../components/Footer";
import ContactBooked from "../components/ContactBooked";
import { useLanguage } from "../hook/LanguagesContext";
import { bookedContentIt, bookedContentEn } from "../utils/bookedContent";

const Booked = () => {
  const { language } = useLanguage();
  const [content, setContent] = useState(bookedContentIt);

  useEffect(() => {
    if (language === "it") {
      setContent(bookedContentIt);
    } else {
      setContent(bookedContentEn);
    }
  }, [language]);

  return (
    <div className="h-full w-full colored-background">
      <div>
        <NavBar current={"/booked"} />
      </div>
      <div className="block md:hidden  w-full bg-custom-brown-dark">
        <NavBarMobile current={"/booked"} />
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="text-center text-white text-4xl md:pt-24 m-10">
          {content.title}
        </h1>
        <img
          src="../img/img4.png"
          alt="truffle"
          className="h-[400px] md:h-[700px] w-4/5 mx-auto rounded-lg shadow-md"
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <h3 className="text-center text-white text-2xl m-5">
          {content.subtitle}
        </h3>
        <p className="text-center text-white text-xl mb-10 w-4/5">
          {content.description}
        </p>
        <ContactBooked />
        <h2 className="text-center text-white text-2xl m-5">
          {content.includedTitle}
        </h2>
        <ul className="text-white text-lg w-4/5 space-y-4 list-disc list-inside">
          {content.includedItems.map((item, index) => (
            <li key={index}>
              <span className="font-semibold">{item.title}</span>{" "}
              {item.description}
            </li>
          ))}
        </ul>
      </div>
      <div className="shadow-top mt-10 flex flex-col justify-center h-52">
        <Footer />
      </div>
    </div>
  );
};

export default Booked;
