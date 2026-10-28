"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowIcon } from "./Icons";

export default function HeroSlider({ slides }) {
  const [index, setIndex] = useState(0);
  const go = (d) => setIndex((i) => (i + d + slides.length) % slides.length);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    // Matches the 2560x1185 banner artwork so nothing gets cropped.
    <section className="relative aspect-[2560/1185] w-full overflow-hidden bg-cream">
      {slides.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt="Home"
          fill
          priority={i === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => go(-1)}
        className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-dark shadow"
      >
        <ArrowIcon className="rotate-180" width={28} height={28} />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => go(1)}
        className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-dark shadow"
      >
        <ArrowIcon width={28} height={28} />
      </button>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((s, i) => (
          <button
            key={s}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2.5 rounded-full transition-all ${i === index ? "w-6 bg-brand" : "w-2.5 bg-white/80"}`}
          />
        ))}
      </div>
    </section>
  );
}
