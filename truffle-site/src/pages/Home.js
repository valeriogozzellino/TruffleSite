import React from "react";
import NavBar from "../components/NavBar";
import NavBarMobile from "../components/NavBarMobile";
import ImgCopertina from "../img/imgCopertina.jpg";
const Home = () => {
  return (
    <div className="h-full w-full colored-background">
      <NavBarMobile />
      <NavBar />
      <div className="flex flex-col justify-start items-center h-screen">
        <img src={ImgCopertina} alt="Logo" className="w-fit h-fit rounded" />
      </div>
    </div>
  );
};

export default Home;
