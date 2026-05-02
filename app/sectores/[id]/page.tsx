import { notFound } from "next/navigation";
import { getSectorBySlug, getPosts, type Post } from "@/lib/content";
import SectorContent from "./SectorContent";

const VALID_SECTORS = ["migracion", "trabajo", "negocios", "vida", "comunidad"];

export function generateStaticParams() {
  return VALID_SECTORS.map((id) => ({ id }));
}

export default async function SectorPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!VALID_SECTORS.includes(id)) {
    return notFound();
  }

  const sector = getSectorBySlug(id);
  if (!sector) {
    return notFound();
  }

  // Traer posts relacionados a este sector
  const allPosts = getPosts();
  const relatedPosts = allPosts.filter((post: Post) => post.sector === id);

  return <SectorContent sector={sector} relatedPosts={relatedPosts} />;
}
