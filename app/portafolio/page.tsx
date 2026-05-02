import { getPortfolioProjects } from "@/lib/content";
import PortafolioGrid from "./PortafolioGrid";

export default function PortafolioPage() {
  const projects = getPortfolioProjects();

  return (
    <div className="flex-1 px-6 py-20">
      <div className="max-w-[1100px] mx-auto">
        <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-primary mb-2">
          Trabajos y Proyectos
        </div>
        <h1 className="font-[var(--font-anton)] text-4xl md:text-5xl uppercase tracking-[0.05em] text-white mb-4">
          PORTAFOLIO
        </h1>
        <p className="max-w-[600px] font-[var(--font-poppins)] text-on-surface-variant mb-12">
          Sitios web, sistemas y herramientas construidos con precision tactica
          para clientes que necesitan resultados.
        </p>

        <PortafolioGrid projects={projects} />
      </div>
    </div>
  );
}
