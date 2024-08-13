import React from "react";
import Slider from "react-slick";
import Img from "../img/truffleElement.png";
import { dataTruffle } from "../utils/dataTruffle";

const CarouselShop = () => {
  const [showMore, setShowMore] = React.useState(false);
  const elements = dataTruffle;

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col items-center py-14">
      <Slider {...settings} className="w-2/3">
        {elements.map((element, index) => (
          <div
            key={index}
            className="flex text-white flex-col items-center m-5 px-5">
            <h3 className="text-xl py-3">{element.title}</h3>
            <img src={Img} alt="truffle" />
            <p className={`${showMore ? "" : "line-clamp-2"}`}>
              {element.description}
            </p>
            <div className="flex flex-col justify-center">
              <button
                className="text-white underline mt-2"
                onClick={toggleShowMore}>
                {showMore ? "Mostra meno" : "Scopri di più"}
              </button>
              <button className="colored-background-light hover:bg-white hover:text-black text-white font-bold py-2 px-4 mt-5 rounded">
                ACQUISTA
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselShop;
