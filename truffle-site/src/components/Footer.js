import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { EMAIL, PHONE_HREF, PHONE_LABEL, INSTAGRAM_URL, INSTAGRAM_HANDLE, MAPS_URL } from "../data/contacts";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const links = [
    { to: "/booked", label: t.nav.hunt },
    { to: "/shop", label: t.nav.shop },
    { to: "/about", label: t.nav.about },
    { to: "/contact", label: t.nav.contact },
  ];
  const contacts = [
    { href: `mailto:${EMAIL}`, icon: faEnvelope, label: EMAIL },
    { href: INSTAGRAM_URL, icon: faInstagram, label: `@${INSTAGRAM_HANDLE}`, external: true },
    { href: PHONE_HREF, icon: faPhone, label: PHONE_LABEL },
    { href: MAPS_URL, icon: faLocationDot, label: "Langhe · Monferrato", external: true },
  ];

  return (
    <footer className="mt-24 border-t border-line bg-surface">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <img src="/img/logoTruffle2.png" alt="" className="h-12 w-12 object-contain" />
            <span className="font-display text-2xl font-semibold">
              Milo's <span className="text-gold">Truffle</span>
            </span>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted">{t.footer.about}</p>
        </div>
        <div>
          <h3 className="eyebrow mb-5 !font-sans">{t.footer.links}</h3>
          <ul className="space-y-3 text-sm">
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-cream/80 transition hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="eyebrow mb-5 !font-sans">{t.footer.contacts}</h3>
          <ul className="space-y-3 text-sm">
            {contacts.map((c) => (
              <li key={c.href}>
                <a
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center gap-3 text-cream/80 transition hover:text-gold">
                  <FontAwesomeIcon icon={c.icon} className="w-4 text-gold" />
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-line py-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} Milo's Truffle · {t.footer.rights}
      </div>
    </footer>
  );
};

export default Footer;
