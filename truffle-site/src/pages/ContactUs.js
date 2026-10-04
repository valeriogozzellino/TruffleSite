import React from "react";
import PageHeader from "../components/PageHeader";
import ContactLinks from "../components/ContactLinks";
import ContactForm from "../components/ContactForm";
import { useLanguage } from "../context/LanguageContext";

const ContactUs = () => {
  const { t } = useLanguage();
  return (
    <>
      <PageHeader eyebrow={t.contact.eyebrow} title={t.contact.title} text={t.contact.text} />
      <section className="container-x">
        <ContactLinks />
        <ContactForm />
      </section>
    </>
  );
};

export default ContactUs;
