import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  sector: string;
  status: string;
  body: string;
}

export interface Page {
  slug: string;
  title: string;
  description: string;
  body: string;
}

function parseFrontmatter(filePath: string): Record<string, any> & { body: string } {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  return { ...(data as Record<string, any>), body: content };
}

export function getPosts(): Post[] {
  const postsDir = path.join(CONTENT_DIR, "posts");
  if (!fs.existsSync(postsDir)) return [];

  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  return files
    .map((file) => {
      const filePath = path.join(postsDir, file);
      const data = parseFrontmatter(filePath);
      return {
        slug: file.replace(/\.mdx?$/, ""),
        title: data.title || "",
        description: data.description || "",
        date: data.date ? new Date(data.date).toISOString() : "",
        sector: data.sector || "general",
        status: data.status || "draft",
        body: data.body || "",
      } as Post;
    })
    .filter((post) => post.status === "published")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | null {
  const postsDir = path.join(CONTENT_DIR, "posts");
  const filePath = path.join(postsDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const data = parseFrontmatter(filePath);
  return {
    slug,
    title: data.title || "",
    description: data.description || "",
    date: data.date ? new Date(data.date).toISOString() : "",
    sector: data.sector || "general",
    status: data.status || "draft",
    body: data.body || "",
  };
}

export function getPages(): Page[] {
  const pagesDir = path.join(CONTENT_DIR, "pages");
  if (!fs.existsSync(pagesDir)) return [];

  const files = fs.readdirSync(pagesDir).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  return files.map((file) => {
    const filePath = path.join(pagesDir, file);
    const data = parseFrontmatter(filePath);
    return {
      slug: file.replace(/\.mdx?$/, ""),
      title: data.title || "",
      description: data.description || "",
      body: data.body || "",
    };
  });
}

export function getPageBySlug(slug: string): Page | null {
  const pagesDir = path.join(CONTENT_DIR, "pages");
  const filePath = path.join(pagesDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const data = parseFrontmatter(filePath);
  return {
    slug,
    title: data.title || "",
    description: data.description || "",
    body: data.body || "",
  };
}
