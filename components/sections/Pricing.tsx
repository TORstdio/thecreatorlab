import { Check } from "@/components/icons";
import CheckoutLink from "@/components/CheckoutLink";

const beneficios = [
  "4 instructores + invitados de la industria",
  "7 módulos · 17 clases · 100% online",
  "Acceso de por vida + recursos descargables",
];

export default function Pricing() {
  return (
    <section
      id="inscripcion"
      data-cursor="butter"
      className="bg-ink py-24 px-6 md:px-14 flex justify-center"
      aria-label="Inscripción"
    >
      <div
        data-reveal
        data-cursor="purple"
        className="w-full max-w-[900px] bg-canvas rounded-[20px] overflow-hidden flex flex-col md:flex-row shadow-[0_30px_80px_rgba(92,90,246,0.35)]"
      >
        <div className="grow p-8 md:p-12 flex flex-col gap-4.5">
          <p className="font-narrow font-bold text-[13px] tracking-[0.2em] text-purple">
            THE CREATOR PLAYBOOK
          </p>
          <h2 className="font-serif-d text-ink text-[clamp(28px,2.9vw,40px)] leading-[1.1] text-balance">
            Todo lo que necesitas para entender la industria y profesionalizar
            tu carrera.
          </h2>
          <ul className="flex flex-col gap-2.5 pt-1.5">
            {beneficios.map((b) => (
              <li key={b} className="flex items-center gap-3 text-[15px] font-medium">
                <Check className="text-purple shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div
          aria-hidden="true"
          className="hidden md:block self-stretch border-l-2 border-dashed border-ink"
        />
        <div
          aria-hidden="true"
          className="md:hidden mx-6 border-t-2 border-dashed border-ink"
        />

        <div
          data-cursor="butter"
          className="grain bg-purple md:w-[300px] shrink-0 p-9 md:p-10 flex flex-col items-center justify-center gap-3.5 text-center"
        >
          <span className="bg-mint text-ink border-2 border-ink rounded-full px-4 py-1.5 font-narrow font-bold text-xs tracking-[0.08em]">
            PRECIO ESPECIAL
          </span>
          <p className="font-narrow font-bold text-sm tracking-[0.12em] text-canvas/80 line-through">
            $249 USD
          </p>
          <p className="font-display text-canvas text-[74px] leading-none">
            $129
            <span className="sr-only"> dólares</span>
          </p>
          <p className="font-narrow font-semibold text-sm tracking-[0.1em] text-canvas/85">
            USD · LANZAMIENTO
          </p>
          <CheckoutLink
            target="_blank"
            data-cursor="purple"
            className="btn-hard mt-1.5 bg-butter text-ink border-2 border-ink rounded-full px-8 py-[15px] text-base font-bold shadow-[3px_3px_0_0_#1c1a17]"
          >
            Inscribirme
          </CheckoutLink>
          <p className="font-narrow font-semibold text-xs tracking-[0.08em] text-canvas/80">
            ACCESO ONLINE · PAGO SEGURO
          </p>
        </div>
      </div>
    </section>
  );
}
