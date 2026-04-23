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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-surface-container border border-white/5 hover:border-[#f2ca50]/30 transition-colors overflow-hidden"
              >
                {/* Image */}
                {post.image && (
                  <div className="relative w-full h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131313] to-transparent opacity-60" />
                    <div className="absolute top-3 left-3 font-mono text-[0.6rem] tracking-[0.15em] uppercase px-2 py-0.5 bg-[#131313]/80 border border-white/10 text-primary">
                      {post.sector}
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="p-5">
                  <div className="font-mono text-xs text-on-surface-variant mb-2">
                    {new Date(post.date).toLocaleDateString("es-ES", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                  <h2 className="font-[var(--font-epilogue)] text-lg uppercase tracking-[0.05em] text-white mb-2 group-hover:text-[#f2ca50] transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="font-[var(--font-poppins)] text-sm text-on-surface-variant line-clamp-3">
                    {post.description}
                  </p>
                  <div className="mt-4 font-mono text-[0.6rem] tracking-[0.15em] uppercase text-primary">
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
