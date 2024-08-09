import React from "react";
import Img1 from "../img/IMG_4881.png";
import Img2 from "../img/tartufiVENDITA.png";
import WindowShop from "./WindowShop";
const Content = () => {
  const handleRedirect = ({ params }) => {
    window.location.href = "/about";
  };

  return (
    <div className="h-full w-full colored-background">
      <div className="px-10 py-10">
        <h1 className="text-4xl text-center mb-5 text-white">
          ESPERIENZA GUIDATA DI CACCIA AL TARTUFATO
        </h1>
        <div className="flex h-[600px] flex-row ">
          <div className="md:w-1/2">
            <img src={Img1} alt="Logo" className="w-full h-full rounded" />
          </div>
          <div className="w-1/2 flex flex-col justify-start items-center mt-5 ">
            <p className="text-center text-white w-4/5">
              Scoprite con noi il fascino esclusivo della ricerca al tartufo
              nelle migliori riserve delle Langhe e del Monferrato. Offriamo
              esperienze di ricerca guidata del tartufo, dove i nostri cani
              esperti vi porteranno alla scoperta dei preziosi tartufi bianchi e
              neri, tesori nascosti della nostra terra. Unitevi a una delle
              nostre escursioni e immergetevi nella tradizione e nella natura,
              mentre vi guidiamo attraverso boschi incantati alla ricerca del
              rinomato oro nero e bianco. Ogni ricerca si trasforma in
              un'avventura indimenticabile, ricca di emozioni e scoperte...
            </p>
            <button
              className="colored-background-light hover:bg-white hover:text-black text-white font-bold py-2 px-4 mt-5 rounded"
              onClick={handleRedirect}>
              PRENOTA
            </button>
          </div>
        </div>
      </div>
      <div className="px-10 py-10">
        <h1 className="text-4xl text-center mb-5 text-white">
          VENDITA DI TARTUFI
        </h1>
        <div className="flex h-[600px] flex-row ">
          <div className="w-1/2 flex flex-col justify-start items-center mt-5 ">
            <p className="text-center text-white w-4/5">
              Per gli intenditori e gli appassionati, offriamo anche una
              selezione di tartufi al dettaglio, disponibili per l'acquisto
              diretto. Ogni tartufo è selezionato con cura per garantire qualità
              e freschezza, portando direttamente sulla vostra tavola
              l'eccellenza del territorio. Esplora, Scopri, Assapora -
              L'esperienza del Tartufo ti aspetta!
            </p>
            <button
              className="colored-background-light hover:bg-white hover:text-black text-white font-bold py-2 px-4 mt-5 rounded"
              onClick={handleRedirect}>
              ACQUISTA
            </button>
          </div>
          <div className="md:w-1/2">
            <img src={Img2} alt="Logo" className="w-full h-full rounded" />
          </div>
        </div>
      </div>
      <WindowShop />
      <div className="px-10 py-10">
        <h1 className="text-4xl text-center mb-5 text-white">
          ESPERIENZE DI RICERCA GUIDATA
        </h1>
        <div className="flex h-[600px] flex-row ">
          <div className="md:w-1/2">
            <img src={Img1} alt="Logo" className="w-full h-full rounded" />
          </div>
          <div className="w-1/2 flex flex-col justify-start items-center mt-5 ">
            <p className="text-center text-white w-4/5">
              Scoprite con noi il fascino esclusivo della ricerca al tartufo
              nelle migliori riserve delle Langhe e del Monferrato. Offriamo
              esperienze di ricerca guidata del tartufo, dove i nostri cani
              esperti vi porteranno alla scoperta dei preziosi tartufi bianchi e
              neri, tesori nascosti della nostra terra. Unitevi a una delle
              nostre escursioni e immergetevi nella tradizione e nella natura,
              mentre vi guidiamo attraverso boschi incantati alla ricerca del
              rinomato oro nero e bianco. Ogni ricerca si trasforma in
              un'avventura indimenticabile, ricca di emozioni e scoperte...
            </p>
            <button
              className="colored-background-light hover:bg-white hover:text-black text-white font-bold py-2 px-4 mt-5 rounded"
              onClick={handleRedirect}>
              Scopri di più
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
