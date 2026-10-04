import React from "react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import BookingForm from "../components/BookingForm";
import { useLanguage } from "../context/LanguageContext";

const icons = ["🐕", "🍷", "📸"];

const Booked = () => {
  const { t } = useLanguage();
  const b = t.booked;
  return (
    <>
      <PageHeader eyebrow={b.eyebrow} title={b.title} text={b.subtitle} />
      <section className="container-x">
        <Reveal>
          <img src="/img/img4.jpg" alt={b.title} className="mx-auto aspect-[16/10] w-full max-w-5xl rounded-3xl object-cover object-[50%_40%] shadow-2xl" />
        </Reveal>
        <Reveal>
          <p className="mx-auto mt-12 max-w-3xl text-center text-lg leading-relaxed text-muted md:text-xl">{b.description}</p>
        </Reveal>

        <div className="mt-20">
          <Reveal>
            <h2 className="section-title text-center">{b.includedTitle}</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {b.included.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1} className="h-full">
                <div className="card h-full p-8 transition hover:border-gold/40">
                  <span className="text-3xl" aria-hidden="true">{icons[i]}</span>
                  <h3 className="mt-4 font-display text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <Reveal>
            <BookingForm />
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Booked;
