"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { PortfolioProject } from "@/lib/content";

const gridContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const gridItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function PortafolioGrid({ projects }: { projects: PortfolioProject[] }) {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  if (projects.length === 0) {
    return (
      <motion.div
        className="text-center py-20 border border-white/10 bg-surface-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <p className="font-[var(--font-poppins)] text-on-surface-variant mb-4">
          Proyectos en produccion. El portafolio esta siendo cargado.
        </p>
        <p className="font-mono text-xs text-on-surface-variant/60">
          Mientras tanto, mira el{" "}
          <Link href="/arsenal" className="text-primary hover:text-[#ff5540]">
            Arsenal Soberano
          </Link>{" "}
          con herramientas y sistemas documentados.
        </p>
      </motion.div>
    );
  }

  return (
    <>
      {/* Proyectos destacados */}
      {featured.length > 0 && (
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-[#f2ca50] mb-6">
            ★ Destacados
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={gridContainer}
            initial="hidden"
            animate="show"
          >
            {featured.map((project) => (
              <motion.div key={project.slug} variants={gridItem}>
                <ProjectCard project={project} featured />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}

      {/* Resto de proyectos */}
      {rest.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {featured.length > 0 && (
            <div className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-on-surface-variant mb-6">
              Todos los proyectos
            </div>
          )}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={gridContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {rest.map((project) => (
              <motion.div key={project.slug} variants={gridItem}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-20 pt-12 border-t border-white/10 text-center"
      >
        <h2 className="font-[var(--font-anton)] text-2xl uppercase tracking-[0.05em] text-white mb-4">
          ¿Tenes un proyecto?
        </h2>
        <p className="font-[var(--font-poppins)] text-on-surface-variant mb-6 max-w-[500px] mx-auto">
          Construyamos algo tactico. Sitios rapidos, CMS headless, automaciones
          y sistemas con diseño Tactical Brutalism.
        </p>
        <a
          href="mailto:contacto@luisebetancourt.com"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#f2ca50] text-[#131313] font-mono text-xs tracking-[0.2em] uppercase hover:bg-[#ff5540] hover:text-white transition-colors"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          Contactar Ahora
        </a>
      </motion.div>
    </>
  );
}

function ProjectCard({
  project,
  featured,
}: {
  project: PortfolioProject;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/portafolio/${project.slug}`}
      className={`group block bg-surface-container border ${
        featured ? "border-[#f2ca50]/20" : "border-white/5"
      } hover:border-[#f2ca50]/30 transition-colors overflow-hidden`}
    >
      {/* Imagen */}
      <div className="relative w-full h-52 overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-surface-container-highest flex items-center justify-center">
            <span className="font-mono text-xs text-on-surface-variant">[SIN IMAGEN]</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#131313] to-transparent opacity-60" />
        {featured && (
          <div className="absolute top-3 left-3 font-mono text-[0.55rem] tracking-[0.15em] uppercase px-2 py-0.5 bg-[#f2ca50]/20 border border-[#f2ca50]/30 text-[#f2ca50]">
            ★ Destacado
          </div>
        )}
        {project.link && (
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center gap-1 font-mono text-[0.55rem] tracking-[0.15em] uppercase px-2 py-0.5 bg-[#131313]/80 border border-white/10 text-primary">
              <ExternalLink size={10} />
              VIVO
            </span>
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="p-5">
        <div className="font-mono text-xs text-on-surface-variant mb-2">
          {new Date(project.date).toLocaleDateString("es-ES", {
            year: "numeric",
            month: "short",
          })}
        </div>
        <h3 className="font-[var(--font-epilogue)] text-lg uppercase tracking-[0.05em] text-white mb-2 group-hover:text-[#f2ca50] transition-colors">
          {project.title}
        </h3>
        <p className="font-[var(--font-poppins)] text-sm text-on-surface-variant mb-4 line-clamp-2">
          {project.description}
        </p>
        {project.techStack && (
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.split(",").map((tech) => (
              <span
                key={tech.trim()}
                className="font-mono text-[0.55rem] tracking-[0.1em] uppercase px-2 py-0.5 bg-surface border border-white/10 text-on-surface-variant"
              >
                {tech.trim()}
              </span>
            ))}
          </div>
        )}
        <div className="mt-4 font-mono text-[0.6rem] tracking-[0.15em] uppercase text-primary inline-flex items-center gap-1">
          VER CASO <ArrowRight size={12} />
        </div>
      </div>
    </Link>
  );
}
