import { Plus } from "@/components/icons";
import { modulos, type ModuleClass } from "@/lib/programa";

const NUM_STYLES = [
  "bg-purple text-canvas",
  "bg-pink text-ink",
  "bg-mint text-ink",
  "bg-blue text-ink",
  "bg-butter text-ink",
  "bg-purple text-canvas",
  "bg-ink text-canvas",
];

const numero = (tag: string) => tag.replace("MOD. ", "");

/** Las talks nombran a quien la da: "TALK 1 · ROSS DÍAZ" → "Ross Díaz (@rossdiaz.co): <título>". */
function claseLabel(c: ModuleClass) {
  const speaker = c.tag.split(" · ")[1];
  if (!speaker) return c.title;
  const nombre = speaker
    .toLowerCase()
    .replace(/(^|\s)\S/g, (s) => s.toUpperCase());
  const ig = c.ig ? ` (@${c.ig})` : "";
  return `${nombre}${ig}: ${c.title}`;
}

function NumPill({ i, tag }: { i: number; tag: string }) {
  return (
    <span
      className={`${NUM_STYLES[i]} shrink-0 rounded-full px-3 py-1.5 font-narrow font-bold text-[13px] leading-none tracking-[0.06em]`}
    >
      {numero(tag)}
    </span>
  );
}

const rowBorder = (i: number) =>
  i === modulos.length - 1 ? "border-b-[1.5px] border-ink" : "border-b-[1.5px] border-ink/30";

/** Desktop: todo el temario visible, clases en una línea corrida. */
export function TemarioLista() {
  return (
    <ol className="hidden lg:block border-t-2 border-ink">
      {modulos.map((m, i) => (
        <li key={m.tag} className={`flex items-start gap-5 py-[18px] ${rowBorder(i)}`}>
          <NumPill i={i} tag={m.tag} />
          <div className="grow flex flex-col gap-1.5">
            <h2 className="font-semibold text-lg leading-snug text-ink">{m.title}</h2>
            <p className="text-[13px] leading-[1.5] text-muted">
              {m.classes.map(claseLabel).join("  ·  ")}
            </p>
          </div>
          <span className="shrink-0 pt-0.5 font-narrow font-semibold text-[13px] text-muted">
            {m.count}
          </span>
        </li>
      ))}
    </ol>
  );
}

/** Móvil: acordeón nativo (<details>), el primer módulo abierto. */
export function TemarioAcordeon() {
  return (
    <ol className="lg:hidden border-t-2 border-ink">
      {modulos.map((m, i) => (
        <li key={m.tag} className={rowBorder(i)}>
          <details className="faq-item" open={i === 0}>
            <summary className="flex items-center gap-3 py-3.5">
              <NumPill i={i} tag={m.tag} />
              <span className="grow flex flex-col gap-0.5">
                <span className="font-semibold text-[15px] leading-snug text-ink">
                  {m.title}
                </span>
                <span className="font-narrow font-semibold text-xs text-muted">
                  {m.count}
                </span>
              </span>
              <span className="faq-plus shrink-0 size-[30px] rounded-full border-[1.5px] border-ink flex items-center justify-center">
                <Plus />
              </span>
            </summary>
            <ul className="flex flex-col gap-2 pb-4 pl-11">
              {m.classes.map((c) => (
                <li key={c.title} className="flex gap-2 text-[13px] leading-[1.4] text-muted">
                  <span aria-hidden="true" className="font-bold text-purple">
                    ✦
                  </span>
                  {claseLabel(c)}
                </li>
              ))}
            </ul>
          </details>
        </li>
      ))}
    </ol>
  );
}
