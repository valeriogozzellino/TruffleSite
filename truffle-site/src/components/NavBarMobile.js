import React, { useState } from "react";
import Logo from "../img/logoTruffle2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

const NavBarMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full sm:hidden h-24 flex flex-row justify-between items-center text-white">
      <div className="m-5 h-fit w-20">
        <img src={Logo} alt="Logo" className="" />
      </div>
      <div className="mr-5">
        <button
          className="m-5 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu">
          <FontAwesomeIcon
            icon={isMenuOpen ? faX : faBars}
            className={`h-5 w-5 transition-transform duration-300 ${
              isMenuOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 w-64 h-full bg-[rgba(122,94,75,1)] z-20 p-5 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <div className="mt-9 w-full flex justify-end items-end">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}>
            <FontAwesomeIcon
              icon={faX}
              className={`h-5 w-5 transition-transform duration-300 ${
                isMenuOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
        </div>
        <div className="w-full mt-8">
          <ul className="space-y-4">
            <li>
              <a href="#" className="text-white hover:underline">
                Link 1
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:underline">
                Link 2
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:underline">
                Link 3
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:underline">
                Link 4
              </a>
            </li>
          </ul>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={toggleMenu}></div>
      )}
    </nav>
  );
};

export default NavBarMobile;
