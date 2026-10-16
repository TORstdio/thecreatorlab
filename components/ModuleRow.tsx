"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { ModuleClass } from "@/lib/programa";

type Props = {
  tag: string;
  title: string;
  desc: string;
  count: string;
  classes: ModuleClass[];
  last?: boolean;
};

/**
 * Fila de módulo del programa: acordeón que despliega
 * las clases con animación de altura (grid-rows 0fr→1fr).
 */
export default function ModuleRow({
  tag,
  title,
  desc,
  count,
  classes,
  last = false,
}: Props) {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState<string>("0px");
  const panelRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    const el = panelRef.current;
    if (!el) return;
    if (!open) {
      // abrir: 0 → altura real (al terminar la transición se libera a auto)
      setHeight(`${el.scrollHeight}px`);
    } else {
      // cerrar: auto → px → 0 (dos frames para que transicione)
      setHeight(`${el.scrollHeight}px`);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setHeight("0px"));
      });
    }
    setOpen((v) => !v);
  };

  return (
    <li
      data-reveal
      className={`border-canvas/45 ${last ? "border-b-2 border-b-canvas" : "border-b"}`}
    >
      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        className="w-full text-left flex flex-col md:flex-row md:items-baseline gap-2 md:gap-7 py-6"
      >
        <span className="font-narrow font-bold text-sm tracking-[0.14em] text-butter md:w-[90px] shrink-0">
          {tag}
        </span>
        <span className="grow flex flex-col gap-1.5">
          <span className="font-serif-d text-canvas text-[clamp(22px,2.1vw,30px)] leading-tight">
            {title}
          </span>
          <span className="text-canvas/70 text-sm leading-relaxed max-w-3xl">
            {desc}
          </span>
        </span>
        <span className="flex items-center gap-4 shrink-0">
          <span className="font-narrow font-semibold text-[13px] text-canvas/80">
            {count}
          </span>
          <span
            className="size-8 rounded-full border-[1.5px] border-canvas/70 flex items-center justify-center transition-transform duration-300"
            style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
            aria-hidden="true"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M6 1V11M1 6H11"
                stroke="#f5f2e9"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </span>
      </button>

      <div
        ref={panelRef}
        className="overflow-hidden transition-[height] duration-400 ease-out"
        style={{ height }}
        onTransitionEnd={() => {
          if (open) setHeight("auto");
        }}
        aria-hidden={!open}
      >
        <ul className="pb-7 md:pl-[118px] flex flex-col gap-4 max-w-3xl">
          {classes.map((c) => (
            <li key={c.title} className="flex items-start gap-3.5">
              {c.avatar && (
                <Image
                  src={c.avatar}
                  alt={`Foto de ${c.tag}`}
                  width={48}
                  height={48}
                  className="size-12 max-w-none rounded-full object-cover border-2 border-canvas shrink-0 mt-1"
                />
              )}
              {!c.avatar && c.initial && (
                <span
                  aria-hidden="true"
                  className="size-12 rounded-full border-2 border-canvas bg-pink text-ink font-narrow font-bold text-lg flex items-center justify-center shrink-0 mt-1"
                >
                  {c.initial}
                </span>
              )}
              <span className="flex flex-col gap-1">
                <span className="font-narrow font-bold text-xs tracking-[0.16em] text-butter">
                  {c.tag}
                  {c.ig && (
                    <>
                      {" · "}
                      <a
                        href={`https://instagram.com/${c.ig}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="normal-case tracking-normal underline underline-offset-2 hover:text-canvas"
                      >
                        @{c.ig}
                      </a>
                    </>
                  )}
                </span>
                <span className="text-canvas font-semibold text-[16px] leading-snug">
                  {c.title}
                </span>
                <span className="text-canvas/65 text-sm leading-relaxed">
                  {c.desc}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
