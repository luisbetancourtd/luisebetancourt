const SECTOR_IDS = ["migracion", "trabajo", "negocios", "vida", "comunidad"];

export function generateStaticParams() {
  return SECTOR_IDS.map((id) => ({ id }));
}

export default async function SectorPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="flex-1 flex items-center justify-center px-6 py-32">
      <div className="text-center max-w-[600px]">
        <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-primary mb-4">
          SECTOR OPERATIVO
        </div>
        <h1 className="font-[var(--font-anton)] text-4xl uppercase tracking-[0.05em] text-white mb-4">
          {id.toUpperCase()}
        </h1>
        <p className="font-[var(--font-poppins)] text-on-surface-variant">
          Los datos de este sector estan siendo desclasificados.
        </p>
      </div>
    </div>
  );
}
