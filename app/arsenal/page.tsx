import TerminalDonation from "@/components/layout/TerminalDonation";

export default function ArsenalPage() {
  const tools = [
    {
      tier: "C.1",
      tierLabel: "IA Online",
      tierDesc: "Barrera baja. Usalas mañana.",
      items: [
        { name: "NotebookLM", desc: "Sintesis de documentos y podcasts de estudio", url: "#" },
        { name: "Perplexity", desc: "Investigacion con fuentes citadas", url: "#" },
        { name: "ChatGPT", desc: "Asistente de escritura y traduccion", url: "#" },
        { name: "Claude", desc: "Analisis profundo de documentos largos", url: "#" },
      ],
    },
    {
      tier: "C.2",
      tierLabel: "IA Local",
      tierDesc: "Barrera media. Privacidad para tesis.",
      items: [
        { name: "Obsidian", desc: "Second Brain con graph view y plugins", url: "#" },
        { name: "Zotero", desc: "Gestion bibliografica con Better BibTeX", url: "#" },
        { name: "Ollama", desc: "Modelos locales (Llama, Mistral)", url: "#" },
        { name: "LocalAI", desc: "API compatible con OpenAI corriendo local", url: "#" },
      ],
    },
    {
      tier: "C.3",
      tierLabel: "IA Hibrida",
      tierDesc: "Barrera alta. Para alternance y carrera.",
      items: [
        { name: "Python + Jupyter", desc: "Analisis de datos y automatizacion", url: "#" },
        { name: "n8n", desc: "Flujos de automatizacion sin codigo", url: "#" },
        { name: "FastAPI", desc: "APIs propias para workflows custom", url: "#" },
        { name: "LangChain", desc: "Orquestacion de modelos y RAG", url: "#" },
      ],
    },
  ];

  return (
    <div className="flex-1 flex flex-col">
      {/* HERO */}
      <section className="relative min-h-[50vh] flex items-center px-6 py-20 border-b border-white/10">
        <div className="max-w-[1100px] w-full mx-auto">
          <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-primary mb-4">
            Arsenal Soberano
          </div>
          <h1 className="font-[var(--font-anton)] text-4xl md:text-6xl uppercase tracking-[0.05em] text-white mb-6">
            HERRAMIENTAS <span className="text-[#f2ca50]">OPERATIVAS</span>
          </h1>
          <p className="max-w-[700px] font-[var(--font-poppins)] text-lg text-on-surface-variant leading-relaxed">
            De estudiante abrumado a alguien con las herramientas correctas.
            Divididas por nivel de barrera: online, local e hibrida.
          </p>
        </div>
      </section>

      {/* TIER LIST */}
      <section className="px-6 py-16">
        <div className="max-w-[1100px] mx-auto space-y-16">
          {tools.map((category) => (
            <div key={category.tier}>
              {/* Tier header */}
              <div className="flex items-baseline gap-4 mb-6 pb-4 border-b border-white/10">
                <span className="font-mono text-sm tracking-[0.1em] text-primary">
                  {category.tier}
                </span>
                <h2 className="font-[var(--font-anton)] text-2xl uppercase tracking-[0.05em] text-white">
                  {category.tierLabel}
                </h2>
                <span className="hidden md:inline font-mono text-xs text-on-surface-variant">
                  // {category.tierDesc}
                </span>
              </div>

              {/* Tools grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.items.map((tool) => (
                  <a
                    key={tool.name}
                    href={tool.url}
                    className="group block bg-surface-container border border-white/5 p-5 hover:border-[#f2ca50]/30 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-[var(--font-epilogue)] text-sm uppercase tracking-[0.05em] text-white group-hover:text-[#f2ca50] transition-colors mb-1">
                          {tool.name}
                        </h3>
                        <p className="font-[var(--font-poppins)] text-sm text-on-surface-variant leading-relaxed">
                          {tool.desc}
                        </p>
                      </div>
                      <span className="font-mono text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                        →
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 border-t border-white/10">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="font-[var(--font-anton)] text-2xl md:text-3xl uppercase tracking-[0.05em] text-white mb-4">
            ¿FALTA ALGO?
          </h2>
          <p className="font-[var(--font-poppins)] text-on-surface-variant mb-8">
            Si tenes una herramienta que deberia estar aca, manda tu propuesta.
          </p>
          <a
            href="mailto:contacto@luisebetancourt.com"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-mono text-xs tracking-[0.2em] uppercase hover:border-[#f2ca50] hover:text-[#f2ca50] transition-colors"
          >
            PROPOSER HERRAMIENTA
          </a>
        </div>
      </section>

      {/* DONACION */}
      <section className="px-6 py-16 border-t border-white/10">
        <div className="max-w-[800px] mx-auto">
          <TerminalDonation variant="full" />
        </div>
      </section>
    </div>
  );
}
