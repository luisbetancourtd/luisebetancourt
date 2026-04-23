"use client";

/**
 * MdxContent — Renderizador simple de contenido MDX/MD como HTML.
 * Version minimalista sin dependencias pesadas.
 */
export default function MdxContent({ content }: { content: string }) {
  // Procesamiento basico de markdown a HTML
  const html = content
    .replace(/^### (.*$)/gim, '<h3 class="font-[var(--font-epilogue)] text-lg uppercase tracking-[0.05em] text-white mt-8 mb-3">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="font-[var(--font-anton)] text-2xl uppercase tracking-[0.05em] text-[#f2ca50] mt-10 mb-4">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="font-[var(--font-anton)] text-3xl uppercase tracking-[0.05em] text-white mt-10 mb-4">$1</h1>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong class="text-white">$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em class="text-on-surface-variant">$1</em>')
    .replace(/^- (.*$)/gim, '<li class="font-[var(--font-poppins)] text-on-surface-variant leading-relaxed ml-4">$1</li>')
    .replace(/^(?!<)(.+)$/gim, '<p class="font-[var(--font-poppins)] text-on-surface-variant leading-relaxed mb-4">$1</p>');

  return (
    <div
      className="prose-custom"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
