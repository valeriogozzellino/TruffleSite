import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { sendMail } from "../data/mail";
import Toast from "./Toast";

const initial = { name: "", email: "", message: "", allergies: "" };

const BookingForm = () => {
  const { t } = useLanguage();
  const b = t.booking;
  const [form, setForm] = useState(initial);
  const [people, setPeople] = useState(1);
  const [tasting, setTasting] = useState("with");
  const [showAllergies, setShowAllergies] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await sendMail({
        nome: `${form.name} ${form.email}`,
        from_email: form.email,
        subject: "Richiesta PRENOTAZIONE CACCIA AL TARTUFO",
        message: `${form.message}\nAllergie: ${form.allergies}\nNumero di Persone: ${people}\nTipologia: ${
          tasting === "with" ? "CON DEGUSTAZIONE" : "SENZA DEGUSTAZIONE"
        }`,
      });
      setToast({ type: "success", message: result === "sent" ? t.contact.success : t.contact.mailFallback });
      setForm(initial);
      setPeople(1);
      setShowAllergies(false);
    } catch (err) {
      console.error("Failed to send email:", err);
      setToast({ type: "error", message: t.contact.error });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit} id="prenota" className="card mx-auto w-full max-w-2xl space-y-6 p-6 sm:p-10">
        <h2 className="text-center font-display text-3xl font-semibold">{b.title}</h2>

        <div>
          <span className="field-label">{b.people}</span>
          <div className="inline-flex items-center rounded-full border border-line">
            <button type="button" aria-label="-" onClick={() => setPeople((p) => Math.max(1, p - 1))} className="h-11 w-11 text-xl text-gold transition hover:text-gold-soft">
              −
            </button>
            <span className="w-10 text-center text-lg font-semibold" aria-live="polite">{people}</span>
            <button type="button" aria-label="+" onClick={() => setPeople((p) => Math.min(30, p + 1))} className="h-11 w-11 text-xl text-gold transition hover:text-gold-soft">
              +
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[
            ["with", b.tasting],
            ["without", b.noTasting],
          ].map(([value, label]) => (
            <label
              key={value}
              className={`cursor-pointer rounded-xl border px-4 py-3 text-center text-sm font-medium transition ${
                tasting === value ? "border-gold bg-gold/15 text-gold-soft" : "border-line text-cream/80 hover:border-cream/40"
              }`}>
              <input type="radio" name="tasting" value={value} className="sr-only" checked={tasting === value} onChange={() => setTasting(value)} />
              {label}
            </label>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="b-name" className="field-label">{t.contact.name} *</label>
            <input id="b-name" name="name" required className="field" value={form.name} onChange={onChange} />
          </div>
          <div>
            <label htmlFor="b-email" className="field-label">{t.contact.email} *</label>
            <input id="b-email" name="email" type="email" required className="field" value={form.email} onChange={onChange} />
          </div>
        </div>

        <div>
          <label htmlFor="b-message" className="field-label">{b.days}</label>
          <textarea id="b-message" name="message" rows={3} placeholder={b.daysPlaceholder} className="field resize-y" value={form.message} onChange={onChange} />
        </div>

        <div>
          <button type="button" onClick={() => setShowAllergies((v) => !v)} className="text-sm font-medium text-gold underline-offset-4 hover:underline">
            {b.allergies}
          </button>
          {showAllergies && (
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="mt-3">
              <label htmlFor="b-allergies" className="field-label">{b.allergiesLabel}</label>
              <textarea id="b-allergies" name="allergies" rows={3} placeholder={b.allergiesPlaceholder} className="field resize-y" value={form.allergies} onChange={onChange} />
            </motion.div>
          )}
        </div>

        <div className="flex justify-center pt-2">
          <button type="submit" disabled={loading} className="btn-primary">
            {loading ? t.contact.sending : t.contact.send}
          </button>
        </div>
      </form>
      <Toast message={toast?.message} type={toast?.type} onClose={() => setToast(null)} />
    </>
  );
};

export default BookingForm;
