import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Reveal from "../components/Reveal";
import TruffleGrid from "../components/TruffleGrid";
import ContactLinks from "../components/ContactLinks";
import ContactForm from "../components/ContactForm";
import { useLanguage } from "../context/LanguageContext";

const Home = () => {
  const { t } = useLanguage();

  return (
    <>
      <Hero />

      <section className="container-x -mt-10 relative z-10">
        <Reveal>
          <div className="card grid divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {t.highlights.map((h) => (
              <div key={h.label} className="px-6 py-8 text-center">
                <p className="font-display text-4xl font-semibold text-gold">{h.value}</p>
                <p className="mt-1 text-sm text-muted">{h.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="container-x grid items-center gap-12 py-24 md:grid-cols-2 md:gap-16 md:py-32">
        <Reveal>
          <div className="relative">
            <img src="/img/img4.jpg" alt={t.experience.title} loading="lazy" className="aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl" />
            <div className="pointer-events-none absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl border border-gold/30" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="eyebrow mb-4">{t.experience.eyebrow}</p>
          <h2 className="section-title">{t.experience.title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">{t.experience.text}</p>
          <Link to="/booked" className="btn-primary mt-8">{t.experience.cta}</Link>
        </Reveal>
      </section>

      <section className="bg-surface py-24 md:py-28">
        <div className="container-x">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <p className="eyebrow mb-4">{t.shop.eyebrow}</p>
            <h2 className="section-title">{t.shop.title}</h2>
            <p className="mt-5 text-lg text-muted">{t.shop.text}</p>
          </Reveal>
          <TruffleGrid />
        </div>
      </section>

      <section className="container-x grid items-center gap-12 py-24 md:grid-cols-2 md:gap-16 md:py-32">
        <Reveal className="md:order-2">
          <div className="relative">
            <img src="/img/img3.jpg" alt={t.story.title} loading="lazy" className="aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl" />
            <div className="pointer-events-none absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-3xl border border-gold/30" />
          </div>
        </Reveal>
        <Reveal delay={0.1} className="md:order-1">
          <p className="eyebrow mb-4">{t.story.eyebrow}</p>
          <h2 className="section-title">{t.story.title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">{t.story.text}</p>
          <Link to="/about" className="btn-ghost mt-8">{t.story.cta}</Link>
        </Reveal>
      </section>

      <section className="container-x pb-8">
        <Reveal className="mx-auto mb-10 max-w-2xl text-center">
          <p className="eyebrow mb-4">{t.contact.eyebrow}</p>
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="mt-5 text-lg text-muted">{t.contact.text}</p>
        </Reveal>
        <Reveal>
          <ContactLinks />
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
};

export default Home;
