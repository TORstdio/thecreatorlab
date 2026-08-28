"use client";

import { useState } from "react";

type Props = {
  name: string;
  summary: string;
  highlights: string[];
  photoBg: string;
  fotoColor: string;
};

/**
 * Card de instructor con panel expandible: el "+" desliza
 * los highlights completos sobre la card (sin modal).
 */
export default function InstructorCard({
  name,
  summary,
  highlights,
  photoBg,
  fotoColor,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <li
      data-reveal
      onClick={() => {
        if (highlights.length > 0) setOpen((v) => !v);
      }}
      className="sticker relative bg-white border-2 border-ink rounded-[14px] overflow-hidden shadow-[4px_4px_0_0_#1c1a17] snap-center shrink-0 w-[82%] max-w-[340px] sm:w-auto sm:max-w-none sm:shrink"
    >
      {/* Placeholder de foto — reemplazar por next/image con el asset real */}
      <div
        className={`${photoBg} aspect-square flex items-center justify-center`}
      >
        <span
          className={`font-narrow font-bold text-xs tracking-[0.16em] ${fotoColor}`}
        >
          [FOTO]
        </span>
      </div>
      <div className="p-4.5 pb-5 flex flex-col gap-2">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-muted text-[13px] leading-relaxed">{summary}</p>
      </div>

      {highlights.length > 0 && (
        <>
          {/* Panel de highlights */}
          <div
            aria-hidden={!open}
            className={`absolute inset-0 z-10 bg-canvas p-5 pr-14 flex flex-col gap-2.5 overflow-y-auto transition-transform duration-300 ease-out ${
              open ? "translate-y-0" : "translate-y-[103%]"
            }`}
          >
            <h4 className="font-bold text-base">{name}</h4>
            <ul className="flex flex-col gap-2">
              {highlights.map((h) => (
                <li
                  key={h}
                  className="text-[13px] leading-snug text-muted flex gap-2"
                >
                  <span className="text-purple font-bold shrink-0">✦</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* El click lo maneja la card completa; el botón queda como
              affordance visual y control accesible por teclado (su click burbujea) */}
          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? `Cerrar perfil de ${name}` : `Ver perfil completo de ${name}`}
            className="absolute top-3 right-3 z-20 size-9 rounded-full bg-canvas border-2 border-ink flex items-center justify-center shadow-[2px_2px_0_0_#1c1a17] transition-transform duration-300"
            style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M7 1V13M1 7H13"
                stroke="#1c1a17"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </>
      )}
    </li>
  );
}
