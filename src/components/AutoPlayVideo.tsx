"use client";

import { useEffect, useRef, useState } from "react";

export type AutoPlayVideoProps = {
  src: string;
  poster?: string;
  className?: string;
  rounded?: string; // tailwind radius class
};

export default function AutoPlayVideo({ src, poster, className = "", rounded = "rounded-xl" }: AutoPlayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(async (e) => {
          if (!el) return;
          if (e.isIntersecting) {
            setInView(true);
            try {
              await el.play();
            } catch {}
          } else {
            el.pause();
          }
        });
      },
      { rootMargin: "200px 0px", threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className={`relative overflow-hidden border border-[--line] bg-[--surface] ${rounded} ${className} ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} transition-all duration-700`}> 
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        className="block w-full h-full object-cover"
      />
    </div>
  );
}
