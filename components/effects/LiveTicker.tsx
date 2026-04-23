"use client";

import { useState, useEffect, useCallback } from "react";

/**
 * LiveTicker — Cinta de noticias táctica en la parte inferior.
 * Mensajes rotativos estilo briefing militar.
 */
const MESSAGES = [
  "MISION: DOCUMENTAR EL CAMINO",
  "STATUS: OPERATIVO // MADRID -> EUROPA",
  "AVISO: NUEVO INFORME DISPONIBLE",
  "COMUNIDAD: LATINOS EN EUROPA UNIDOS",
  "REC: TRANSMISION EN VIVO",
  "SISTEMA: TODOS LOS MODULOS FUNCIONALES",
];

export default function LiveTicker() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  const nextMessage = useCallback(() => {
    setVisible(false);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % MESSAGES.length);
      setVisible(true);
    }, 300);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextMessage, 6000);
    return () => clearInterval(interval);
  }, [nextMessage]);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-[#131313] border-t border-white/10 h-10 flex items-center overflow-hidden font-mono text-xs tracking-[0.15em] uppercase">
      {/* Label */}
      <div className="flex-shrink-0 px-4 py-2 bg-surface-container-highest border-r border-white/10 text-primary font-bold flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#FF0000] animate-pulse" />
        LIVE
      </div>

      {/* Scrolling message */}
      <div className="flex-1 px-6 overflow-hidden relative">
        <span
          className="whitespace-nowrap text-on-surface-variant transition-opacity duration-300"
          style={{ opacity: visible ? 1 : 0 }}
        >
          {MESSAGES[current]}
        </span>
      </div>

      {/* Timestamp */}
      <div className="flex-shrink-0 px-4 py-2 border-l border-white/10 text-on-surface-variant">
        <TickerClock />
      </div>
    </div>
  );
}

function TickerClock() {
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, "0");
      const m = String(now.getMinutes()).padStart(2, "0");
      const s = String(now.getSeconds()).padStart(2, "0");
      setTime(`${h}:${m}:${s}`);
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return <span className="tabular-nums">{time}</span>;
}
