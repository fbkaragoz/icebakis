"use client";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import PostCard, { PostMedia } from "@/components/PostCard";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { posts as contentPosts, type PostItem } from "@/content/posts";

// Kullanıcının gönderdiği seçki (yeniden -> eskiye)
const allPosts: PostItem[] = contentPosts;

export default function PostsPage() {
  // progressive yükleme: ilk 3, sonra scroll ile +2
  const [visibleCount, setVisibleCount] = useState(3);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = loadMoreRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisibleCount((c) => Math.min(c + 2, allPosts.length));
          }
        });
      },
      { rootMargin: "300px 0px", threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const posts = allPosts.slice(0, visibleCount);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="pt-16 px-4">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <h1 className="font-serif text-[clamp(2.4rem,4.5vw,3.6rem)] leading-tight mb-6">Post</h1>
            <p className="text-lg text-[--text-muted] leading-relaxed">Instagram’daki seçili paylaşımlar: kısa yazılar, görseller ve reel’ler.</p>
          </div>

          <div className="max-w-5xl mx-auto space-y-16">
            {posts.map((p, i) => (
              <PostCard 
                key={p.url} 
                media={p.media as PostMedia} 
                caption={p.caption} 
                align={i % 2 === 0 ? "left" : "right"} 
              />
            ))}

            {/* Infinite-like loader sentinel */}
            {visibleCount < allPosts.length && (
              <div ref={loadMoreRef} className="h-10" aria-hidden />
            )}

            <div className="text-center pt-6">
              <Link href="https://www.instagram.com/ice.bakis/" target="_blank" className="inline-flex items-center gap-2 rounded-full border border-[--line] bg-[--surface] hover:border-[--accent-400] hover:text-[--accent-600] text-sm font-medium px-8 py-3 transition-colors">
                Daha Fazla Keşfet
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
