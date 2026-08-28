import TermsModal from "@/components/TermsModal";

export default function Footer() {
  return (
    <footer
      data-cursor="butter"
      className="grain bg-purple pt-24 pb-11 px-6 md:px-14"
    >
      <div className="flex flex-col items-center text-center gap-6.5">
        {/* Globo de mensaje: aparece con pop al llegar al footer (ScrollFx) */}
        <div id="footer-bubble" className="relative mb-2">
          <div className="-rotate-2 flex items-end gap-2.5">
            <div className="relative bg-white border-[1.5px] border-dashed border-ink rounded-3xl px-7 py-4 text-left">
              <p className="text-purple font-semibold text-[15px] leading-tight lowercase">
                the creator lab
              </p>
              <p className="text-ink font-bold text-[clamp(20px,2.2vw,26px)] leading-tight">
                ¡Nos vemos prontoooo! 👋
              </p>
              <svg
                aria-hidden="true"
                className="absolute -bottom-[15px] left-10"
                width="26"
                height="16"
                viewBox="0 0 26 16"
              >
                <path
                  d="M1 0 L13 15 L25 0"
                  fill="#ffffff"
                  stroke="#1c1a17"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />
                <path d="M2 0 L24 0" stroke="#ffffff" strokeWidth="3" />
              </svg>
            </div>
            <span className="rotate-3 bg-white border-[1.5px] border-dashed border-ink rounded-2xl px-3.5 py-2 text-lg">
              👀
            </span>
          </div>
        </div>
        <span

          className="border-[1.5px] border-dashed border-canvas/70 text-canvas rounded-full px-5 py-2 font-narrow font-semibold text-[13px] tracking-[0.18em]"
        >
          *CALLING OUT FOR CREATORS
        </span>
        <p

          className="font-display uppercase leading-[0.94] text-[clamp(44px,5.9vw,84px)]"
        >
          <span className="block text-canvas">From creator</span>
          <span className="block text-stroke-cream">to career.</span>
        </p>
        <a
          href="#inscripcion"
          data-cursor="purple"
          className="btn-hard bg-butter text-ink border-2 border-ink rounded-full px-11 py-[19px] text-lg font-bold shadow-[4px_4px_0_0_#1c1a17]"
        >
          Quiero entrar al Playbook
        </a>
      </div>

      <div className="mt-20 pt-6 border-t border-canvas/40 flex flex-col md:flex-row items-center justify-between gap-4 font-narrow font-semibold text-[13px] tracking-[0.06em] uppercase text-canvas/75">
        <span>The Creator Lab</span>
        <ul className="flex flex-wrap justify-center gap-6">
          <li>© 2026 Derechos Reservados</li>
          {/* Sin contenido aún: inerte a propósito */}
          <li>Privacidad</li>
          <li>
            <TermsModal />
          </li>
        </ul>
        <a
          href="https://www.instagram.com/thecreatorlab.mx/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-canvas transition-colors"
        >
          @thecreatorlab.mx
        </a>
      </div>
    </footer>
  );
}
