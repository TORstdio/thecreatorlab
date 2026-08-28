import { PlayTriangle } from "@/components/icons";
import Nav from "@/components/sections/Nav";
import CreatorReel from "@/components/CreatorReel";

export default function Hero() {
  return (
    <section
      id="inicio"
      data-cursor="butter"
      className="relative bg-purple pb-14 overflow-hidden"
      aria-label="The Creator Playbook"
    >
      {/* Overlay oscuro + grain animado sobre header y hero */}
      <div className="hero-overlay" aria-hidden="true" />

      <Nav />

      {/* Masthead */}
      <div className="border-y-[1.5px] border-canvas/50 py-2.5 px-6 md:px-14 grid grid-cols-2 md:grid-cols-3 items-center font-narrow font-semibold text-[11px] md:text-[13px] tracking-[0.22em] text-canvas/90">
        {/* Móvil: lo más relevante */}
        <span
          data-hero="masthead"
          className="md:hidden justify-self-start whitespace-nowrap text-[10px] tracking-[0.16em]"
        >
          THE CREATOR PLAYBOOK
        </span>
        <span
          data-hero="masthead"
          className="md:hidden justify-self-end whitespace-nowrap text-[10px] tracking-[0.16em]"
        >
          EDITION 01
        </span>
        {/* Desktop */}
        <span data-hero="masthead" className="hidden md:block justify-self-start">
          *CALLING OUT FOR CREATORS
        </span>
        <span data-hero="masthead" className="hidden md:block justify-self-center text-center">
          THE CREATOR PLAYBOOK — EDITION 01
        </span>
        <span data-hero="masthead" className="hidden md:block justify-self-end">
          2026
        </span>
      </div>

      <div className="flex flex-col items-center text-center px-6 md:px-14">
        {/* Headline */}
        <h1 className="pt-9 md:pt-11 font-display uppercase leading-[0.92] tracking-[-0.01em] text-canvas text-[clamp(40px,6.9vw,98px)]">
          <span data-hero="line" className="block">
            Crear contenido
          </span>
          <span
            data-hero="line"
            className="flex flex-wrap items-center justify-center gap-x-6"
          >
            <span className="text-stroke-cream">es solo</span>
            <span className="font-script normal-case text-butter -rotate-3 text-[clamp(44px,7vw,100px)] leading-none mt-2">
              el comienzo
            </span>
          </span>
        </h1>

        {/* Stickers */}
        <div className="flex items-center gap-3.5 pt-7" data-hero="stickers">
          <span className="sticker rotate-2 bg-pink text-ink border-[1.5px] border-dashed border-ink rounded-xl px-5 py-2 font-narrow font-bold text-sm tracking-[0.04em] shadow-[2px_2px_0_0_#1c1a17]">
            FROM CREATOR
          </span>
          <CreatorReel />
          <span className="sticker -rotate-[1.5deg] bg-mint text-ink border-[1.5px] border-dashed border-ink rounded-xl px-5 py-2 font-narrow font-bold text-sm tracking-[0.04em] shadow-[2px_2px_0_0_#1c1a17]">
            TO CAREER
          </span>
        </div>

        {/* Sub + support */}
        <p
          data-hero="fade"
          className="pt-6 font-serif-d italic text-canvas/95 text-[clamp(19px,2vw,24px)] leading-[1.4] max-w-2xl text-balance"
        >
          Si quieres construir una carrera como creador, empieza entendiendo
          cómo funciona la industria.
        </p>
        <p
          data-hero="fade"
          className="pt-3.5 text-canvas/75 text-base leading-relaxed max-w-xl"
        >
          Aprende a definir tu valor, cobrar, entender tus métricas y trabajar
          mejor con marcas.
        </p>

        {/* CTAs */}
        <div
          data-hero="fade"
          className="flex flex-col sm:flex-row gap-3.5 pt-7"
        >
          <a
            href="#inscripcion"
            data-cursor="purple"
            className="btn-hard bg-butter text-ink border-2 border-ink rounded-full px-10 py-[18px] text-[17px] font-bold shadow-[4px_4px_0_0_#1c1a17]"
          >
            Quiero entrar
          </a>
          <a
            href="#modulos"
            data-cursor="purple"
            className="flex items-center justify-center gap-2.5 border-2 border-canvas text-canvas rounded-full px-10 py-[18px] text-[17px] font-semibold hover:bg-canvas hover:text-ink transition-colors"
          >
            <PlayTriangle />
            Ver el programa
          </a>
        </div>
      </div>
    </section>
  );
}
