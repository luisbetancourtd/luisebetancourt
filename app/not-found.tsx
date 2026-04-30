import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex-1 flex items-center justify-center px-6 py-32">
      <div className="text-center max-w-[600px]">
        {/* Signal lost graphic */}
        <div className="mb-8 flex items-center justify-center gap-2">
          <span className="w-3 h-3 bg-[#ff5540] animate-pulse" />
          <span className="font-mono text-sm tracking-[0.2em] text-[#ff5540] uppercase">
            Signal Lost
          </span>
        </div>

        <h1 className="font-[var(--font-anton)] text-6xl md:text-8xl uppercase tracking-[0.05em] text-white mb-4">
          404
        </h1>

        <p className="font-mono text-sm tracking-[0.1em] text-on-surface-variant mb-2 uppercase">
          Coordenadas invalidas
        </p>

        <p className="font-[var(--font-poppins)] text-on-surface-variant mb-10">
          La transmision que buscas no existe o fue desclasificada. Verifica
          tus coordenadas o volve a la base.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#f2ca50] text-[#131313] font-mono text-xs tracking-[0.2em] uppercase hover:bg-[#ff5540] hover:text-white transition-colors"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          VOLVER A BASE
        </Link>
      </div>
    </div>
  );
}
