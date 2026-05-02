import Link from "next/link";
import { getPageBySlug, getSectors, getPosts, type Sector, type Post } from "@/lib/content";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Play } from "lucide-react";

// Valores por defecto para si el home.mdx no existe aun
const DEFAULTS = {
  heroEyebrow: "Sistema Operativo",
  heroHeadline: "SOVEREIGN",
  heroHighlight: "MISSION LOG",
  heroSubheadline: "La vida es un experimento y hay que documentarlo.",
  heroSubHighlight: "Proven shortcuts for Latinos in Europe.",
  heroCTA1: "Iniciar Mision",
  heroCTA1Url: "/mision",
  heroCTA2: "Ver Archivo",
  heroCTA2Url: "/blog",
  sectorsEyebrow: "Sectores Operativos",
  sectorsHeadline: "AREAS DE MISION",
  sectorsCount: "MODULOS ACTIVOS",
  briefingEyebrow: "Briefing de Campo",
  briefingHeadline: "ULTIMAS TRANSMISIONES",
  briefingCTA: "Acceder al Archivo Completo",
  finalHeadline: "UNETE A LA",
  finalHighlight: "TRIBU",
  finalBody:
    "La mision es clara: documentar el camino para que otros no tengan que cruzar la mina de campo sin mapa.",
  finalCTA: "Enlistarse Ahora",
  finalCTAUrl: "/newsletter",
};

export default function Home() {
  const homePage = getPageBySlug("home");
  const fm = homePage?.frontmatter ?? {};

  const f = (key: string) => (fm[key] as string) || (DEFAULTS as Record<string, string>)[key] || "";

  // Datos dinamicos desde el filesystem
  const sectors: Sector[] = getSectors();
  const recentPosts: Post[] = getPosts().slice(0, 3);

  return (
    <div className="flex flex-col flex-1">
      {/* ============================================
          HERO
          ============================================ */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 pt-20 pb-16 border-b border-white/10">
        <div className="max-w-[1100px] w-full mx-auto">
          {/* Top meta */}
          <div className="flex items-center gap-3 mb-8 font-mono text-[0.65rem] tracking-[0.2em] uppercase text-on-surface-variant">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
            {f("heroEyebrow")}
            <span className="text-white/20">|</span>
            <span className="text-primary">Online</span>
          </div>

          {/* Main headline */}
          <h1 className="font-[var(--font-anton)] text-[clamp(3rem,10vw,8rem)] leading-[0.9] tracking-[0.02em] uppercase text-white mb-6">
            {f("heroHeadline")}
            <br />
            <span className="text-[#f2ca50]">{f("heroHighlight")}</span>
          </h1>

          {/* Subheadline */}
          <p className="max-w-[600px] font-[var(--font-poppins)] text-lg md:text-xl font-light leading-relaxed text-on-surface-variant mb-10">
            {f("heroSubheadline")}
            <br />
            <span className="text-primary font-semibold">{f("heroSubHighlight")}</span>
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={f("heroCTA1Url")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#f2ca50] text-[#131313] font-mono text-xs tracking-[0.2em] uppercase hover:bg-[#ff5540] hover:text-white transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              {f("heroCTA1")}
            </Link>
            <Link
              href={f("heroCTA2Url")}
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-mono text-xs tracking-[0.2em] uppercase hover:border-[#f2ca50] hover:text-[#f2ca50] transition-colors"
            >
              {f("heroCTA2")}
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTOR GRID (dinamico desde MDX)
          ============================================ */}
      <section className="px-6 py-20 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-primary mb-2">
                {f("sectorsEyebrow")}
              </div>
              <h2 className="font-[var(--font-anton)] text-3xl md:text-4xl uppercase tracking-[0.05em] text-white">
                {f("sectorsHeadline")}
              </h2>
            </div>
            <div className="hidden md:block font-mono text-xs text-on-surface-variant">
              {sectors.length} {f("sectorsCount")}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sectors.map((sector) => (
              <Link
                key={sector.slug}
                href={`/sectores/${sector.slug}`}
                className="group block bg-surface-container border border-white/5 hover:border-[#f2ca50]/30 transition-colors overflow-hidden"
              >
                {/* Imagen con signal interference */}
                <div className="signal-interference relative w-full h-44 overflow-hidden">
                  {sector.image ? (
                    <img
                      src={sector.image}
                      alt={sector.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-surface-container-highest flex items-center justify-center">
                      <span className="font-mono text-xs text-on-surface-variant">{sector.sectorCode || sector.slug.toUpperCase()}</span>
                    </div>
                  )}
                  <div className="absolute top-3 left-3 font-mono text-[0.6rem] tracking-[0.15em] uppercase px-2 py-0.5 bg-[#131313]/80 border border-white/10 text-primary">
                    {sector.sectorCode || sector.slug}
                  </div>
                  <div className="absolute top-3 right-3">
                    <span
                      className={`font-mono text-[0.55rem] tracking-[0.15em] uppercase px-2 py-0.5 border ${
                        sector.status === "ACTIVO"
                          ? "border-[#4ade80]/30 text-[#4ade80] bg-[#131313]/80"
                          : "border-[#f2ca50]/30 text-[#f2ca50] bg-[#131313]/80"
                      }`}
                    >
                      {sector.status}
                    </span>
                  </div>
                  <div className="no-signal-text">NO SIGNAL</div>
                </div>

                {/* Contenido */}
                <div className="p-5">
                  <h3 className="font-[var(--font-epilogue)] text-lg uppercase tracking-[0.05em] text-white mb-2 group-hover:text-[#f2ca50] transition-colors">
                    {sector.title}
                  </h3>
                  <p className="font-[var(--font-poppins)] text-sm text-on-surface-variant leading-relaxed">
                    {sector.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          BRIEFING / TRANSMISIONES RECIENTES
          ============================================ */}
      <section className="px-6 py-20 border-b border-white/10">
        <div className="max-w-[1100px] mx-auto">
          <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-primary mb-2">
            {f("briefingEyebrow")}
          </div>
          <h2 className="font-[var(--font-anton)] text-3xl md:text-4xl uppercase tracking-[0.05em] text-white mb-8">
            {f("briefingHeadline")}
          </h2>

          {recentPosts.length === 0 ? (
            <div className="text-center py-12 border border-white/5 bg-surface-container">
              <p className="font-[var(--font-poppins)] text-on-surface-variant">
                No hay transmisiones disponibles. La primera esta en produccion.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col md:flex-row gap-4 p-4 bg-surface-container border border-white/5 hover:border-white/10 transition-colors"
                >
                  {/* Thumbnail con signal interference */}
                  <div className="signal-interference relative w-full md:w-40 h-28 shrink-0 overflow-hidden border border-white/5">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-surface-container-highest flex items-center justify-center">
                        <span className="font-mono text-[0.5rem] text-on-surface-variant">{post.sector}</span>
                      </div>
                    )}
                    <div className="no-signal-text">NO SIGNAL</div>
                    <div className="absolute bottom-2 right-2 text-white/60 bg-[#131313]/80 px-1">
                      <Play size={10} />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="font-mono text-xs text-on-surface-variant mb-1">
                      {new Date(post.date).toLocaleDateString("es-ES", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                    <h3 className="font-[var(--font-epilogue)] text-sm uppercase tracking-[0.05em] text-white mb-1 group-hover:text-[#f2ca50] transition-colors">
                      {post.title}
                    </h3>
                    <p className="font-[var(--font-poppins)] text-sm text-on-surface-variant">
                      {post.description}
                    </p>
                  </div>
                  <div className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-primary shrink-0 self-start md:self-center inline-flex items-center gap-1">
                    LEER MAS <ArrowRight size={12} />
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-mono text-xs tracking-[0.2em] uppercase hover:border-[#f2ca50] hover:text-[#f2ca50] transition-colors"
            >
              {f("briefingCTA")}
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          CTA FINAL
          ============================================ */}
      <section className="px-6 py-20">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="font-[var(--font-anton)] text-3xl md:text-5xl uppercase tracking-[0.05em] text-white mb-6">
            {f("finalHeadline")}{" "}
            <span className="text-[#f2ca50]">{f("finalHighlight")}</span>
          </h2>
          <p className="font-[var(--font-poppins)] text-lg text-on-surface-variant mb-10 max-w-[600px] mx-auto">
            {f("finalBody")}
          </p>
          <Link
            href={f("finalCTAUrl")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#ff5540] text-white font-mono text-sm tracking-[0.2em] uppercase hover:bg-[#f2ca50] hover:text-[#131313] transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            {f("finalCTA")}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
