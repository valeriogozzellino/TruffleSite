import React from "react";
import Reveal from "./Reveal";

const PageHeader = ({ eyebrow, title, text }) => (
  <header className="container-x pb-10 pt-36 text-center md:pt-44">
    <Reveal>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h1 className="section-title mx-auto max-w-3xl">{title}</h1>
      {text && <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">{text}</p>}
    </Reveal>
  </header>
);

export default PageHeader;
