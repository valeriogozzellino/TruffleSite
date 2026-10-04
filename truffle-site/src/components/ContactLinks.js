import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useLanguage } from "../context/LanguageContext";
import { EMAIL, PHONE_HREF, PHONE_LABEL, INSTAGRAM_URL, INSTAGRAM_HANDLE } from "../data/contacts";

/** Schede di contatto diretto: email, Instagram, telefono. */
const ContactLinks = () => {
  const { t } = useLanguage();
  const items = [
    { href: `mailto:${EMAIL}`, icon: faEnvelope, title: "Email", value: EMAIL },
    { href: INSTAGRAM_URL, icon: faInstagram, title: "Instagram", value: `@${INSTAGRAM_HANDLE}`, external: true },
    { href: PHONE_HREF, icon: faPhone, title: t.order.phone, value: PHONE_LABEL },
  ];
  return (
    <div className="mx-auto mb-10 w-full max-w-4xl">
      <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted">{t.contact.direct}</p>
      <div className="grid gap-4 sm:grid-cols-3">
        {items.map((i) => (
          <a
            key={i.title}
            href={i.href}
            {...(i.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="card group flex items-center gap-4 p-5 transition hover:-translate-y-0.5 hover:border-gold/40">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/15 text-xl text-gold transition group-hover:bg-gold group-hover:text-ink">
              <FontAwesomeIcon icon={i.icon} />
            </span>
            <span className="min-w-0">
              <span className="block text-xs uppercase tracking-wider text-muted">{i.title}</span>
              <span className="block truncate text-sm font-medium text-cream">{i.value}</span>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactLinks;
