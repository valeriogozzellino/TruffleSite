import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const slides = ["/img/img1.jpg", "/img/img2.jpg", "/img/img5.jpg", "/img/img7.jpg"];

const Hero = () => {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={slides[index]}
          src={slides[index]}
          alt=""
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.4 }, scale: { duration: 8, ease: "linear" } }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/60 to-ink/20" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />

      <div className="container-x relative z-10 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl">
          <p className="eyebrow mb-5">{t.hero.eyebrow}</p>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] text-cream sm:text-6xl md:text-7xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80">{t.hero.text}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/booked" className="btn-primary">
              {t.hero.ctaPrimary}
            </Link>
            <Link to="/shop" className="btn-ghost">
              {t.hero.ctaSecondary}
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((s, i) => (
          <button
            key={s}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index ? "w-8 bg-gold" : "w-3 bg-cream/40 hover:bg-cream/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
