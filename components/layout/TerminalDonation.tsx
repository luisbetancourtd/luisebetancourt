import { Coffee } from "lucide-react";

/**
 * TerminalDonation — Bloque de donacion estilo terminal.
 * Abre link a ko-fi.com en pestana externa.
 *
 * @param variant — "compact" (footer) | "full" (pagina)
 */

interface TerminalDonationProps {
  variant?: "compact" | "full";
}

const KOFI_USERNAME = "luisebetancourt";

export default function TerminalDonation({ variant = "full" }: TerminalDonationProps) {
  const kofiUrl = `https://ko-fi.com/${KOFI_USERNAME}`;

  return (
    <div className="border border-white/10 bg-surface-container p-6 md:p-8">
      {/* Header estilo terminal */}
      <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/10">
        <span className="w-2 h-2 bg-[#f2ca50]" />
        <span className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-primary">
          {variant === "compact" ? "APOYO TACTICO" : "APOYAR ESTA MISION"}
        </span>
      </div>

      {variant === "full" && (
        <p className="font-[var(--font-poppins)] text-sm text-on-surface-variant leading-relaxed mb-6 max-w-[600px]">
          El Arsenal Drop y todas las herramientas de este sitio son gratis.
          Si te sirvio, podes invitarme un cafe para que siga documentando
          el camino.
        </p>
      )}

      <a
        href={kofiUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-[#f2ca50] text-[#f2ca50] font-mono text-xs tracking-[0.2em] uppercase hover:bg-[#f2ca50] hover:text-[#131313] transition-colors"
      >
        <Coffee size={16} />
        {variant === "compact" ? "INVITAR UN CAFE" : "INVITAR UN CAFE — KO-FI"}
      </a>

      <p className="mt-4 font-mono text-[0.55rem] tracking-[0.1em] text-on-surface-variant/40 uppercase">
        100% voluntario. Sin paywalls. Todo el contenido sigue siendo gratis.
      </p>
    </div>
  );
}
