import React from "react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { useLanguage } from "../context/LanguageContext";

const dogs = [
  { name: "Milo", src: "/img/milo.jpg" },
  { name: "Stella", src: "/img/stella2.jpg" },
];

const About = () => {
  const { t } = useLanguage();
  return (
    <>
      <PageHeader eyebrow={t.story.eyebrow} title={t.story.title} />
      <section className="container-x">
        <Reveal>
          <img src="/img/img1.jpg" alt={t.story.title} className="mx-auto aspect-[16/10] w-full max-w-5xl rounded-3xl object-cover object-[50%_35%] shadow-2xl" />
        </Reveal>
        <Reveal>
          <p className="mx-auto mt-12 max-w-3xl text-center text-lg leading-relaxed text-muted md:text-xl">{t.story.full}</p>
        </Reveal>

        <div className="mt-24">
          <Reveal>
            <h2 className="section-title text-center">{t.story.dogs}</h2>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
            {dogs.map((d, i) => (
              <Reveal key={d.name} delay={i * 0.1}>
                <figure className="card group overflow-hidden">
                  <img src={d.src} alt={d.name} loading="lazy" className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105" />
                  <figcaption className="py-5 text-center font-display text-3xl font-semibold tracking-wide">{d.name}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
