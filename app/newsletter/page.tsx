"use client";

import { useState } from "react";

// Configuracion: reemplazar con tu username de Buttondown
const BUTTONDOWN_USERNAME = "luisebetancourt";

export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [sector, setSector] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!email) {
      setStatus("error");
      setMessage("El canal de comunicacion (email) es obligatorio.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const formData = new FormData();
      formData.append("email", email);
      if (name) formData.append("first_name", name);
      if (sector) formData.append("metadata", JSON.stringify({ sector }));

      const response = await fetch(
        `https://buttondown.com/api/emails/embed-subscribe/${BUTTONDOWN_USERNAME}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setStatus("success");
        setMessage("Registro exitoso. Revisa tu inbox para confirmar.");
        setEmail("");
        setName("");
        setSector("");
      } else {
        const data = await response.json().catch(() => ({}));
        setStatus("error");
        setMessage(
          data.detail ||
            "Error al registrar. Verifica tu email o intenta mas tarde."
        );
      }
    } catch {
      setStatus("error");
      setMessage("Error de red. Verifica tu conexion e intenta de nuevo.");
    }
  }

  return (
    <div className="flex-1 flex flex-col">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-6 py-20 border-b border-white/10">
        <div className="max-w-[800px] w-full mx-auto text-center">
          <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-primary mb-4">
            Arsenal Drop // Mensual
          </div>

          <h1 className="font-[var(--font-anton)] text-4xl md:text-6xl uppercase tracking-[0.05em] text-white mb-6">
            UNETE A LA <span className="text-[#f2ca50]">OPERACION</span>
          </h1>

          <p className="font-[var(--font-poppins)] text-lg text-on-surface-variant leading-relaxed mb-4 max-w-[600px] mx-auto">
            Recibi el Arsenal Drop mensual: templates, mazos Anki, checklists y
            configuraciones de herramientas directo a tu inbox.
          </p>

          <p className="font-mono text-sm text-on-surface-variant/60 mb-10">
            Sin spam. Unsubscribe anytime. Tu data esta encriptada.
          </p>
        </div>
      </section>

      {/* VALUE PROP GRID */}
      <section className="px-6 py-16 border-b border-white/10">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Templates descargables",
                desc: "CV europeo, cartas de motivacion, checklists de tramites, spreadsheets de tracking.",
              },
              {
                num: "02",
                title: "Mazos Anki operativos",
                desc: "Vocabulario academico, expresiones para entrevistas, terminologia tecnica con audio.",
              },
              {
                num: "03",
                title: "Configuraciones de herramientas",
                desc: "Vaults de Obsidian, flujos de n8n, scripts de Python para automatizacion.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="bg-surface-container border border-white/5 p-6 hover:border-white/10 transition-colors"
              >
                <div className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-primary mb-3">
                  [{item.num}]
                </div>
                <h3 className="font-[var(--font-epilogue)] text-sm uppercase tracking-[0.05em] text-white mb-3">
                  {item.title}
                </h3>
                <p className="font-[var(--font-poppins)] text-sm text-on-surface-variant leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="px-6 py-16">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="font-[var(--font-anton)] text-2xl md:text-3xl uppercase tracking-[0.05em] text-white mb-6">
            ENLISTARSE
          </h2>

          {status === "success" ? (
            <div className="bg-surface-container border border-[#4ade80]/30 p-8 text-center">
              <div className="font-mono text-sm tracking-[0.1em] uppercase text-[#4ade80] mb-3">
                REGISTRO EXITOSO
              </div>
              <p className="font-[var(--font-poppins)] text-on-surface-variant mb-4">
                {message}
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="font-mono text-xs tracking-[0.15em] uppercase text-primary hover:text-white transition-colors"
              >
                ← REGISTRAR OTRO OPERATIVO
              </button>
            </div>
          ) : (
            <form
              className="flex flex-col gap-6 text-left"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="block font-mono text-[0.6rem] tracking-[0.15em] uppercase text-primary mb-2">
                  Nombre del operativo
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Luis Betancourt"
                  className="w-full px-0 py-3 bg-transparent border-b-2 border-outline font-mono text-sm text-on-surface outline-none focus:border-primary transition-colors placeholder:text-on-surface-variant/30"
                />
              </div>

              <div>
                <label className="block font-mono text-[0.6rem] tracking-[0.15em] uppercase text-primary mb-2">
                  Canal de comunicacion (email) *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="operativo@dominio.com"
                  required
                  className="w-full px-0 py-3 bg-transparent border-b-2 border-outline font-mono text-sm text-on-surface outline-none focus:border-primary transition-colors placeholder:text-on-surface-variant/30"
                />
              </div>

              <div>
                <label className="block font-mono text-[0.6rem] tracking-[0.15em] uppercase text-primary mb-2">
                  Sector de interes
                </label>
                <select
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                  className="w-full px-0 py-3 bg-transparent border-b-2 border-outline font-mono text-sm text-on-surface outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Seleccionar...</option>
                  <option value="migracion">Migracion</option>
                  <option value="vida">Idiomas / Vida</option>
                  <option value="negocios">Tech / Arsenal</option>
                  <option value="trabajo">Portfolio / Trabajo</option>
                  <option value="comunidad">Comunidad / Narrativa</option>
                </select>
              </div>

              {status === "error" && (
                <div className="font-mono text-xs text-[#ff5540]">
                  {message}
                </div>
              )}

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#f2ca50] text-[#131313] font-mono text-xs tracking-[0.2em] uppercase hover:bg-[#ff5540] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                  {status === "loading"
                    ? "PROCESANDO..."
                    : "JOIN THE OPERATION"}
                </button>
              </div>

              <p className="text-center font-mono text-[0.6rem] tracking-[0.1em] text-on-surface-variant/40">
                Al suscribirte, aceptas recibir el Arsenal Drop mensual. Podes
                darte de baja en cualquier momento.
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
