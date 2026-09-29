import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Cursor from "@/components/Cursor";
import TermsModal from "@/components/TermsModal";
import BarraPago from "@/components/checkout/BarraPago";
import { ComoFunciona, Garantias, InstructoresAvatares } from "@/components/checkout/Confianza";
import { OrdenDesktop, OrdenMovil } from "@/components/checkout/Orden";
import { TemarioAcordeon, TemarioLista } from "@/components/checkout/Temario";
import logo from "@/public/logo-creator-lab.png";

export const metadata: Metadata = {
  title: "Inscripción — The Creator Playbook",
  description: "Revisa el temario completo de The Creator Playbook y asegura tu lugar.",
  // Página puente al pago: no debe competir con la home en buscadores.
  robots: { index: false, follow: false },
};

const chips = ["7 MÓDULOS", "17 CLASES", "2 CREATOR TALKS", "100% ONLINE · A TU RITMO"];

export default function Inscripcion() {
  return (
    <>
      <header data-cursor="butter" className="bg-purple">
        <div className="flex items-center justify-between px-5 lg:px-14 py-3 lg:py-4">
          <Link href="/" aria-label="The Creator Lab — ver página completa">
            <Image src={logo} alt="The Creator Lab" className="h-8 lg:h-10 w-auto" priority />
          </Link>
          <p className="hidden lg:block font-narrow font-semibold text-[13px] tracking-[0.22em] text-canvas/85">
            CHECKOUT · THE CREATOR PLAYBOOK
          </p>
          <Link
            href="/"
            className="font-semibold text-[13px] lg:text-sm text-canvas hover:text-butter transition-colors"
          >
            <span aria-hidden="true" className="hidden lg:inline">
              ←{" "}
            </span>
            Ver página completa
          </Link>
        </div>
      </header>

      <main data-cursor="purple" className="grow pb-24 lg:pb-0">
        <div className="lg:hidden px-4 pt-5">
          <OrdenMovil />
        </div>

        <div className="px-5 lg:px-14 pt-8 lg:pt-16 pb-8 lg:pb-20 lg:grid lg:grid-cols-[minmax(0,1fr)_440px] lg:gap-16 lg:items-start">
          <section aria-labelledby="temario" className="flex flex-col gap-4 lg:gap-6">
            <p className="font-narrow font-bold text-xs lg:text-[13px] tracking-[0.22em] text-purple">
              EL TEMARIO <span className="hidden lg:inline">COMPLETO</span>
            </p>
            <h1 id="temario" className="leading-none">
              <span className="block font-serif-d text-ink text-[38px] lg:text-[60px]">
                Todo el Playbook,
              </span>
              <span className="block font-script text-purple text-[38px] lg:text-[60px] leading-[1.15]">
                en un vistazo.
              </span>
            </h1>
            <p className="hidden lg:block max-w-[600px] text-base leading-[1.55] text-muted">
              7 módulos y 2 Creator Talks para profesionalizar tu carrera como creador. Revisa lo
              que vas a aprender y asegura tu lugar.
            </p>
            <ul className="hidden lg:flex flex-wrap gap-2.5">
              {chips.map((c) => (
                <li
                  key={c}
                  className="rounded-full border-[1.5px] border-dashed border-ink px-4 py-[7px] font-narrow font-bold text-xs tracking-[0.06em]"
                >
                  {c}
                </li>
              ))}
            </ul>
            <TemarioLista />
            <TemarioAcordeon />
          </section>

          <aside className="mt-8 lg:mt-0 lg:sticky lg:top-8 flex flex-col gap-[22px]">
            <div className="hidden lg:block">
              <OrdenDesktop />
            </div>
            <Garantias />
            <ComoFunciona />
            <InstructoresAvatares />
          </aside>
        </div>
      </main>

      <footer className="border-t border-ink/15 px-5 lg:px-14 py-6 flex flex-col lg:flex-row items-center justify-between gap-3 font-narrow font-semibold text-xs tracking-[0.08em] uppercase text-muted">
        <span>© 2026 The Creator Lab</span>
        <div className="flex items-center gap-4">
          <TermsModal triggerClassName="uppercase hover:text-ink transition-colors" />
          <span>Privacidad</span>
        </div>
        <a
          href="https://www.instagram.com/thecreatorlab.mx/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-ink transition-colors"
        >
          @thecreatorlab.mx
        </a>
      </footer>

      <BarraPago />
      <Cursor />
    </>
  );
}
