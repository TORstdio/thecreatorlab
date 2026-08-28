import Image from "next/image";
import logoPurple from "@/public/logo-creator-lab-purple.png";

const links = [
  ["#inicio", "Inicio"],
  ["#logros", "Qué vas a lograr"],
  ["#modulos", "Módulos"],
  ["#instructores", "Instructores"],
  ["#faq", "FAQ"],
] as const;

/**
 * Header fijo invertido (blanco). Arranca oculto arriba;
 * ScrollFx lo revela cuando el header original sale de vista.
 */
export default function StickyNav() {
  return (
    <div
      id="sticky-nav"
      data-cursor="purple"
      className="fixed inset-x-0 top-0 z-50 -translate-y-[110%] bg-canvas/95 backdrop-blur-sm border-b border-ink/10 shadow-[0_10px_30px_rgba(28,26,23,0.08)]"
    >
      <nav
        aria-label="Principal fija"
        className="flex items-center justify-between px-6 md:px-14 py-3"
      >
        <a href="#inicio" aria-label="The Creator Lab — inicio">
          <Image
            src={logoPurple}
            alt="The Creator Lab"
            className="h-9 w-auto"
          />
        </a>
        <ul className="hidden lg:flex items-center gap-8 font-narrow font-semibold text-[14px] tracking-[0.08em] uppercase text-ink">
          {links.map(([href, label]) => (
            <li key={href}>
              <a href={href} className="hover:text-purple transition-colors">
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#inscripcion"
          data-cursor="butter"
          className="btn-hard bg-purple text-canvas border-2 border-ink rounded-full px-6 py-2.5 text-[14px] font-bold shadow-[3px_3px_0_0_#1c1a17]"
        >
          Inscribirme
        </a>
      </nav>
    </div>
  );
}
