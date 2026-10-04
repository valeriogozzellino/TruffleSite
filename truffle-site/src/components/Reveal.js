import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/** Fa comparire i contenuti con una leggera animazione quando entrano in vista. */
const Reveal = ({ children, delay = 0, y = 24, className = "" }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
};

export default Reveal;
