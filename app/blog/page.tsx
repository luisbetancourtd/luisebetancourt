import Link from "next/link";
import { getPosts } from "@/lib/content";

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="flex-1 px-6 py-20">
      <div className="max-w-[1100px] mx-auto">
        <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-primary mb-2">
          Archivo Operativo
        </div>
        <h1 className="font-[var(--font-anton)] text-4xl md:text-5xl uppercase tracking-[0.05em] text-white mb-10">
          TRANSMISIONES
        </h1>

        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-[var(--font-poppins)] text-on-surface-variant">
              No hay transmisiones disponibles en este momento.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block p-6 bg-surface-container border border-white/5 hover:border-[#f2ca50]/30 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="w-24 shrink-0">
                    <div className="font-mono text-xs text-primary">
                      {new Date(post.date).toLocaleDateString("es-ES", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                    <div className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-on-surface-variant mt-1">
                      {post.sector}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="font-[var(--font-epilogue)] text-lg uppercase tracking-[0.05em] text-white mb-1 group-hover:text-[#f2ca50] transition-colors">
                      {post.title}
                    </h2>
                    <p className="font-[var(--font-poppins)] text-sm text-on-surface-variant">
                      {post.description}
                    </p>
                  </div>
                  <div className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-primary shrink-0">
                    LEER MAS -
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
