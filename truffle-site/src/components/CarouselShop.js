import React from "react";
import Slider from "react-slick";
import { dataTruffle } from "../utils/dataTruffle";
import { useState } from "react";
import ManageQuantity from "../atoms/ManageQuantity";

const CarouselShop = () => {
  const [showMore, setShowMore] = React.useState(false);
  const elements = dataTruffle;

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  const [quantityVisible, setQuantityVisible] = useState(false);
  const [quantity, setQuantity] = useState(10);

  const openQuantity = () => {
    setQuantityVisible(!quantityVisible); // Toggle visibility state
    console.log("Open quantity");
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
    <div className="flex flex-col items-center py-8 mb-5">
      <Slider {...settings} className="w-2/3">
        {elements.map((element, index) => (
          <div
            key={index}
            className="flex text-white flex-col items-center mb-5 px-3">
            <div className="h-[100px]">
              <h3 className="text-xl text-center py-3">{element.title}</h3>
            </div>
            <img src={element.imgUrl} alt="truffle" className="h-[200px]" />
            <p className={`${showMore ? "" : "line-clamp-2"}`}>
              {element.description}
            </p>
            <div className="flex flex-col w-full justify-center items-center">
              <button
                className="text-white underline mt-2"
                onClick={toggleShowMore}>
                {showMore ? "Mostra meno" : "Scopri di più"}
              </button>
              {!quantityVisible && (
                <button
                  onClick={openQuantity}
                  className="colored-background-light hover:bg-white hover:text-black text-white font-bold py-2 px-4 mt-5 w-4/5 rounded shadow-xl">
                  ACQUISTA
                </button>
              )}
              {quantityVisible && (
                <ManageQuantity
                  quantity={quantity}
                  setQuantity={setQuantity}
                  setQuantityVisible={setQuantityVisible}
                />
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselShop;
