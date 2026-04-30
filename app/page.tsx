import Link from "next/link";
import Footer from "@/components/layout/Footer";

const SECTORS = [
  {
    id: "migracion",
    label: "MIGRACION",
    title: "Como llegar legalmente",
    desc: "Visados, permisos, nacionalidad y tramites europeos documentados paso a paso.",
    status: "ACTIVO",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=800&q=80",
  },
  {
    id: "trabajo",
    label: "TRABAJO",
    title: "Trabajo remoto y local",
    desc: "Oportunidades laborales, freelancing, impuestos y regulaciones para nómadas.",
    status: "ACTIVO",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80",
  },
  {
    id: "negocios",
    label: "NEGOCIOS",
    title: "Emprender en Europa",
    desc: "Constitucion de empresas, fiscalidad, fundraising y networking continental.",
    status: "EN DESARROLLO",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    id: "vida",
    label: "VIDA",
    title: "Integracion cultural",
    desc: "Housing, salud, educacion, idiomas y comunidad latina en el viejo continente.",
    status: "ACTIVO",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80",
  },
  {
    id: "comunidad",
    label: "COMUNIDAD",
    title: "La tribu latina",
    desc: "Eventos, networking, mentorias y el ecosistema de latinos construyendo en Europa.",
    status: "ACTIVO",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
  },
];

const TRANSMISSIONS = [
  {
    id: 1,
    date: "2026.04.21",
    title: "Transmision de campo #1",
    desc: "Reporte operativo desde la linea del frente europeo. Actualizacion de protocolos y condiciones locales.",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&q=80",
  },
  {
    id: 2,
    date: "2026.04.22",
    title: "Transmision de campo #2",
    desc: "Nuevos hallazgos sobre regulacion fiscal para freelancers en Europa del Este.",
    image: "https://images.unsplash.com/photo-1504384308090-c54be3855833?w=400&q=80",
  },
  {
    id: 3,
    date: "2026.04.23",
    title: "Transmision de campo #3",
    desc: "Condiciones actuales del mercado laboral remoto y oportunidades emergentes.",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&q=80",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 pt-20 pb-16 border-b border-white/10">
        <div className="max-w-[1100px] w-full mx-auto">
          {/* Top meta */}
          <div className="flex items-center gap-3 mb-8 font-mono text-[0.65rem] tracking-[0.2em] uppercase text-on-surface-variant">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
            Sistema Operativo
            <span className="text-white/20">|</span>
            <span className="text-primary">Online</span>
          </div>

          {/* Main headline */}
          <h1 className="font-[var(--font-anton)] text-[clamp(3rem,10vw,8rem)] leading-[0.9] tracking-[0.02em] uppercase text-white mb-6">
            SOVEREIGN
            <br />
            <span className="text-[#f2ca50]">MISSION LOG</span>
          </h1>

          {/* Subheadline */}
          <p className="max-w-[600px] font-[var(--font-poppins)] text-lg md:text-xl font-light leading-relaxed text-on-surface-variant mb-10">
            La vida es un experimento y hay que documentarlo.
            <br />
            <span className="text-primary font-semibold">
              Proven shortcuts for Latinos in Europe.
            </span>
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/mision"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#f2ca50] text-[#131313] font-mono text-xs tracking-[0.2em] uppercase hover:bg-[#ff5540] hover:text-white transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              Iniciar Mision
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-mono text-xs tracking-[0.2em] uppercase hover:border-[#f2ca50] hover:text-[#f2ca50] transition-colors"
            >
              Ver Archivo
            </Link>
          </div>
        </div>
      </section>

      {/* SECTOR GRID */}
      <section className="px-6 py-20 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-primary mb-2">
                Sectores Operativos
              </div>
              <h2 className="font-[var(--font-anton)] text-3xl md:text-4xl uppercase tracking-[0.05em] text-white">
                AREAS DE MISION
              </h2>
            </div>
            <div className="hidden md:block font-mono text-xs text-on-surface-variant">
              {SECTORS.length} MODULOS ACTIVOS
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SECTORS.map((sector) => (
              <Link
                key={sector.id}
                href={`/sectores/${sector.id}`}
                className="group block bg-surface-container border border-white/5 hover:border-[#f2ca50]/30 transition-colors overflow-hidden"
              >
                {/* Image with signal interference */}
                <div className="signal-interference relative w-full h-44 overflow-hidden">
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 font-mono text-[0.6rem] tracking-[0.15em] uppercase px-2 py-0.5 bg-[#131313]/80 border border-white/10 text-primary">
                    {sector.label}
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

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-[var(--font-epilogue)] text-lg uppercase tracking-[0.05em] text-white mb-2 group-hover:text-[#f2ca50] transition-colors">
                    {sector.title}
                  </h3>
                  <p className="font-[var(--font-poppins)] text-sm text-on-surface-variant leading-relaxed">
                    {sector.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BRIEFING */}
      <section className="px-6 py-20 border-b border-white/10">
        <div className="max-w-[1100px] mx-auto">
          <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-primary mb-2">
            Briefing de Campo
          </div>
          <h2 className="font-[var(--font-anton)] text-3xl md:text-4xl uppercase tracking-[0.05em] text-white mb-8">
            ULTIMAS TRANSMISIONES
          </h2>

          <div className="space-y-4">
            {TRANSMISSIONS.map((t) => (
              <div
                key={t.id}
                className="group flex flex-col md:flex-row gap-4 p-4 bg-surface-container border border-white/5 hover:border-white/10 transition-colors"
              >
                {/* Thumbnail with signal interference */}
                <div className="signal-interference relative w-full md:w-40 h-28 shrink-0 overflow-hidden border border-white/5">
                  <img
                    src={t.image}
                    alt={t.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="no-signal-text">NO SIGNAL</div>
                  <div className="absolute bottom-2 right-2 font-mono text-[0.55rem] tracking-[0.1em] uppercase text-white/60 bg-[#131313]/80 px-1">
                    ▶
                  </div>
                </div>

                <div className="flex-1">
                  <div className="font-mono text-xs text-on-surface-variant mb-1">
                    {t.date}
                  </div>
                  <h3 className="font-[var(--font-epilogue)] text-sm uppercase tracking-[0.05em] text-white mb-1 group-hover:text-[#f2ca50] transition-colors">
                    {t.title}
                  </h3>
                  <p className="font-[var(--font-poppins)] text-sm text-on-surface-variant">
                    {t.desc}
                  </p>
                </div>
                <div className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-primary shrink-0 self-start md:self-center">
                  LEER MAS -
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-mono text-xs tracking-[0.2em] uppercase hover:border-[#f2ca50] hover:text-[#f2ca50] transition-colors"
            >
              Acceder al Archivo Completo
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="font-[var(--font-anton)] text-3xl md:text-5xl uppercase tracking-[0.05em] text-white mb-6">
            UNETE A LA <span className="text-[#f2ca50]">TRIBU</span>
          </h2>
          <p className="font-[var(--font-poppins)] text-lg text-on-surface-variant mb-10 max-w-[600px] mx-auto">
            La mision es clara: documentar el camino para que otros no tengan
            que cruzar la mina de campo sin mapa.
          </p>
          <Link
            href="/comunidad"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#ff5540] text-white font-mono text-sm tracking-[0.2em] uppercase hover:bg-[#f2ca50] hover:text-[#131313] transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            Enlistarse Ahora
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
