import React from "react";
import Img1 from "../img/IMG_4881.png";

const ContentMobile = () => {
  return (
    <div className="h-full w-full colored-background">
      <div className="flex flex-col px-10">
        <div className="md:w-1/2 ">
          <img src={Img1} alt="Logo" className="w-fit h-fit rounded" />
        </div>
        <div className=" ">
          <h1 className="text-4xl text-center">Benvenuto su Truffle</h1>
          <p className="text-center">
            Truffle è un sito web che permette di gestire le tue ricette
            preferite, condividerle con gli altri utenti e scoprire nuove
            ricette. Registrati per iniziare a creare la tua collezione di
            ricette.
          </p>
        </div>
      </div>
      <div className="flex  flex-col px-10 py-10">
        <div className="">
          <img src={Img1} alt="Logo" className="w-fit h-fit rounded" />
        </div>
        <div className=" ">
          <h1 className="text-4xl text-center">Benvenuto su Truffle</h1>
          <p className="text-center">
            Truffle è un sito web che permette di gestire le tue ricette
            preferite, condividerle con gli altri utenti e scoprire nuove
            ricette. Registrati per iniziare a creare la tua collezione di
            ricette.
          </p>
        </div>
      </div>
      <div className="flex flex-col px-10 py-10">
        <div className="w-1/2">
          <img src={Img1} alt="Logo" className="w-fit h-fit rounded" />
        </div>
        <div className="w-1/2 ">
          <h1 className="text-4xl text-center">Benvenuto su Truffle</h1>
          <p className="text-center">
            Truffle è un sito web che permette di gestire le tue ricette
            preferite, condividerle con gli altri utenti e scoprire nuove
            ricette. Registrati per iniziare a creare la tua collezione di
            ricette.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentMobile;
