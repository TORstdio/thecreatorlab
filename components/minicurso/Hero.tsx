import Image from "next/image";
import Link from "next/link";
import CtaMinicurso from "@/components/minicurso/CtaMinicurso";
import { metaMinicurso, precioMinicurso, type Minicurso } from "@/lib/minicursos";
import logo from "@/public/logo-creator-lab.png";

function Fondo({ curso }: { curso: Minicurso }) {
  return (
    <>
      <div className="blend-fondo" aria-hidden="true">
        <Image src={curso.portada} alt="" sizes="100vw" />
      </div>
      <div className="hero-overlay" aria-hidden="true" />
    </>
  );
}

function Migas({ curso }: { curso: Minicurso }) {
  return (
    <nav aria-label="Migas" className="flex items-center gap-3 font-narrow font-semibold text-[13px] tracking-[0.1em] uppercase text-canvas">
      <Link
        href="/"
        aria-label="Volver a The Creator Playbook"
        className="size-9 rounded-full bg-canvas/15 backdrop-blur-md flex items-center justify-center hover:bg-canvas/25 transition-colors"
      >
        ←
      </Link>
      <Link href="/" className="text-canvas/70 hover:text-canvas transition-colors">
        The Creator Playbook
      </Link>
      <span aria-hidden="true" className="text-canvas/50">/</span>
      <span>{curso.nombre}</span>
    </nav>
  );
}

function Precio() {
  return (
    <p className="font-display text-[38px] leading-none text-canvas">
      {precioMinicurso()}
      <span className="ml-1.5 font-narrow font-bold text-sm tracking-[0.1em]">USD</span>
    </p>
  );
}

function Boton({ curso }: { curso: Minicurso }) {
  return (
    <CtaMinicurso
      curso={curso}
      data-cursor="purple"
      className={`btn-hard ${curso.acento} text-ink whitespace-nowrap border-2 border-ink rounded-full font-bold shadow-[3px_3px_0_0_#1c1a17] px-9 py-4 text-[17px]`}
    >
      Comprar este curso
    </CtaMinicurso>
  );
}

/** Titular y compra a la izquierda, portada como sticker a la derecha, sobre su propio blend. */
export default function HeroMinicurso({ curso }: { curso: Minicurso }) {
  return (
    <section data-cursor="butter" className="relative overflow-hidden" aria-label={curso.nombre}>
      <Fondo curso={curso} />
      <div className="px-5 lg:px-14 pt-5 pb-14 lg:pb-16 flex flex-col gap-8 lg:gap-10">
        <div className="flex items-center justify-between gap-4">
          <Migas curso={curso} />
          <Link href="/" aria-label="The Creator Lab" className="hidden sm:block">
            <Image src={logo} alt="" className="h-9 w-auto" priority />
          </Link>
        </div>
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] gap-10 lg:gap-14 items-center max-w-[1280px] w-full mx-auto">
          <div className="flex flex-col items-start gap-5">
            <h1 className="flex flex-col gap-2">
              <span className="font-display text-canvas text-[clamp(17px,1.7vw,24px)] tracking-[0.02em]">
                THE CREATOR PLAYBOOK:
              </span>
              <span className="font-display uppercase text-canvas leading-[0.86] tracking-[-0.02em] text-[clamp(84px,12.5vw,190px)]">
                {curso.nombre}
              </span>
            </h1>
            <p className="font-serif-d italic text-canvas text-[clamp(26px,2.8vw,40px)] leading-tight">
              {curso.promesa}
            </p>
            <p className="rounded-full border-[1.5px] border-dashed border-canvas/80 px-4 py-2 font-narrow font-bold text-[13px] tracking-[0.12em] uppercase text-canvas">
              {metaMinicurso(curso)} · 100% online
            </p>
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <Precio />
              <Boton curso={curso} />
            </div>
          </div>
          <Image
            src={curso.portada}
            alt=""
            priority
            sizes="(min-width: 1024px) 460px, 90vw"
            className="order-first lg:order-none w-full max-w-[270px] lg:max-w-none mx-auto rotate-2 rounded-[18px] border-2 border-ink shadow-[8px_8px_0_0_#1c1a17]"
          />
        </div>
      </div>
    </section>
  );
}
