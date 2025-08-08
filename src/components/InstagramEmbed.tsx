"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Basit Instagram oEmbed bileşeni.
 * Props: url (insta post/reel url), caption (kısa açıklama), align ("left"|"right")
 */
export function InstagramEmbed({ url, caption, align = "left" }: { url: string; caption?: string; align?: "left" | "right" }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  // Lazy activate embed only when in-view
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
          }
        });
      },
      { rootMargin: "200px 0px", threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Ensure Instagram script present and process when inView
  useEffect(() => {
    if (!inView) return;
    if (!document.getElementById("ig-embed-script")) {
      const s = document.createElement("script");
      s.id = "ig-embed-script";
      s.async = true;
      s.src = "https://www.instagram.com/embed.js";
      document.body.appendChild(s);
      s.onload = () => (window as any).instgrm?.Embeds?.process();
    } else {
      (window as any).instgrm?.Embeds?.process();
    }
  }, [inView, url]);

  // Smooth reveal animation when coming into view
  const reveal = inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4";

  return (
    <div className={`grid items-start gap-8 md:grid-cols-2 ${align === "right" ? "md:[&>div:first-child]:order-2" : ""}`}>
      <div ref={ref} className={`min-h-[420px] transition-all duration-700 ease-out ${reveal}`}>
        {inView ? (
          <blockquote className="instagram-media" data-instgrm-permalink={url} data-instgrm-version="14" style={{ background: "var(--surface)", border: 0, width: "100%" }} />
        ) : (
          <div className="w-full h-full rounded-xl border border-[--line] bg-[--surface]" />
        )}
      </div>
      <div className={`self-center transition-all duration-700 delay-100 ease-out ${reveal}`}>
        {caption ? (
          <p className="text-[--text-muted] leading-relaxed whitespace-pre-line">{caption}</p>
        ) : null}
      </div>
    </div>
  );
}
