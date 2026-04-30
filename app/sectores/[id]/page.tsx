import { notFound } from "next/navigation";
import Link from "next/link";
import { getSectorBySlug, getPosts, type Post } from "@/lib/content";
import MdxContent from "@/components/content/MdxContent";

const VALID_SECTORS = ["migracion", "trabajo", "negocios", "vida", "comunidad"];

export function generateStaticParams() {
  return VALID_SECTORS.map((id) => ({ id }));
}

export default async function SectorPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!VALID_SECTORS.includes(id)) {
    return notFound();
  }

  const sector = getSectorBySlug(id);
  if (!sector) {
    return notFound();
  }

  // Traer posts relacionados a este sector
  const allPosts = getPosts();
  const relatedPosts = allPosts.filter(
    (post: Post) => post.sector === id
  );

  return (
    <div className="flex-1 flex flex-col">
      {/* HERO DEL SECTOR */}
      <section className="relative min-h-[60vh] flex items-end px-6 py-16 border-b border-white/10 overflow-hidden">
        {sector.image && (
          <div className="absolute inset-0 z-0">
            <img
              src={sector.image}
              alt={sector.title}
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
              {sector.sectorCode || `SECTOR_${id.toUpperCase().slice(0, 2)}`}
            </span>
            <span className="text-white/20">|</span>
            <span
              className={`font-mono text-[0.55rem] tracking-[0.15em] uppercase px-2 py-0.5 border ${
                sector.status === "ACTIVO"
                  ? "border-[#4ade80]/30 text-[#4ade80]"
                  : "border-[#f2ca50]/30 text-[#f2ca50]"
              }`}
            >
              {sector.status}
            </span>
          </div>

          <h1 className="font-[var(--font-anton)] text-4xl md:text-6xl uppercase tracking-[0.05em] text-white mb-4">
            {sector.title}
          </h1>

          <p className="max-w-[700px] font-[var(--font-poppins)] text-lg md:text-xl text-on-surface-variant leading-relaxed">
            {sector.description}
          </p>
        </div>
      </section>

      {/* CONTENIDO DEL SECTOR */}
      <section className="px-6 py-16 border-b border-white/10">
        <div className="max-w-[800px] mx-auto">
          <MdxContent content={sector.body} />
        </div>
      </section>

      {/* POSTS RELACIONADOS */}
      <section className="px-6 py-16 border-b border-white/10">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-primary mb-2">
                Transmisiones Relacionadas
              </div>
              <h2 className="font-[var(--font-anton)] text-2xl md:text-3xl uppercase tracking-[0.05em] text-white">
                BITACORA DE CAMPO
              </h2>
            </div>
            <div className="hidden md:block font-mono text-xs text-on-surface-variant">
              {relatedPosts.length} REGISTROS
            </div>
          </div>

          {relatedPosts.length === 0 ? (
            <div className="text-center py-12 border border-white/5 bg-surface-container">
              <p className="font-[var(--font-poppins)] text-on-surface-variant">
                No hay transmisiones en este sector aun.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedPosts.map((post: Post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block bg-surface-container border border-white/5 hover:border-[#f2ca50]/30 transition-colors overflow-hidden"
                >
                  {post.image && (
                    <div className="relative w-full h-40 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 font-mono text-[0.6rem] tracking-[0.15em] uppercase px-2 py-0.5 bg-[#131313]/80 border border-white/10 text-primary">
                        {post.sector}
                      </div>
                    </div>
                  )}
                  <div className="p-5">
                    <div className="font-mono text-xs text-on-surface-variant mb-1">
                      {new Date(post.date).toLocaleDateString("es-ES", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                    <h3 className="font-[var(--font-epilogue)] text-sm uppercase tracking-[0.05em] text-white group-hover:text-[#f2ca50] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA DEL SECTOR */}
      <section className="px-6 py-16">
        <div className="max-w-[800px] mx-auto text-center">
          {sector.ctaLabel && sector.ctaUrl && (
            <>
              <h2 className="font-[var(--font-anton)] text-2xl md:text-3xl uppercase tracking-[0.05em] text-white mb-6">
                PRÓXIMO PASO
              </h2>
              <p className="font-[var(--font-poppins)] text-on-surface-variant mb-8">
                Descargá el material operativo de este sector y empezá a aplicar
                hoy.
              </p>
              <Link
                href={sector.ctaUrl}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#f2ca50] text-[#131313] font-mono text-xs tracking-[0.2em] uppercase hover:bg-[#ff5540] hover:text-white transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                {sector.ctaLabel}
              </Link>
            </>
          )}

          <div className="mt-12 pt-8 border-t border-white/10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.15em] uppercase text-on-surface-variant hover:text-primary transition-colors"
            >
              ← VOLVER AL CENTRO DE MANDO
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
