const logros: [string, string, string, string][] = [
  ["01", "bg-purple", "text-canvas", "Una propuesta clara"],
  ["02", "bg-pink", "text-ink", "Criterio para poner precio a tu trabajo"],
  ["03", "bg-mint", "text-ink", "Entender qué dicen tus métricas"],
  ["04", "bg-blue", "text-ink", "Saber trabajar con marcas"],
  ["05", "bg-butter", "text-ink", "Crear contenido con objetivos claros"],
  ["06", "bg-ink", "text-canvas", "Una operación profesional"],
];

const tilts = ["-rotate-[0.4deg]", "rotate-[0.5deg]", "-rotate-[0.5deg]", "rotate-[0.4deg]", "-rotate-[0.3deg]", "rotate-[0.6deg]"];

export default function Logros() {
  return (
    <section
      id="logros"
      data-cursor="purple"
      className="bg-canvas py-24 px-6 md:px-14 bg-[linear-gradient(rgba(92,90,246,0.10)_1px,transparent_1px)] bg-[size:100%_34px]"
      aria-label="Qué vas a lograr"
    >
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="lg:w-[520px] shrink-0 flex flex-col gap-5 lg:sticky lg:top-10 self-start">
          <p
            data-reveal
            className="font-narrow font-bold text-[13px] tracking-[0.22em] text-purple"
          >
            QUÉ VAS A LOGRAR
          </p>
          <h2
            data-reveal
            className="font-display uppercase text-ink text-[clamp(34px,3.3vw,46px)] leading-none"
          >
            Necesitas
            <br />
            más que
            <span className="mt-2 inline-block bg-pink border-[1.5px] border-dashed border-ink px-2 py-2 rounded-xl">
              buen contenido.
            </span>
          </h2>
          <p
            data-reveal
            className="font-serif-d italic text-muted text-[21px] leading-[1.45]"
          >
            Para construir una carrera como creador, esto es lo que el Playbook
            te deja:
          </p>
        </div>

        <ul className="grow flex flex-col gap-3.5">
          {logros.map(([num, bg, fg, txt], i) => (
            <li
              key={num}
              data-reveal
              className={`sticker ${tilts[i]} flex items-center gap-5 bg-white border-2 border-ink rounded-xl px-6 py-5 shadow-[4px_4px_0_0_#1c1a17]`}
            >
              <span
                className={`${bg} ${fg} rounded-full px-3.5 py-1.5 font-narrow font-bold text-[13px]`}
              >
                {num}
              </span>
              <span className="font-semibold text-[19px]">{txt}</span>
            </li>
          ))}
          <li
            data-reveal
            className="border-[1.5px] border-dashed border-ink rounded-lg px-4.5 py-3 bg-white/60 font-narrow font-semibold text-[13px] text-muted"
          >
            ✦ Lo que firmas puede durar más que la campaña. Aquí aprendes a
            leerlo antes.
          </li>
        </ul>
      </div>
    </section>
  );
}
