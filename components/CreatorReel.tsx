"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import camera from "@/public/creators/camera.webp";
import compass from "@/public/creators/compass.webp";
import cup from "@/public/creators/cup.webp";
import dice from "@/public/creators/dice.webp";
import dji from "@/public/creators/dji.webp";
import macbook from "@/public/creators/macbook.webp";

const FRAMES = [camera, dji, cup, compass, macbook, dice];
const SPEED_MS = 160; // cambio rápido tipo comercial

/**
 * Flipbook de objetos de creador: una imagen a la vez en bucle rápido.
 * Al hacer hover se expande a un mini video 16:9 (teaser del video de
 * presentación) y al salir vuelve de inmediato al loop.
 * Estático con reduced-motion.
 */
export default function CreatorReel() {
  const [frame, setFrame] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      if (!document.hidden) setFrame((f) => (f + 1) % FRAMES.length);
    }, SPEED_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <a
      href="#video"
      aria-label="Ver el video de presentación"
      data-cursor="purple"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative inline-block h-[110px] shrink-0 transition-[width] duration-300 ease-out ${
        hovered ? "w-[196px]" : "w-[110px]"
      }`}
    >
      {/* Loop de objetos */}
      {FRAMES.map((src, i) => (
        <Image
          key={src.src}
          src={src}
          alt=""
          fill
          sizes="196px"
          priority={i === 0}
          className={`object-contain transition-opacity duration-150 ${
            !hovered && i === frame ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/*
        Mini video (teaser). Con el asset real: reemplazar por
        <video muted autoPlay loop playsInline poster=...>.
      */}
      <span
        aria-hidden="true"
        className={`absolute inset-0 rounded-2xl overflow-hidden border-2 border-canvas bg-[linear-gradient(160deg,#57a6db_0%,#5c5af6_60%,#4a48d8_100%)] flex items-center justify-center transition-opacity duration-200 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="size-10 rounded-full bg-canvas flex items-center justify-center shadow-[0_6px_16px_rgba(0,0,0,0.3)]">
          <svg
            width="12"
            height="14"
            viewBox="0 0 12 14"
            fill="#1c1a17"
            aria-hidden="true"
          >
            <path d="M0 0L12 7L0 14Z" />
          </svg>
        </span>
      </span>
    </a>
  );
}
