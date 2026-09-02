"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { VIDEO_PRESENTACION_URL, VIDEO_POSTER } from "@/lib/media";
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
  // El <video> se monta hasta el primer hover (no descarga nada antes)
  const [videoOn, setVideoOn] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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
      onMouseEnter={() => {
        setHovered(true);
        setVideoOn(true);
        videoRef.current?.play().catch(() => {});
      }}
      onMouseLeave={() => {
        setHovered(false);
        videoRef.current?.pause();
      }}
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

      {/* Mini video (teaser real, silenciado): aparece en hover */}
      <span
        aria-hidden="true"
        className={`absolute inset-0 rounded-2xl overflow-hidden border-2 border-canvas bg-ink transition-opacity duration-200 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      >
        {videoOn && (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            autoPlay
            preload="none"
            poster={VIDEO_POSTER}
            src={VIDEO_PRESENTACION_URL}
            className="size-full object-cover"
          />
        )}
        <span className="absolute bottom-1.5 right-1.5 size-7 rounded-full bg-canvas flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
          <svg
            width="9"
            height="11"
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
