import { VIDEO_PRESENTACION_URL, VIDEO_POSTER } from "@/lib/media";

export default function VideoBand() {
  return (
    <section
      id="video"
      data-cursor="butter"
      className="bg-ink py-16 px-6 md:px-14"
      aria-label="Presentación del curso"
    >
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div
          data-reveal
          data-cursor="purple"
          className="relative w-full lg:w-[54%] shrink-0 rounded-lg border-2 border-canvas overflow-hidden bg-ink"
        >
          {/* preload="none": no descarga nada hasta que el usuario da play;
              el poster local pinta la miniatura al instante */}
          <video
            controls
            playsInline
            preload="none"
            poster={VIDEO_POSTER}
            src={VIDEO_PRESENTACION_URL}
            className="w-full aspect-video object-cover"
            aria-label="Video de presentación de The Creator Playbook"
          />
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
