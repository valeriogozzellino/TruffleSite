import emailjs from "emailjs-com";
import { EMAIL } from "./contacts";

// Chiavi pubbliche EmailJS (sovrascrivibili con variabili d'ambiente CRA)
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_xzkwixu";
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_7e4e2r9";
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "uR9nBHO2ncwAu9Ilu";

/** Apre l'app di posta del dispositivo con la mail già compilata per i titolari. */
export const openMailApp = ({ nome, from_email, subject, message }) => {
  const body = `${message}\n\n—\n${nome}\n${from_email}`;
  window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
};

/**
 * Prova l'invio automatico con EmailJS; se fallisce apre l'app di posta del dispositivo.
 * Ritorna "sent" (inviata dal sito) oppure "mailto" (si è aperta l'app email).
 */
export const sendMail = async (payload) => {
  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, payload, PUBLIC_KEY);
    return "sent";
  } catch (err) {
    console.error("EmailJS fallito, apro l'app di posta:", err);
    openMailApp(payload);
    return "mailto";
  }
};
