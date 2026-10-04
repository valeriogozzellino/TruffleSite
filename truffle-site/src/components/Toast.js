import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

/** Notifica non bloccante (sostituisce alert()). type: "success" | "error" */
const Toast = ({ message, type = "success", onClose, duration = 5000 }) => {
  useEffect(() => {
    if (!message) return undefined;
    const id = setTimeout(onClose, duration);
    return () => clearTimeout(id);
  }, [message, onClose, duration]);

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          role="status"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          className={`fixed bottom-6 left-1/2 z-[70] w-[calc(100%-2.5rem)] max-w-md -translate-x-1/2 rounded-2xl border px-5 py-4 text-center text-sm font-medium shadow-2xl backdrop-blur ${
            type === "success"
              ? "border-gold/40 bg-card/95 text-gold-soft"
              : "border-red-400/40 bg-card/95 text-red-300"
          }`}>
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
