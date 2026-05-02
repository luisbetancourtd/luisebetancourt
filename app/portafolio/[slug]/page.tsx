import { notFound } from "next/navigation";
import Link from "next/link";
import { getPortfolioProjects, getPortfolioProjectBySlug } from "@/lib/content";
import MdxContent from "@/components/content/MdxContent";
import TerminalDonation from "@/components/layout/TerminalDonation";
import { ArrowLeft, ExternalLink } from "lucide-react";

export function generateStaticParams() {
  const projects = getPortfolioProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function PortfolioProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = getPortfolioProjectBySlug(slug);
  if (!project) {
    return notFound();
  }

  return (
    <div className="flex-1 flex flex-col">
      {/* HERO DEL PROYECTO */}
      <section className="relative min-h-[50vh] flex items-end px-6 py-16 border-b border-white/10 overflow-hidden">
        {project.image && (
          <div className="absolute inset-0 z-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/80 to-transparent" />
            <div className="absolute inset-0 bg-[#131313]/40" />
          </div>
        )}

        <div className="relative z-10 max-w-[1100px] w-full mx-auto">
          {/* Meta */}
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-primary">
              PROYECTO
            </span>
            <span className="text-white/20">|</span>
            <span className="font-mono text-[0.6rem] text-on-surface-variant">
              {new Date(project.date).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          <h1 className="font-[var(--font-anton)] text-4xl md:text-6xl uppercase tracking-[0.05em] text-white mb-4">
            {project.title}
          </h1>

          <p className="max-w-[700px] font-[var(--font-poppins)] text-lg md:text-xl text-on-surface-variant leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tech stack + link */}
          <div className="flex flex-wrap items-center gap-3">
            {project.techStack &&
              project.techStack.split(",").map((tech) => (
                <span
                  key={tech.trim()}
                  className="font-mono text-[0.6rem] tracking-[0.1em] uppercase px-3 py-1 bg-surface border border-white/10 text-on-surface-variant"
                >
                  {tech.trim()}
                </span>
              ))}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[0.6rem] tracking-[0.1em] uppercase px-3 py-1 bg-[#f2ca50]/10 border border-[#f2ca50]/30 text-[#f2ca50] hover:bg-[#f2ca50] hover:text-[#131313] transition-colors"
              >
                <ExternalLink size={12} />
                Visitar sitio
              </a>
            )}
          </div>
        </div>
      </section>

      {/* CASO DE ESTUDIO */}
      <section className="px-6 py-16 border-b border-white/10">
        <div className="max-w-[800px] mx-auto">
          <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-primary mb-6">
            Caso de Estudio
          </div>
          <MdxContent content={project.body} />
        </div>
      </section>

      {/* CTA / DONATION */}
      <section className="px-6 py-12 max-w-[800px] mx-auto w-full">
        <TerminalDonation variant="full" />

        <div className="mt-8 text-center">
          <Link
            href="/portafolio"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.15em] uppercase text-on-surface-variant hover:text-primary transition-colors"
          >
            <ArrowLeft size={14} />
            VOLVER AL PORTAFOLIO
          </Link>
        </div>
      </section>
    </div>
  );
}
