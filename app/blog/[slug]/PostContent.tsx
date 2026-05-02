"use client";

import { motion } from "framer-motion";
import MdxContent from "@/components/content/MdxContent";
import TerminalDonation from "@/components/layout/TerminalDonation";
import type { Post } from "@/lib/content";

export default function PostContent({ post }: { post: Post }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-1 px-6 py-20"
    >
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

        {post.image && (
          <div className="mb-10 w-full h-64 md:h-80 overflow-hidden border border-white/10">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        )}

        <div className="border-t border-white/10 pt-10">
          <MdxContent content={post.body} />
        </div>

        {/* DONACION */}
        <div className="mt-16">
          <TerminalDonation variant="full" />
        </div>
      </div>
    </motion.article>
  );
}
