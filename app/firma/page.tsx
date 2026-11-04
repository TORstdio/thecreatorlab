import type { Metadata } from "next";
import PaginaMinicurso from "@/components/minicurso/Pagina";
import { minicursos } from "@/lib/minicursos";

const curso = minicursos.find((m) => m.slug === "firma")!;

export const metadata: Metadata = {
  title: "Firma — The Creator Playbook",
  description: `${curso.promesa}. ${curso.clases.length} clases en ${curso.duracion}, 100% online.`,
};

export default function Page() {
  return <PaginaMinicurso curso={curso} />;
}
