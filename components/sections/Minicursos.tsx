import Image from "next/image";
import Link from "next/link";
import { metaMinicurso, minicursos } from "@/lib/minicursos";

/** Franja de la landing: conecta las páginas de cada módulo vendido por separado. */
export default function Minicursos() {
  return (
    <section id="minicursos" data-cursor="purple" className="bg-canvas py-24 px-6 md:px-14 flex flex-col gap-12" aria-label="Módulos por separado">
      <header data-reveal className="flex flex-wrap items-baseline justify-between gap-4">
        <h2 className="font-display uppercase text-ink text-[clamp(36px,4.4vw,62px)] leading-none">
          ¿Solo necesitas una parte?
        </h2>
        <p className="font-serif-d italic text-muted text-xl">Toma un módulo por separado</p>
      </header>
      <ul data-reveal className="grid md:grid-cols-3 gap-6">
        {minicursos.map((m) => (
          <li key={m.slug}>
            <Link href={`/${m.slug}`} className="group flex flex-col gap-4">
              <span className="block overflow-hidden rounded-[18px] border-2 border-ink shadow-[4px_4px_0_0_#1c1a17] transition-[transform,box-shadow] duration-200 ease-out group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:shadow-[6px_6px_0_0_#1c1a17]">
                <Image src={m.portada} alt="" sizes="(min-width: 768px) 33vw, 100vw" className="w-full h-auto" />
              </span>
              <span className="flex items-start justify-between gap-4">
                <span>
                  <span className="block font-bold text-lg text-ink">{m.promesa}</span>
                  <span className="block font-narrow font-semibold text-[13px] tracking-[0.1em] uppercase text-muted mt-1">
                    {metaMinicurso(m)}
                  </span>
                </span>
                <span aria-hidden="true" className={`${m.acento} shrink-0 size-10 rounded-full border-2 border-ink flex items-center justify-center font-bold`}>
                  →
                </span>
              </span>
              <span className="sr-only">Ver {m.nombre}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
