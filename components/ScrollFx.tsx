"use client";

import { useEffect } from "react";

/**
 * Motion layer: Lenis (smooth scroll) + GSAP ScrollTrigger.
 * Se carga de forma diferida tras la hidratación para no pesar en el bundle
 * inicial, y se desactiva por completo con prefers-reduced-motion.
 */
export default function ScrollFx() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    (async () => {
      const [{ gsap }, { ScrollTrigger }, { default: Lenis }] =
        await Promise.all([
          import("gsap"),
          import("gsap/ScrollTrigger"),
          import("lenis"),
        ]);
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);

      // En táctil (móvil/tablet) el scroll nativo con inercia ya es óptimo:
      // Lenis solo aplica en punteros finos (desktop)
      const isTouch = window.matchMedia("(pointer: coarse)").matches;

      let lenis: InstanceType<typeof Lenis> | null = null;
      let tick: ((time: number) => void) | null = null;
      let onAnchorClick: ((e: MouseEvent) => void) | null = null;

      if (!isTouch) {
        lenis = new Lenis({ lerp: 0.12 });
        lenis.on("scroll", ScrollTrigger.update);
        tick = (time: number) => lenis!.raf(time * 1000);
        gsap.ticker.add(tick);
        gsap.ticker.lagSmoothing(0);

        // Anclas del nav a través de Lenis (el scroll nativo pelea con él)
        onAnchorClick = (e: MouseEvent) => {
          const anchor = (e.target as HTMLElement).closest<HTMLAnchorElement>(
            'a[href^="#"]',
          );
          if (!anchor) return;
          const href = anchor.getAttribute("href")!;
          if (href === "#") return;
          let target: Element | null = null;
          try {
            target = document.querySelector(href);
          } catch {
            return; // selector inválido: dejar el comportamiento nativo
          }
          if (!target) return;
          e.preventDefault();
          lenis!.scrollTo(target as HTMLElement, { duration: 1.2 });
        };
        document.addEventListener("click", onAnchorClick);
      }

      const ctx = gsap.context(() => {
        // Intro del hero
        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .from('[data-hero="masthead"]', {
            opacity: 0,
            y: -12,
            duration: 0.6,
            stagger: 0.08,
          })
          .from(
            '[data-hero="line"]',
            { yPercent: 60, opacity: 0, duration: 0.9, stagger: 0.12 },
            "-=0.3",
          )
          .from(
            '[data-hero="stickers"] > *',
            {
              scale: 0,
              rotation: 12,
              duration: 0.5,
              stagger: 0.1,
              ease: "back.out(2)",
              // Al terminar, soltar el transform inline para que
              // la rotación CSS de cada sticker vuelva a aplicar
              clearProps: "transform,rotate,scale",
            },
            "-=0.4",
          )
          .from(
            '[data-hero="fade"]',
            { opacity: 0, y: 24, duration: 0.7, stagger: 0.1 },
            "-=0.2",
          );

        // Sticky nav invertido: reveal desde arriba al perder el header original
        const stickyNav = document.getElementById("sticky-nav");
        if (stickyNav) {
          gsap.set(stickyNav, { y: 0, yPercent: -110 });
          const show = () =>
            gsap.to(stickyNav, {
              yPercent: 0,
              duration: 0.55,
              ease: "power3.out",
            });
          const hide = () =>
            gsap.to(stickyNav, {
              yPercent: -110,
              duration: 0.45,
              ease: "power3.in",
            });
          ScrollTrigger.create({
            trigger: "#inicio",
            start: "220 top",
            onEnter: show,
            onLeaveBack: hide,
          });
        }

        // Globo de mensaje del footer: pop al entrar, se esconde al subir
        const bubble = document.getElementById("footer-bubble");
        if (bubble) {
          gsap.set(bubble, { scale: 0, transformOrigin: "35% 100%" });
          ScrollTrigger.create({
            trigger: "footer",
            start: "top 70%",
            onEnter: () =>
              gsap.to(bubble, {
                scale: 1,
                duration: 0.65,
                ease: "back.out(1.9)",
              }),
            onLeaveBack: () =>
              gsap.to(bubble, { scale: 0, duration: 0.3, ease: "power2.in" }),
          });
        }

        // Reveals al hacer scroll
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          gsap.from(el, {
            opacity: 0,
            y: 36,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 95%", once: true },
          });
        });
      });

      // Recalcular posiciones cuando cargan fuentes/imágenes
      window.addEventListener("load", () => ScrollTrigger.refresh(), {
        once: true,
      });

      // La página cambia de altura (acordeones de módulos, FAQ, cards):
      // recalcular el límite de Lenis y los triggers cuando eso pase
      let resizeDebounce = 0;
      const heightObserver = new ResizeObserver(() => {
        window.clearTimeout(resizeDebounce);
        resizeDebounce = window.setTimeout(() => {
          lenis?.resize();
          ScrollTrigger.refresh();
        }, 250);
      });
      heightObserver.observe(document.body);

      cleanup = () => {
        heightObserver.disconnect();
        window.clearTimeout(resizeDebounce);
        if (onAnchorClick) document.removeEventListener("click", onAnchorClick);
        ctx.revert();
        if (tick) gsap.ticker.remove(tick);
        lenis?.destroy();
      };
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return null;
}
