import React from "react";
import NavBar from "../components/NavBar";
import NavBarMobile from "../components/NavBarMobile";

const About = () => {
  return (
    <div className="h-full w-full colored-background">
      <div className={`hidden md:block px-5  w-full py-5`}>
        <NavBar current={"/about"} />
      </div>
      <div className="block md:hidden  w-full bg-custom-brown-dark">
        <NavBarMobile current={"/about"} />
      </div>
      <h1 className="text-4xl text-center m-5  text-white">La Nostra Storia</h1>
      <div className="flex flex-col items-center">
        <img
          src="../img/IMG_4397.png"
          alt="Logo"
          className="md:w-4/5 m-6 md:h-[500px] rounded"
        />
        <p className="text-center text-white m-10 text-xl w-4/5">
          Scoprite con noi il fascino esclusivo della ricerca al tartufo nelle
          migliori riserve delle <i>Langhe e del Monferrato.</i> <br />
          Offriamo esperienze di ricerca guidata del tartufo, dove i nostri cani
          esperti vi porteranno alla scoperta dei preziosi tartufi bianchi e
          neri, tesori nascosti della nostra terra. Unitevi a una delle nostre
          escursioni e immergetevi nella tradizione e nella natura, mentre vi
          guidiamo attraverso boschi incantati alla ricerca del rinomato oro
          <i> nero e bianco.</i> <br />
          Ogni ricerca si trasforma in un'avventura indimenticabile, ricca di
          emozioni e scoperte... <br />
          <br /> Siamo due ragazzi che amano la natura e i tartufi. Siamo
          cresciuti in campagna e abbiamo sempre avuto un debole per la natura e
          gli animali. Abbiamo iniziato a cercare tartufi con i nostri cani e
          abbiamo scoperto che era una passione che ci univa. Abbiamo deciso di
          creare un'attività per condividere questa passione con gli altri e per
          far conoscere il tartufo e la sua ricerca. Siamo entusiasti di farvi
          scoprire il mondo del tartufo e di farvi vivere un'esperienza
          indimenticabile.
        </p>
      </div>
    </div>
  );
};
export default About;
