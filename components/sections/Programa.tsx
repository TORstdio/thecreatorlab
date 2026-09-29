import ModuleRow from "@/components/ModuleRow";
import { modulos } from "@/lib/programa";

export default function Programa() {
  return (
    <section
      id="modulos"
      data-cursor="butter"
      className="grain bg-purple py-24 px-6 md:px-14"
      aria-label="El programa"
    >
      <header
        data-reveal
        className="flex flex-wrap items-baseline justify-between gap-4 border-b-2 border-canvas pb-4"
      >
        <h2 className="font-display uppercase text-canvas text-[clamp(40px,5.2vw,74px)] leading-none">
          El programa
        </h2>
        <p className="font-script text-butter text-[clamp(30px,3.2vw,46px)] leading-none">
          7 módulos, 17 clases
        </p>
      </header>

      <ol>
        {modulos.map((m, i) => (
          <ModuleRow key={m.tag} {...m} last={i === modulos.length - 1} />
        ))}
      </ol>
    </section>
  );
}
