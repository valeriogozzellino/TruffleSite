import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "../data/translations";

const LanguageContext = createContext(null);

const readStoredLanguage = () => {
  try {
    const saved = localStorage.getItem("language");
    return saved === "en" || saved === "it" ? saved : "it";
  } catch {
    return "it";
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(readStoredLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      localStorage.setItem("language", language);
    } catch {
      /* storage non disponibile: ignora */
    }
  }, [language]);

  const toggleLanguage = useCallback(
    () => setLanguage((prev) => (prev === "it" ? "en" : "it")),
    []
  );

  const value = useMemo(
    () => ({ language, toggleLanguage, t: translations[language] }),
    [language, toggleLanguage]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
};
