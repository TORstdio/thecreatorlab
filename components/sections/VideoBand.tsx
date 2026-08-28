export default function VideoBand() {
  return (
    <section
      id="video"
      data-cursor="butter"
      className="bg-ink py-16 px-6 md:px-14"
      aria-label="Presentación del curso"
    >
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/*
          Placeholder del video de presentación.
          Al tener el asset final: reemplazar por <video poster=... preload="none"> o un embed lazy.
        */}
        <div
          data-reveal
          className="relative w-full lg:w-[54%] shrink-0 aspect-video rounded-lg border-2 border-canvas bg-[linear-gradient(160deg,#57a6db_0%,#5c5af6_60%,#4a48d8_100%)] flex items-center justify-center"
        >
          <button
            type="button"
            aria-label="Reproducir video de presentación"
            data-cursor="purple"
            className="btn-hard size-[84px] rounded-full bg-canvas flex items-center justify-center shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
          >
            <svg width="22" height="28" viewBox="0 0 22 28" fill="#1c1a17" aria-hidden="true">
              <path d="M0 0L22 14L0 28Z" />
            </svg>
          </button>
          <span className="absolute bottom-4 inset-x-0 text-center font-narrow font-semibold text-[13px] tracking-[0.14em] text-canvas/85">
            [VIDEO DE PRESENTACIÓN DEL PROYECTO]
          </span>
        </div>

        <div className="flex flex-col gap-4.5">
          <p
            data-reveal
            className="font-narrow font-bold text-[13px] tracking-[0.22em] text-butter"
          >
            INSIDE THE CREATOR ECONOMY
          </p>
          <h2
            data-reveal
            className="font-serif-d text-canvas text-[clamp(28px,3vw,42px)] leading-[1.1] text-balance"
          >
            Un curso hecho por la gente que contrata, negocia y paga campañas
            todos los días.
          </h2>
          <ul data-reveal className="flex flex-wrap gap-2.5 pt-1">
            {[
              "4 INSTRUCTORES + INVITADOS",
              "7 MÓDULOS",
              "17 CLASES",
              "100% ONLINE",
            ].map((chip) => (
              <li
                key={chip}
                className="border-[1.5px] border-dashed border-canvas/60 text-canvas rounded-full px-4.5 py-2 font-narrow font-semibold text-[13px] tracking-[0.06em]"
              >
                {chip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
