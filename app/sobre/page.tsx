import { getPageBySlug } from "@/lib/content";
import MdxContent from "@/components/content/MdxContent";

export default function SobrePage() {
  const page = getPageBySlug("sobre");

  return (
    <div className="flex-1 px-6 py-20">
      <div className="max-w-[800px] mx-auto">
        <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-primary mb-2">
          Perfil del Operativo
        </div>
        <h1 className="font-[var(--font-anton)] text-4xl md:text-5xl uppercase tracking-[0.05em] text-white mb-10">
          SOBRE MI
        </h1>

        {page ? (
          <MdxContent content={page.body} />
        ) : (
          <div className="text-center py-20">
            <p className="font-[var(--font-poppins)] text-on-surface-variant">
              El dossier esta siendo compilado.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
