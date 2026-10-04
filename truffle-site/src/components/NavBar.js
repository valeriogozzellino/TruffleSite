import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../context/LanguageContext";

const NavBar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { to: "/booked", label: t.nav.hunt },
    { to: "/shop", label: t.nav.shop },
    { to: "/about", label: t.nav.about },
    { to: "/contact", label: t.nav.contact },
  ];

  const linkClass = ({ isActive }) =>
    `relative text-sm font-medium uppercase tracking-widest transition-colors hover:text-gold ${
      isActive ? "text-gold" : "text-cream/85"
    }`;

  const LangButton = () => (
    <button
      onClick={toggleLanguage}
      aria-label={language === "it" ? "Switch to English" : "Passa all'italiano"}
      className="rounded-full border border-cream/25 px-3 py-1.5 text-xs font-semibold tracking-widest text-cream transition hover:border-gold hover:text-gold">
      <span className={language === "it" ? "text-gold" : "opacity-60"}>IT</span>
      <span className="mx-1 opacity-40">/</span>
      <span className={language === "en" ? "text-gold" : "opacity-60"}>EN</span>
    </button>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-line bg-ink/80 py-2 backdrop-blur-xl"
          : "bg-gradient-to-b from-ink/70 to-transparent py-4"
      }`}>
      <div className="container-x flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label="Milo's Truffle">
          <img src="/img/logoTruffle2.png" alt="" className="h-12 w-12 object-contain" />
          <span className="font-display text-2xl font-semibold tracking-wide text-cream">
            Milo's <span className="text-gold">Truffle</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principale">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
          <LangButton />
          <Link to="/booked" className="btn-primary !px-5 !py-2.5">
            {t.nav.book}
          </Link>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <LangButton />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/25 text-cream">
            <FontAwesomeIcon icon={open ? faXmark : faBars} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden md:hidden"
            aria-label="Mobile">
            <ul className="container-x flex flex-col gap-2 pt-8">
              {[{ to: "/", label: t.nav.home }, ...links].map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end
                    className={({ isActive }) =>
                      `block border-b border-line py-4 font-display text-3xl ${
                        isActive ? "text-gold" : "text-cream"
                      }`
                    }>
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
