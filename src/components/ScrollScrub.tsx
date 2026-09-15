"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ScrollScrub({
  children,
  x = 0,
  y = 0,
  scale,
  fade = true,
  className,
}: {
  children: React.ReactNode;
  x?: number;
  y?: number;
  scale?: number;
  fade?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { x, y, scale: scale ?? 1, opacity: fade ? 0 : 1 },
        {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
            end: "top 60%",
            scrub: 0.6,
          },
        },
      );
    }, ref);

    return () => ctx.revert();
  }, [x, y, scale, fade]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
