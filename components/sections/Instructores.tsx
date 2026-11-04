import InstructorCard from "@/components/InstructorCard";
import { instructores } from "@/lib/instructores";

export default function Instructores() {
  return (
    <section
      id="instructores"
      data-cursor="purple"
      className="bg-canvas py-24 px-6 md:px-14 flex flex-col gap-12"
      aria-label="Instructores"
    >
      <header
        data-reveal
        className="flex flex-wrap items-baseline justify-between gap-4"
      >
        <h2 className="font-display uppercase text-ink text-[clamp(36px,4.4vw,62px)] leading-none">
          Instructores
        </h2>
        <p className="font-serif-d italic text-muted text-xl">
          La gente que ya opera en la industria
        </p>
      </header>

      {/* Móvil: carrusel con swipe (scroll-snap). Tablet/desktop: grid */}
      <ul className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4.5 -mx-6 px-6 pb-2 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:overflow-visible sm:grid-cols-2 lg:grid-cols-4">
        {instructores.map((i) => (
          <InstructorCard key={i.name} {...i} />
        ))}
      </ul>
      <p
        aria-hidden="true"
        className="sm:hidden -mt-6 text-center font-narrow font-semibold text-[12px] tracking-[0.18em] uppercase text-muted"
      >
        Desliza para conocerlos →
      </p>
    </section>
  );
}
