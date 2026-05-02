"use client";

import { useState, useEffect, useCallback } from "react";
import { X, Clock, MapPin } from "lucide-react";

/**
 * RecIndicator — Indicador REC pulsante fijo en la esquina superior derecha.
 * Clickeable: abre el System Modal con información del sistema.
 */
export default function RecIndicator() {
  const [modalOpen, setModalOpen] = useState(false);
  const [timestamp, setTimestamp] = useState("--:--:--");
  const [uptime, setUptime] = useState(0);

  const toggleModal = useCallback(() => {
    setModalOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    if (!modalOpen) return;

    const interval = setInterval(() => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, "0");
      const m = String(now.getMinutes()).padStart(2, "0");
      const s = String(now.getSeconds()).padStart(2, "0");
      setTimestamp(`${h}:${m}:${s}`);
      setUptime((u) => u + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [modalOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && modalOpen) setModalOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [modalOpen]);

  const formatUptime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(
      2,
      "0"
    )}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <>
      {/* REC Indicator */}
      <button
        onClick={toggleModal}
        className="fixed top-12 right-12 z-[101] flex items-center gap-2 font-mono text-xs tracking-[0.1em] text-[#FF0000] cursor-pointer hover:opacity-80 transition-opacity bg-transparent border-none"
        aria-label="Abrir información del sistema"
      >
        <span
          className="w-3 h-3 rounded-full bg-[#FF0000]"
          style={{ animation: "pulse-red 1.5s infinite" }}
        />
        <span>REC</span>
      </button>

      {/* System Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[100000] flex items-center justify-center"
          style={{ backgroundColor: "rgba(19, 19, 19, 0.95)", backdropFilter: "blur(8px)" }}
          onClick={(e) => {
            if (e.target === e.currentTarget) toggleModal();
          }}
        >
          <div className="w-[90%] max-w-[900px] max-h-[85vh] overflow-y-auto bg-surface-container border border-white/10 relative">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-surface-container-highest">
              <div className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase text-primary">
                <span>SYSTEM_STATUS // LIVE_FEED</span>
              </div>
              <button
                onClick={toggleModal}
                className="w-8 h-8 flex items-center justify-center bg-transparent border border-outline text-on-surface hover:bg-[#ff5540] hover:border-[#ff5540] hover:text-white transition-colors cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X size={16} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6">
              {/* System Info Grid */}
              <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 mb-6">
                <div className="bg-surface-container-low border border-white/5 p-4">
                  <div className="font-mono text-[0.625rem] tracking-[0.15em] uppercase text-on-surface-variant mb-2">
                    System Status
                  </div>
                  <div className="flex items-center gap-2 text-[#4ade80] text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                    ONLINE
                  </div>
                </div>

                <div className="bg-surface-container-low border border-white/5 p-4">
                  <div className="font-mono text-[0.625rem] tracking-[0.15em] uppercase text-on-surface-variant mb-2 flex items-center gap-1.5">
                    <MapPin size={10} />
                    Location
                  </div>
                  <div className="text-sm text-primary">Sofia, Bulgaria</div>
                </div>

                <div className="bg-surface-container-low border border-white/5 p-4">
                  <div className="font-mono text-[0.625rem] tracking-[0.15em] uppercase text-on-surface-variant mb-2">
                    Uptime
                  </div>
                  <div className="text-sm text-primary font-mono">{formatUptime(uptime)}</div>
                </div>

                <div className="bg-surface-container-low border border-white/5 p-4">
                  <div className="font-mono text-[0.625rem] tracking-[0.15em] uppercase text-on-surface-variant mb-2 flex items-center gap-1.5">
                    <Clock size={10} />
                    Server Time
                  </div>
                  <div className="text-sm text-primary font-mono">{timestamp}</div>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4 items-start p-4 bg-surface-container-low border border-white/5">
                <div className="w-[120px] h-20 bg-surface-container-highest flex items-center justify-center font-mono text-[0.625rem] text-on-surface-variant uppercase tracking-[0.1em]"
                >
                  [MAP_DATA]
                </div>
                <div className="flex-1">
                  <div className="font-display text-2xl uppercase text-on-surface mb-1">Sofia, Bulgaria</div>
                  <div className="font-mono text-xs text-primary">42.6977° N, 23.3219° E // EET/UTC+2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
