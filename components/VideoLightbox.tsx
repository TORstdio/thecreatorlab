"use client";

import Image from "next/image";
import { useRef } from "react";
import { VIDEO_PRESENTACION_URL } from "@/lib/media";
import poster from "@/public/video-poster.webp";

/**
 * Miniatura con play grande → modal (<dialog> nativo) con el video
 * en grande, overlay oscuro, controles, cierre con ×, Esc y click fuera.
 */
export default function VideoLightbox() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const open = () => {
    dialogRef.current?.showModal();
    document.documentElement.style.overflow = "hidden";
    videoRef.current?.play().catch(() => {});
  };
  const close = () => {
    videoRef.current?.pause();
    dialogRef.current?.close();
  };

  return (
    <>
      {/* Miniatura: poster + botón de play */}
      <button
        type="button"
        onClick={open}
        data-cursor="purple"
        aria-haspopup="dialog"
        aria-label="Reproducir video de presentación"
        className="group relative block w-full rounded-lg border-2 border-canvas overflow-hidden bg-ink text-left"
      >
        <Image
          src={poster}
          alt=""
          className="w-full aspect-video object-cover"
          sizes="(max-width: 1024px) 92vw, 54vw"
        />
        <span className="absolute inset-0 bg-ink/10 group-hover:bg-ink/20 transition-colors" />
        <span className="btn-hard absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[84px] rounded-full bg-canvas flex items-center justify-center shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
          <svg
            width="22"
            height="28"
            viewBox="0 0 22 28"
            fill="#1c1a17"
            aria-hidden="true"
          >
            <path d="M0 0L22 14L0 28Z" />
          </svg>
        </span>
      </button>

      {/* Lightbox */}
      <dialog
        ref={dialogRef}
        onClose={() => {
          videoRef.current?.pause();
          document.documentElement.style.overflow = "";
        }}
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
        aria-label="Video de presentación de The Creator Playbook"
        className="m-auto w-[min(92vw,1080px)] bg-transparent p-0 backdrop:bg-ink/80 backdrop:backdrop-blur-sm"
      >
        <div className="relative">
          <video
            ref={videoRef}
            controls
            playsInline
            preload="none"
            src={VIDEO_PRESENTACION_URL}
            className="w-full aspect-video rounded-xl border-2 border-canvas bg-ink"
          />
          <button
            type="button"
            onClick={close}
            aria-label="Cerrar video"
            className="btn-hard absolute -top-4 -right-4 size-11 rounded-full bg-butter text-ink border-2 border-ink flex items-center justify-center shadow-[3px_3px_0_0_#1c1a17]"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 2L12 12M12 2L2 12"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </dialog>
    </>
  );
}
