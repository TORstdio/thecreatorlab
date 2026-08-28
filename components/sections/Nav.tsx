import Image from "next/image";
import logo from "@/public/logo-creator-lab.png";

const links = [
  ["#inicio", "Inicio"],
  ["#logros", "Qué vas a lograr"],
  ["#modulos", "Módulos"],
  ["#instructores", "Instructores"],
  ["#faq", "FAQ"],
] as const;

export default function Nav() {
  return (
    <header>
      <nav
        aria-label="Principal"
        className="flex items-center justify-between px-6 md:px-14 py-5"
      >
        <a href="#inicio" aria-label="The Creator Lab — inicio">
          <Image
            src={logo}
            alt="The Creator Lab"
            className="h-10 md:h-12 w-auto"
            priority
          />
        </a>
        <ul className="hidden lg:flex items-center gap-8 font-narrow font-semibold text-[15px] tracking-[0.08em] uppercase text-canvas">
          {links.map(([href, label]) => (
            <li key={href}>
              <a href={href} className="hover:text-butter transition-colors">
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#inscripcion"
          data-cursor="purple"
          className="btn-hard bg-butter text-ink border-2 border-ink rounded-full px-6 py-3 text-[15px] font-bold shadow-[3px_3px_0_0_#1c1a17]"
        >
          Inscribirme
        </a>
      </nav>
    </header>
  );
}
