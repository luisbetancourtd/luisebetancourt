"use client";

/**
 * Scanlines — Líneas de escaneo CRT sutiles.
 * Repeating linear gradient dorado a muy baja opacidad.
 */
export default function Scanlines() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[9998]"
      style={{
        background:
          "linear-gradient(to bottom, transparent 50%, rgba(212, 175, 55, 0.03) 51%, transparent 100%)",
        backgroundSize: "100% 4px",
      }}
      aria-hidden="true"
    />
  );
}
