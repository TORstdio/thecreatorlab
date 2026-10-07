import Image from "next/image";
import { Check } from "@/components/icons";
import carolina from "@/public/instructores/avatar/carolina-sandoval.webp";
import gabriela from "@/public/instructores/avatar/gabriela-gonzalez.webp";
import ilse from "@/public/instructores/avatar/ilse-guerra.webp";
import paulina from "@/public/instructores/avatar/paulina-zarur.webp";
import daniela from "@/public/instructores/avatar/daniela-palacios.webp";
import ana from "@/public/instructores/avatar/ana-trevino.webp";
import eduardo from "@/public/instructores/avatar/eduardo-nunez.webp";

const garantias = [
  ["Garantía de 7 días", "Si no es para ti, pides tu reembolso en Hotmart."],
  ["Acceso de por vida", "Pregrabado, a tu ritmo, vuelve cuando quieras."],
  ["Pago 100% seguro", "Procesado por Hotmart."],
];

export function Garantias() {
  return (
    <ul className="flex flex-col gap-3">
      {garantias.map(([titulo, detalle]) => (
        <li key={titulo} className="flex items-start gap-3">
          <Check className="mt-0.5 shrink-0 text-purple" />
          <div>
            <p className="font-bold text-[15px] text-ink">{titulo}</p>
            <p className="hidden lg:block text-[13px] text-muted">{detalle}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

const pasos = ["Revisa el temario", "Paga en Hotmart", "Recibe tu acceso"];

export function ComoFunciona() {
  return (
    <ol
      aria-label="Cómo funciona"
      className="hidden lg:flex gap-2.5 rounded-[14px] border-[1.5px] border-dashed border-ink px-4 py-3.5"
    >
      {pasos.map((paso, i) => (
        <li key={paso} className="flex flex-1 items-center gap-2">
          <span
            className={`${i === 1 ? "bg-butter" : "bg-canvas"} shrink-0 size-6 rounded-full border-2 border-ink flex items-center justify-center font-narrow font-bold text-xs`}
          >
            {i + 1}
          </span>
          <span className="text-xs font-semibold leading-tight text-ink">{paso}</span>
        </li>
      ))}
    </ol>
  );
}

const fotos = [
  [carolina, "Carolina Sandoval"],
  [gabriela, "Gabriela González"],
  [ilse, "Ilse Guerra"],
  [paulina, "Paulina P. Zarur"],
  [daniela, "Daniela Palacios"],
  [ana, "Ana Treviño"],
  [eduardo, "Eduardo Nuñez"],
] as const;

export function InstructoresAvatares() {
  return (
    <div className="flex items-center gap-3.5">
      <ul className="flex shrink-0">
        {fotos.map(([src, nombre], i) => (
          <li key={nombre} className={`${i > 0 ? "-ml-3" : ""} ${i >= 5 ? "hidden lg:block" : ""}`}>
            <Image
              src={src}
              alt={nombre}
              width={44}
              height={44}
              className="size-10 lg:size-11 max-w-none rounded-full border-[2.5px] border-canvas object-cover"
            />
          </li>
        ))}
      </ul>
      <p className="text-[13px] leading-[1.4] text-muted">
        Aprende con expertos de Peach Group, Meta y Another.
      </p>
    </div>
  );
}
