import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { truffles } from "../data/truffles";
import Reveal from "./Reveal";
import OrderModal from "./OrderModal";
import Toast from "./Toast";

const TruffleCard = ({ item, onOrder }) => {
  const { language, t } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="card group flex h-full flex-col overflow-hidden transition duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-glow">
      <div className="relative flex h-60 items-center justify-center bg-[radial-gradient(circle_at_50%_40%,rgba(212,162,76,0.18),transparent_70%)]">
        <img
          src={item.image}
          alt={`${item.name} – ${item.sub[language]}`}
          loading="lazy"
          className="h-48 w-48 object-contain drop-shadow-2xl transition duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-6"><div className="flex flex-col">
        <p className="eyebrow !tracking-[0.2em]">{item.sub[language]}</p>
        <h3 className="mt-2 font-display text-2xl font-semibold">{item.name}</h3>
        <p className={`mt-3 text-sm leading-relaxed text-muted ${expanded ? "" : "line-clamp-3"}`}>
          {item.description[language]}
        </p>
        <button onClick={() => setExpanded((v) => !v)} className="mt-2 self-start text-xs font-semibold uppercase tracking-wider text-gold hover:text-gold-soft">
          {expanded ? t.shop.less : t.shop.more}
        </button>
        </div>
        <button onClick={() => onOrder(item)} className="btn-primary mt-6 w-full !py-2.5">
          {t.shop.order}
        </button>
      </div>
    </article>
  );
};

const TruffleGrid = () => {
  const [selected, setSelected] = useState(null);
  const [toast, setToast] = useState(null);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {truffles.map((item, i) => (
          <Reveal key={item.id} delay={i * 0.08} className="h-full">
            <TruffleCard item={item} onOrder={setSelected} />
          </Reveal>
        ))}
      </div>
      <OrderModal truffle={selected} onClose={() => setSelected(null)} onResult={setToast} />
      <Toast message={toast?.message} type={toast?.type} onClose={() => setToast(null)} />
    </>
  );
};

export default TruffleGrid;
