import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { sendMail } from "../data/mail";
import Toast from "./Toast";

const emptyInterests = { hunt: false, buy: false, info: false };

const ContactForm = () => {
  const { t } = useLanguage();
  const c = t.contact;
  const [form, setForm] = useState({ name: "", surname: "", email: "", message: "" });
  const [interests, setInterests] = useState(emptyInterests);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const selected = Object.keys(interests)
      .filter((k) => interests[k])
      .map((k) => c.interests[k].toUpperCase())
      .join(", ");
    try {
      const result = await sendMail({
        nome: `${form.name} ${form.surname} ${form.email}`,
        from_email: form.email,
        subject: "Richiesta CONTATTI SITO",
        message: `${form.message}\nInteressi: ${selected}`,
      });
      setToast({ type: "success", message: result === "sent" ? c.success : c.mailFallback });
      setForm({ name: "", surname: "", email: "", message: "" });
      setInterests(emptyInterests);
    } catch (err) {
      console.error("Failed to send email:", err);
      setToast({ type: "error", message: c.error });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit} className="card mx-auto w-full max-w-4xl space-y-6 p-6 sm:p-10">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="c-name" className="field-label">{c.name} *</label>
            <input id="c-name" name="name" required autoComplete="given-name" className="field" value={form.name} onChange={onChange} />
          </div>
          <div>
            <label htmlFor="c-surname" className="field-label">{c.surname}</label>
            <input id="c-surname" name="surname" autoComplete="family-name" className="field" value={form.surname} onChange={onChange} />
          </div>
        </div>
        <div>
          <label htmlFor="c-email" className="field-label">{c.email} *</label>
          <input id="c-email" name="email" type="email" required autoComplete="email" className="field" value={form.email} onChange={onChange} />
        </div>
        <fieldset>
          <legend className="field-label">{c.interestsTitle}</legend>
          <div className="flex flex-wrap gap-3">
            {Object.keys(emptyInterests).map((k) => (
              <label
                key={k}
                className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition ${
                  interests[k] ? "border-gold bg-gold/15 text-gold-soft" : "border-line text-cream/80 hover:border-cream/40"
                }`}>
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={interests[k]}
                  onChange={(e) => setInterests((i) => ({ ...i, [k]: e.target.checked }))}
                />
                {c.interests[k]}
              </label>
            ))}
          </div>
        </fieldset>
        <div>
          <label htmlFor="c-message" className="field-label">{c.message} *</label>
          <textarea id="c-message" name="message" required rows={6} className="field resize-y" value={form.message} onChange={onChange} />
        </div>
        <div className="flex justify-center pt-2">
          <motion.button whileTap={{ scale: 0.97 }} type="submit" disabled={loading} className="btn-primary">
            {loading ? c.sending : c.send}
          </motion.button>
        </div>
      </form>
      <Toast message={toast?.message} type={toast?.type} onClose={() => setToast(null)} />
    </>
  );
};

export default ContactForm;
