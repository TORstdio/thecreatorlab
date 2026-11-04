import type { StaticImageData } from "next/image";
import crece from "@/public/minicursos/crece.webp";
import cobra from "@/public/minicursos/cobra.webp";
import firma from "@/public/minicursos/firma.webp";

/** Precio de cada minicurso (USD). Pendiente: en null se muestra "$XX". */
export const PRECIO_MINICURSO: number | null = null;

export const precioMinicurso = () =>
  PRECIO_MINICURSO === null ? "$XX" : `$${PRECIO_MINICURSO}`;

export type Clase = { titulo: string; duracion: string; desc?: string };

export type Minicurso = {
  slug: "crece" | "cobra" | "firma";
  nombre: string;
  promesa: string;
  clases: Clase[];
  /** Total redondeado, como aparece en Hotmart. */
  duracion: string;
  portada: StaticImageData;
  /** Color de acento del curso (el botón y sus sellos). */
  acento: string;
  /** POR CONFIRMAR con el cliente: quién da las clases de cada curso. */
  instructores: string[];
  /** Producto de Hotmart; sin URL el botón no lleva a ningún pago. */
  checkoutUrl?: string;
};

export const minicursos: Minicurso[] = [
  {
    slug: "crece",
    nombre: "Crece",
    promesa: "Crece con estrategia, no a la suerte",
    duracion: "~44 min",
    portada: crece,
    acento: "bg-mint",
    instructores: ["Paulina P. Zarur", "Natalia Cabral"],
    checkoutUrl: process.env.NEXT_PUBLIC_HOTMART_CRECE_URL,
    clases: [
      {
        titulo: "En qué etapa estás como creador o creadora de contenido",
        duracion: "7:43",
        desc: "Identifica dónde estás y qué necesitas para llevar tu carrera al siguiente nivel.",
      },
      {
        titulo: "Define a tu nicho y a tu público",
        duracion: "5:17",
        desc: "Encuentra tu espacio, conoce a tu audiencia y crea contenido que realmente conecte.",
      },
      {
        titulo: "Temas satélites, el hack para no quedarte sin contenido",
        duracion: "4:15",
        desc: "Amplía tus ideas con temas estratégicos sin perder la esencia de tu contenido.",
      },
      {
        titulo: "Los números que te ayudan a entender tu progreso como creador",
        duracion: "7:36",
        desc: "Aprende a leer las métricas de tu contenido para entender qué funciona y tomar mejores decisiones.",
      },
      {
        titulo: "El arte de hacerte relevante: PR y networking para creadores",
        duracion: "7:31",
        desc: "Crea conexiones estratégicas que aumenten tu relevancia y te acerquen a nuevas oportunidades.",
      },
      {
        titulo: "TikTok: los hacks de la plataforma",
        duracion: "11:11",
        desc: "Potencia tu TikTok con contenido estratégico, engagement y distintas oportunidades de monetización.",
      },
    ],
  },
  {
    slug: "cobra",
    nombre: "Cobra",
    promesa: "Cobra lo que vales",
    duracion: "~32 min",
    portada: cobra,
    acento: "bg-butter",
    instructores: ["Ilse Guerra", "Daniela Palacios", "Ana Treviño"],
    checkoutUrl: process.env.NEXT_PUBLIC_HOTMART_COBRA_URL,
    clases: [
      {
        titulo: "Monetiza tu pasión: reglas para vender tu contenido",
        duracion: "5:15",
        desc: "Convierte tu contenido en una oportunidad de negocio y comienza a monetizar tu talento.",
      },
      {
        titulo: "¿Cuánto cobro? Define tu pricing sin inventarte números",
        duracion: "8:27",
        desc: "Construye tarifas estratégicas que reflejen el valor real de tu contenido y trabajo.",
      },
      {
        titulo: "Tu Media Kit no es un PDF bonito: aprende a venderte como pro",
        duracion: "7:51",
        desc: "Transforma tu Media Kit en una herramienta estratégica que venda tu perfil a las marcas.",
      },
      {
        titulo: "Más vías de monetizar como creador de contenido",
        duracion: "5:38",
        desc: "Explora nuevas fuentes de ingresos y diversifica la manera en que monetizas tu contenido.",
      },
      { titulo: "Herramientas de monetización en Instagram", duracion: "4:54" },
    ],
  },
  {
    slug: "firma",
    nombre: "Firma",
    promesa: "Trabaja con marcas sin broncas",
    duracion: "~32 min",
    portada: firma,
    acento: "bg-pink",
    instructores: ["Gabriela González", "Carolina Sandoval", "Eduardo Nuñez"],
    checkoutUrl: process.env.NEXT_PUBLIC_HOTMART_FIRMA_URL,
    clases: [
      {
        titulo: "No firmes a ciegas: contratos, exclusividad y cómo protegerte",
        duracion: "5:10",
        desc: "Protege tu trabajo entendiendo contratos, exclusividades y acuerdos antes de firmar.",
      },
      {
        titulo: "Las cláusulas que más te pueden meter en problemas",
        duracion: "7:35",
        desc: "Aprende a detectar esas letras pequeñas que podrían costarte dinero, oportunidades o el control sobre tu propio contenido.",
      },
      {
        titulo: "Qué onda con el SAT, facturas y cómo no hacer un relajo con tu dinero",
        duracion: "12:01",
        desc: "SAT, facturas e impuestos sin hacerlo complicado: lo que necesitas entender para llevar tus ingresos en orden.",
      },
      {
        titulo: "Conviértete en el o la creadora que las marcas sí quieren volver a contratar",
        duracion: "6:59",
        desc: "Domina una campaña de principio a fin y haz que las marcas quieran regresar.",
      },
    ],
  },
];

export const metaMinicurso = (c: Minicurso) =>
  `${c.clases.length} clases · ${c.duracion}`;
