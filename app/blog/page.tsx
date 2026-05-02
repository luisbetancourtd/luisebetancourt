import { getPosts } from "@/lib/content";
import BlogGrid from "./BlogGrid";

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

        <BlogGrid posts={posts} />
      </div>
    </div>
  );
}
