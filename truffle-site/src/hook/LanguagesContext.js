import React, { createContext, useState, useContext, useEffect } from "react";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("it");

  // Carica la lingua dal localStorage al primo rendering
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => {
      const newLanguage = prevLanguage === "it" ? "en" : "it";
      localStorage.setItem("language", newLanguage); // Salva la nuova lingua nel localStorage
      return newLanguage;
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
