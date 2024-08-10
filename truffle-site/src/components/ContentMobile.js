import React, { useState } from "react";
import Img1 from "../img/IMG_4881.png";
import Img2 from "../img/tartufiVENDITA.png";
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
      <div className="px-7 py-10">
        <Section
          title="ESPERIENZA GUIDATA DI CACCIA AL TARTUFATO"
          imgSrc={Img1}
          text="Scoprite con noi il fascino esclusivo della ricerca al tartufo nelle migliori riserve delle Langhe e del Monferrato. Offriamo esperienze di ricerca guidata del tartufo, dove i nostri cani esperti vi porteranno alla scoperta dei preziosi tartufi bianchi e neri, tesori nascosti della nostra terra. Unitevi a una delle nostre escursioni e immergetevi nella tradizione e nella natura, mentre vi guidiamo attraverso boschi incantati alla ricerca del rinomato oro nero e bianco. Ogni ricerca si trasforma in un'avventura indimenticabile, ricca di emozioni e scoperte..."
          buttonText="PRENOTA"
          onButtonClick={handleRedirect}
        />
      </div>
      <div className="px-7 py-10">
        <Section
          title="VENDITA DI TARTUFI"
          imgSrc={Img2}
          text="Per gli intenditori e gli appassionati, offriamo anche una selezione di tartufi al dettaglio, disponibili per l'acquisto diretto. Ogni tartufo è selezionato con cura per garantire qualità e freschezza, portando direttamente sulla vostra tavola l'eccellenza del territorio. Esplora, Scopri, Assapora - L'esperienza del Tartufo ti aspetta!"
          buttonText="ACQUISTA"
          onButtonClick={handleRedirect}
        />
      </div>
      <CarouselShop />
      <div className="px-7 py-10">
        <Section
          title="ESPERIENZA GUIDATA DI CACCIA AL TARTUFATO"
          imgSrc={Img1}
          text="Scoprite con noi il fascino esclusivo della ricerca al tartufo nelle migliori riserve delle Langhe e del Monferrato. Offriamo esperienze di ricerca guidata del tartufo, dove i nostri cani esperti vi porteranno alla scoperta dei preziosi tartufi bianchi e neri, tesori nascosti della nostra terra. Unitevi a una delle nostre escursioni e immergetevi nella tradizione e nella natura, mentre vi guidiamo attraverso boschi incantati alla ricerca del rinomato oro nero e bianco. Ogni ricerca si trasforma in un'avventura indimenticabile, ricca di emozioni e scoperte..."
          buttonText="PRENOTA"
          onButtonClick={handleRedirect}
        />
      </div>
    </div>
  );
};

export default ContentMobile;
