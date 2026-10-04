import React from "react";
import PageHeader from "../components/PageHeader";
import TruffleGrid from "../components/TruffleGrid";
import { useLanguage } from "../context/LanguageContext";

const Shop = () => {
  const { t } = useLanguage();
  return (
    <>
      <PageHeader eyebrow={t.shop.eyebrow} title={t.shop.pageTitle} text={t.shop.text} />
      <section className="container-x">
        <TruffleGrid />
      </section>
    </>
  );
};

export default Shop;
