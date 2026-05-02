import { notFound } from "next/navigation";
import { getPostBySlug, getPosts } from "@/lib/content";
import PostContent from "./PostContent";

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

  return <PostContent post={post} />;
}
