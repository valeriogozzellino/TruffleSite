import React from "react";
import NavBar from "../components/NavBar";
import NavBarMobile from "../components/NavBarMobile";
import Footer from "../components/Footer";
import Img1 from "../img/valletartufo.png";
import ContactBooked from "../components/ContactBooked";
const Booked = () => {
  return (
    <div className="h-full w-full colored-background">
      <div>
        <NavBar current={"/booked"} />
      </div>
      <div className="block md:hidden  w-full bg-custom-brown-dark">
        <NavBarMobile current={"/booked"} />
      </div>
      <div className=" flex flex-col justify-center">
        <h1 className="text-center text-white text-4xl md:pt-24 m-10">
          Prenota la Tua Esperienza di Ricerca al Tartufo
        </h1>
        <img
          src="../img/SfondoCacciaTartufo.png"
          alt="truffle"
          className="h-[400px] md:h-[600px] w-4/5 mx-auto rounded-lg shadow-md"
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <h3 className="text-center text-white text-2xl m-5">
          Vivi un'avventura unica nel cuore delle Langhe e del Monferrato
        </h3>
        <p className="text-center text-white text-xl mb-10 w-4/5">
          Unisciti a noi per una esperienza indimenticabile nella ricerca del
          tartufo, un'avventura che ti porterà a esplorare i segreti di antiche
          foreste e a scoprire le tecniche tradizionali di raccolta. Le nostre
          esperienze guidate sono disegnate per appassionati di tutte le età e
          livelli di esperienza, garantendo un momento piacevole e educativo per
          tutti.
        </p>
        <ContactBooked />
        <h2 className="text-center text-white text-2xl m-5">Cosa è Incluso?</h2>
        <ul className="text-white text-lg w-4/5 space-y-4 list-disc list-inside">
          <li>
            <span className="font-semibold">
              Guida Esperta e Cane Trifolau:
            </span>{" "}
            La tua guida sarà un esperto cercatore locale, accompagnato da un
            cane addestrato nella ricerca dei tartufi.
          </li>
          <li>
            <span className="font-semibold">Attrezzatura di Ricerca:</span>{" "}
            Tutta l'attrezzatura necessaria per la ricerca dei tartufi sarà
            fornita.
          </li>
          <li>
            <span className="font-semibold">Assaggio di Tartufo:</span> Al
            termine dell'escursione, potrai gustare un assaggio di tartufo
            fresco, accompagnato da un bicchiere di vino locale.
          </li>
          <li>
            <span className="font-semibold">Fotografie dell'Esperienza:</span>{" "}
            Immortaliamo i momenti salienti della tua avventura per ricordi che
            dureranno una vita.
          </li>
        </ul>
      </div>
      <div className="shadow-top mt-10 flex flex-col justify-center h-52">
        <Footer />
      </div>
    </div>
  );
};
export default Booked;
