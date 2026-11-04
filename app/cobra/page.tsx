import type { Metadata } from "next";
import PaginaMinicurso from "@/components/minicurso/Pagina";
import { minicursos } from "@/lib/minicursos";

const curso = minicursos.find((m) => m.slug === "cobra")!;

const title = "Cobra — The Creator Playbook";
const description = `${curso.promesa}. ${curso.clases.length} clases en ${curso.duracion}, 100% online.`;

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, locale: "es_MX", type: "website", siteName: "The Creator Lab", url: "/cobra" },
  twitter: { card: "summary_large_image", title, description },
};

export default function Page() {
  return <PaginaMinicurso curso={curso} />;
}
