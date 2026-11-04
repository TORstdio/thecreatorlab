import Image from "next/image";
import Link from "next/link";
import CheckoutLink from "@/components/CheckoutLink";
import Cursor from "@/components/Cursor";
import TermsModal from "@/components/TermsModal";
import BarraPago from "@/components/checkout/BarraPago";
import { ComoFunciona, Garantias } from "@/components/checkout/Confianza";
import CtaMinicurso from "@/components/minicurso/CtaMinicurso";
import HeroMinicurso from "@/components/minicurso/Hero";
import { instructores } from "@/lib/instructores";
import { metaMinicurso, minicursos, precioMinicurso, type Minicurso } from "@/lib/minicursos";
import { PRECIO } from "@/lib/oferta";

function Temario({ curso }: { curso: Minicurso }) {
  return (
    <section aria-labelledby="temario" className="flex flex-col gap-6">
      <p className="font-narrow font-bold text-[13px] tracking-[0.22em] text-purple">EL TEMARIO</p>
      <h2 id="temario" className="leading-none">
        <span className="block font-serif-d text-ink text-[40px] lg:text-[60px]">
          {curso.clases.length} clases,
        </span>
        <span className="block font-serif-d italic text-purple text-[40px] lg:text-[60px] leading-[1.1]">
          {curso.duracion.replace("~", "unos ").replace("min", "minutos")}.
        </span>
      </h2>
      <ol>
        {curso.clases.map((clase, i) => (
          <li
            key={clase.titulo}
            className="grid grid-cols-[auto_minmax(0,1fr)_auto] gap-x-4 lg:gap-x-5 py-5 border-t-[1.5px] border-dashed border-ink/40"
          >
            <span className={`${curso.acento} size-9 rounded-full border-2 border-ink flex items-center justify-center font-narrow font-bold text-sm`}>
              {i + 1}
            </span>
            <div className="flex flex-col gap-1">
              <h3 className="font-bold text-[17px] lg:text-[19px] leading-snug text-ink text-pretty">{clase.titulo}</h3>
              {clase.desc && <p className="text-[15px] leading-normal text-muted text-pretty">{clase.desc}</p>}
            </div>
            <span className="font-narrow font-semibold text-sm tracking-[0.06em] text-muted pt-1 tabular-nums">
              {clase.duracion}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Orden({ curso }: { curso: Minicurso }) {
  return (
    <div id="orden-movil" className="rounded-[20px] border-2 border-ink bg-white p-6 shadow-[6px_6px_0_0_#1c1a17] flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Image src={curso.portada} alt="" sizes="88px" className="size-[88px] rounded-[10px] shrink-0" />
        <div>
          <p className="font-narrow font-bold text-xs tracking-[0.16em] text-purple">THE CREATOR PLAYBOOK</p>
          <p className="font-display uppercase text-ink text-[28px] leading-none mt-1">{curso.nombre}</p>
          <p className="text-[13px] text-muted mt-1.5">{metaMinicurso(curso)}</p>
        </div>
      </div>
      <hr className="border-t-[1.5px] border-dashed border-ink/40" />
      <div className="flex items-baseline justify-between">
        <span className="font-bold text-ink">Total</span>
        <span className="font-display text-ink text-[36px] leading-none">
          {precioMinicurso()} <span className="font-narrow font-bold text-sm">USD</span>
        </span>
      </div>
      <CtaMinicurso
        curso={curso}
        data-cursor="purple"
        className={`btn-hard ${curso.acento} text-ink text-center border-2 border-ink rounded-full px-7 py-4 text-[17px] font-bold shadow-[3px_3px_0_0_#1c1a17]`}
      >
        Comprar este curso
      </CtaMinicurso>
      <p className="text-center text-xs text-muted">Te llevamos al checkout seguro de Hotmart</p>
    </div>
  );
}

function Instructores({ curso }: { curso: Minicurso }) {
  const lista = instructores.filter((i) => curso.instructores.includes(i.name));
  return (
    <section aria-labelledby="quien" className="px-5 lg:px-14 pb-20 lg:pb-24 max-w-[1280px] mx-auto w-full flex flex-col gap-8">
      <h2 id="quien" className="font-display uppercase text-ink text-[clamp(32px,3.8vw,52px)] leading-none">
        Quién te lo enseña
      </h2>
      <ul className="grid md:grid-cols-3 gap-5">
        {lista.map((i) => (
          <li key={i.name} className="flex items-center gap-4 rounded-[18px] border-[1.5px] border-dashed border-ink p-4">
            {i.photo && (
              <Image src={i.photo} alt="" sizes="88px" className="size-[88px] rounded-full object-cover shrink-0" />
            )}
            <div>
              <p className="font-bold text-[17px] text-ink">{i.name}</p>
              <p className="text-[14px] leading-snug text-muted text-pretty">{i.summary}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

/** Empuja la venta suelta hacia el curso completo. */
function SubirAlCompleto({ curso }: { curso: Minicurso }) {
  return (
    <section data-cursor="butter" className="grain bg-purple px-5 lg:px-14 py-20 lg:py-24" aria-labelledby="completo">
      <div className="max-w-[1280px] mx-auto grid lg:grid-cols-[minmax(0,1fr)_auto] gap-12 lg:gap-16 items-center">
        <div className="flex flex-col items-start gap-5">
          <p className="rounded-full border-[1.5px] border-dashed border-canvas/80 px-4 py-2 font-narrow font-bold text-[13px] tracking-[0.14em] text-canvas">
            ESTE MÓDULO ES PARTE DEL PLAYBOOK
          </p>
          <h2 id="completo" className="font-display uppercase text-canvas leading-[0.94] text-[clamp(30px,4.6vw,66px)]">
            Llévate los 3
            <span className="block whitespace-nowrap text-stroke-cream">+ casos reales</span>
          </h2>
          <p className="font-display text-butter text-[clamp(26px,2.8vw,40px)] leading-none">por ${PRECIO} USD</p>
          <CheckoutLink
            data-cursor="purple"
            className="btn-hard mt-2 bg-butter text-ink border-2 border-ink rounded-full px-9 py-4 text-[17px] font-bold shadow-[4px_4px_0_0_#1c1a17]"
          >
            Quiero el Playbook completo
          </CheckoutLink>
          <Link href="/#modulos" className="text-sm font-semibold text-canvas underline underline-offset-4 hover:text-butter transition-colors">
            Ver todo lo que incluye
          </Link>
        </div>
        <ul className="flex justify-center lg:pr-8">
          {minicursos.map((m, i) => (
            <li key={m.slug} className={`${i > 0 ? "-ml-16 sm:-ml-20" : ""} ${["-rotate-6", "rotate-1 -translate-y-3 relative z-[1]", "rotate-6"][i]}`}>
              <Link href={`/${m.slug}`} aria-label={`Ver ${m.nombre}`} aria-current={m.slug === curso.slug ? "page" : undefined}>
                <Image
                  src={m.portada}
                  alt=""
                  sizes="240px"
                  className="w-[150px] sm:w-[230px] rounded-[14px] border-2 border-ink shadow-[4px_4px_0_0_#1c1a17]"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-canvas border-t border-ink/15 px-5 lg:px-14 py-6 pb-28 lg:pb-6 flex flex-col lg:flex-row items-center justify-between gap-3 font-narrow font-semibold text-xs tracking-[0.08em] uppercase text-muted">
      <span>© 2026 The Creator Lab</span>
      <TermsModal triggerClassName="uppercase hover:text-ink transition-colors" />
      <a href="https://www.instagram.com/thecreatorlab.mx/" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">
        @thecreatorlab.mx
      </a>
    </footer>
  );
}

export default function PaginaMinicurso({ curso }: { curso: Minicurso }) {
  return (
    <>
      <main data-cursor="purple" className="grow bg-canvas">
        <HeroMinicurso curso={curso} />
        <div id="comprar" className="px-5 lg:px-14 pt-14 lg:pt-20 pb-16 lg:pb-24 max-w-[1280px] mx-auto w-full lg:grid lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-16 lg:items-start">
          <Temario curso={curso} />
          <aside className="mt-10 lg:mt-0 lg:sticky lg:top-8 flex flex-col gap-6">
            <Orden curso={curso} />
            <Garantias />
            <ComoFunciona />
          </aside>
        </div>
        <Instructores curso={curso} />
        <SubirAlCompleto curso={curso} />
      </main>
      <Pie />
      <BarraPago precio={`${precioMinicurso()} USD`} detalle={metaMinicurso(curso)}>
        <CtaMinicurso
          curso={curso}
          data-cursor="purple"
          className={`btn-hard ${curso.acento} text-ink border-2 border-ink rounded-full px-6 py-3 text-[15px] font-bold`}
        >
          Comprar
        </CtaMinicurso>
      </BarraPago>
      <Cursor />
    </>
  );
}
