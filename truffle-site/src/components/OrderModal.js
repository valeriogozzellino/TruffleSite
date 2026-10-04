import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../context/LanguageContext";
import { sendMail } from "../data/mail";

const initial = { name: "", phone: "", email: "", address: "", note: "" };

/** Finestra modale per richiedere un tartufo. `truffle` = oggetto tartufo oppure null (chiusa). */
const OrderModal = ({ truffle, onClose, onResult }) => {
  const { t, language } = useLanguage();
  const o = t.order;
  const [form, setForm] = useState(initial);
  const [quantity, setQuantity] = useState(10);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!truffle) return undefined;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [truffle, onClose]);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await sendMail({
        nome: `${form.name} ${form.email}`,
        from_email: form.email,
        subject: "Richiesta ACQUISTO SITO",
        message: `Tartufo: ${truffle.name} (${truffle.sub.it})\nMessaggio: ${form.note}\nQuantità: ${quantity} g\nTelefono: ${form.phone}\nIndirizzo: ${form.address}`,
      });
      onResult({ type: "success", message: result === "sent" ? t.contact.success : t.contact.mailFallback });
      setForm(initial);
      setQuantity(10);
      onClose();
    } catch (err) {
      console.error("Failed to send email:", err);
      onResult({ type: "error", message: t.contact.error });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {truffle && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
          <motion.form
            role="dialog"
            aria-modal="true"
            aria-label={o.title}
            onSubmit={onSubmit}
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="card max-h-[92vh] w-full max-w-lg space-y-5 overflow-y-auto rounded-b-none p-6 sm:rounded-b-3xl sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow mb-1">{o.title}</p>
                <h3 className="font-display text-3xl font-semibold">
                  {truffle.name} <span className="text-gold">· {truffle.sub[language]}</span>
                </h3>
              </div>
              <button type="button" onClick={onClose} aria-label={o.cancel} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-muted transition hover:text-gold">
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            <p className="text-sm text-muted">{o.intro}</p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="o-qty" className="field-label">{o.quantity} *</label>
                <input id="o-qty" type="number" min="10" step="10" required className="field" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
              </div>
              <div>
                <label htmlFor="o-phone" className="field-label">{o.phone} *</label>
                <input id="o-phone" name="phone" type="tel" required autoComplete="tel" className="field" value={form.phone} onChange={onChange} />
              </div>
              <div>
                <label htmlFor="o-name" className="field-label">{t.contact.name} *</label>
                <input id="o-name" name="name" required autoComplete="name" className="field" value={form.name} onChange={onChange} />
              </div>
              <div>
                <label htmlFor="o-email" className="field-label">{t.contact.email} *</label>
                <input id="o-email" name="email" type="email" required autoComplete="email" className="field" value={form.email} onChange={onChange} />
              </div>
            </div>
            <div>
              <label htmlFor="o-address" className="field-label">{o.address} *</label>
              <input id="o-address" name="address" required autoComplete="street-address" className="field" value={form.address} onChange={onChange} />
            </div>
            <div>
              <label htmlFor="o-note" className="field-label">{o.note}</label>
              <textarea id="o-note" name="note" rows={3} className="field resize-y" value={form.note} onChange={onChange} />
            </div>

            <div className="flex justify-end gap-3 pt-1">
              <button type="button" onClick={onClose} className="btn-ghost">{o.cancel}</button>
              <button type="submit" disabled={loading} className="btn-primary">
                {loading ? t.contact.sending : o.send}
              </button>
            </div>
          </motion.form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OrderModal;
