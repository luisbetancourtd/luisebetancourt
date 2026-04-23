import { notFound } from "next/navigation";
import { getPostBySlug, getPosts } from "@/lib/content";
import MdxContent from "@/components/content/MdxContent";

export function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  return (
    <article className="flex-1 px-6 py-20">
      <div className="max-w-[800px] mx-auto">
        <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-primary mb-2">
          {post.sector} // {new Date(post.date).toLocaleDateString("es-ES")}
        </div>
        <h1 className="font-[var(--font-anton)] text-3xl md:text-4xl uppercase tracking-[0.05em] text-white mb-4">
          {post.title}
        </h1>
        <p className="font-[var(--font-poppins)] text-lg text-on-surface-variant mb-10">
          {post.description}
        </p>

        <div className="border-t border-white/10 pt-10">
          <MdxContent content={post.body} />
        </div>
      </div>
    </article>
  );
}
