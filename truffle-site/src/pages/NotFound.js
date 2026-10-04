import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const NotFound = () => {
  const { t } = useLanguage();
  return (
    <section className="container-x flex min-h-[70vh] flex-col items-center justify-center pt-28 text-center">
      <p className="font-display text-8xl font-semibold text-gold">404</p>
      <h1 className="section-title mt-4">{t.notFound.title}</h1>
      <p className="mt-4 max-w-md text-muted">{t.notFound.text}</p>
      <Link to="/" className="btn-primary mt-8">{t.notFound.cta}</Link>
    </section>
  );
};

export default NotFound;
