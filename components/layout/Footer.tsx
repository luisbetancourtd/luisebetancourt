"use client";

/**
 * Footer — Pie de página estilo briefing táctico.
 */
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#131313] px-6 py-8">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-on-surface-variant">
          <span className="text-primary">LUIS E. BETANCOURT</span> // SOVEREIGN MISSION LOG
        </div>

        <div className="font-mono text-[0.6rem] tracking-[0.1em] text-on-surface-variant/60">
          PROVEN SHORTCUTS FOR LATINOS IN EUROPE
        </div>

        <div className="font-mono text-[0.6rem] tracking-[0.1em] text-on-surface-variant/60">
          &copy; {new Date().getFullYear()} TODOS LOS DERECHOS RESERVADOS
        </div>
      </div>
    </footer>
  );
}
