"use client";

import { useEffect, useRef } from "react";

const COLORS = {
  butter: "#e9e47a",
  purple: "#5c5af6",
} as const;

/**
 * Cursor personalizado: punto instantáneo + anillo con lag (lerp).
 * Cambia de color según la sección (data-cursor="butter|purple")
 * y crece como máscara translúcida sobre elementos interactivos.
 * Solo puntero fino (desktop); off con prefers-reduced-motion.
 */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;

    const dot = dotRef.current!;
    const ring = ringRef.current!;
    document.documentElement.classList.add("custom-cursor");

    let tx = innerWidth / 2;
    let ty = innerHeight / 2;
    let rx = tx;
    let ry = ty;
    let visible = false;

    const setColor = (name: keyof typeof COLORS) => {
      const c = COLORS[name];
      dot.style.backgroundColor = c;
      ring.style.borderColor = c;
      ring.style.backgroundColor = `${c}26`; // ~15% alpha
    };
    setColor("butter");

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!visible) {
        visible = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
        rx = tx;
        ry = ty;
      }
      const el = e.target as HTMLElement;
      const zone = el.closest<HTMLElement>("[data-cursor]");
      setColor(
        zone?.dataset.cursor === "butter" ? "butter" : "purple",
      );
      const interactive = el.closest("a, button, summary, [role=button]");
      ring.style.width = ring.style.height = interactive ? "64px" : "38px";
      dot.style.opacity = interactive ? "0" : "1";
    };
    const onLeave = () => {
      visible = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    let raf = 0;
    const loop = () => {
      rx += (tx - rx) * 0.16;
      ry += (ty - ry) * 0.16;
      dot.style.transform = `translate(${tx}px, ${ty}px) translate(-50%, -50%)`;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.classList.remove("custom-cursor");
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="cursor-dot fixed left-0 top-0 z-[100] size-3.5 rounded-full pointer-events-none opacity-0 transition-[background-color,opacity] duration-200"
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="cursor-ring fixed left-0 top-0 z-[100] size-[38px] rounded-full border-[1.5px] pointer-events-none opacity-0 transition-[background-color,border-color,width,height,opacity] duration-300"
      />
    </>
  );
}
