import type { StaticImageData } from "next/image";
import rossDiaz from "@/public/creators/ross-diaz.webp";
import juan from "@/public/creators/juan.webp";

export type ModuleClass = {
  tag: string;
  title: string;
  desc: string;
  /** Foto para talks (círculo). */
  avatar?: StaticImageData;
  /** Inicial para placeholder de avatar cuando aún no hay foto. */
  initial?: string;
};

export type Modulo = {
  tag: string;
  title: string;
  desc: string;
  count: string;
  classes: ModuleClass[];
};

export const modulos: Modulo[] = [
  {
    tag: "MOD. 01",
    title: "Define tu estrategia de contenido",
    desc: "Etapa, nicho y público, y los temas satélites para no quedarte sin contenido.",
    count: "3 clases",
    classes: [
      {
        tag: "CLASE 1",
        title: "En qué etapa estás como creador o creadora de contenido",
        desc: "Identifica dónde estás y qué necesitas para llevar tu carrera al siguiente nivel.",
      },
      {
        tag: "CLASE 2",
        title: "Define tu nicho y a tu público",
        desc: "Encuentra tu espacio, conoce a tu audiencia y crea contenido que realmente conecte.",
      },
      {
        tag: "CLASE 3",
        title: "Temas satélites, el hack para no quedarte sin contenido",
        desc: "Amplía tus ideas con temas estratégicos sin perder la esencia de tu contenido.",
      },
    ],
  },
  {
    tag: "MOD. 02",
    title: "Aprende a vender tu contenido y a cobrar",
    desc: "Monetización, pricing sin inventarte números y un Media Kit que sí vende.",
    count: "4 clases",
    classes: [
      {
        tag: "CLASE 1",
        title: "Monetiza tu pasión: reglas para vender tu contenido",
        desc: "Convierte tu contenido en una oportunidad de negocio y comienza a monetizar tu talento.",
      },
      {
        tag: "CLASE 2",
        title: "¿Cuánto cobro? Define tu pricing sin inventarte números",
        desc: "Construye tarifas estratégicas que reflejen el valor real de tu contenido y trabajo.",
      },
      {
        tag: "CLASE 3",
        title: "Tu Media Kit no es un PDF bonito: aprende a venderte como pro",
        desc: "Transforma tu Media Kit en una herramienta estratégica que venda tu perfil a las marcas.",
      },
      {
        tag: "CLASE 4",
        title: "Más vías de monetizar como creador de contenido",
        desc: "Explora nuevas fuentes de ingresos y diversifica la manera en que monetizas tu contenido.",
      },
    ],
  },
  {
    tag: "MOD. 03",
    title: "Estructura legal y fiscal",
    desc: "Contratos, cláusulas peligrosas y qué onda con el SAT y tus facturas.",
    count: "3 clases",
    classes: [
      {
        tag: "CLASE 1",
        title: "No firmes a ciegas: contratos, exclusividad y cómo protegerte",
        desc: "Protege tu trabajo entendiendo contratos, exclusividades y acuerdos antes de firmar.",
      },
      {
        tag: "CLASE 2",
        title: "Las cláusulas que más te pueden meter en problemas",
        desc: "Aprende a detectar esas letras pequeñas que podrían costarte dinero, oportunidades o el control sobre tu propio contenido.",
      },
      {
        tag: "CLASE 3",
        title: "Qué onda con el SAT, facturas y cómo no hacer un relajo con tu dinero",
        desc: "SAT, facturas e impuestos sin hacerlo complicado: lo que necesitas entender para llevar tus ingresos en orden.",
      },
    ],
  },
  {
    tag: "MOD. 04",
    title: "Contenido comercial: aprende a trabajar una campaña",
    desc: "Conviértete en quien las marcas sí quieren volver a contratar.",
    count: "1 clase",
    classes: [
      {
        tag: "CLASE 1",
        title: "Conviértete en el o la creadora que las marcas sí quieren volver a contratar",
        desc: "Domina una campaña de principio a fin y haz que las marcas quieran regresar.",
      },
    ],
  },
  {
    tag: "MOD. 05",
    title: "Analítica y métricas: cómo te miden las plataformas",
    desc: "Retención, compartidos, guardados y engagement: quién conecta de verdad contigo.",
    count: "1 clase",
    classes: [
      {
        tag: "CLASE 1",
        title: "Los números que te ayudan a entender tu progreso como creador",
        desc: "Aprende a leer las métricas de tu contenido para entender qué funciona y tomar mejores decisiones.",
      },
    ],
  },
  {
    tag: "MOD. 06",
    title: "PR y plataformas: tu upgrade como creador",
    desc: "Networking, Instagram y los hacks de TikTok para hacerte relevante.",
    count: "3 clases",
    classes: [
      {
        tag: "CLASE 1",
        title: "El arte de hacerte relevante: PR y networking para creadores",
        desc: "Crea conexiones estratégicas que aumenten tu relevancia y te acerquen a nuevas oportunidades.",
      },
      {
        tag: "CLASE 2",
        title: "Cómo crecer y profesionalizarte como creador en Instagram",
        desc: "Domina Instagram para crear mejor contenido, crecer tu comunidad y abrir nuevas oportunidades.",
      },
      {
        tag: "CLASE 3",
        title: "TikTok: los hacks de la plataforma",
        desc: "Potencia tu TikTok con contenido estratégico, engagement y distintas oportunidades de monetización.",
      },
    ],
  },
  {
    tag: "MOD. 07",
    title: "Creator Talks",
    desc: "Charlas con creadores sobre nuevas líneas de negocio y el poder del PR.",
    count: "2 charlas",
    classes: [
      {
        tag: "TALK 1 · ROSS DÍAZ",
        title: "Cómo construiste otra línea de negocio a partir de tu contenido",
        desc: "Conoce cómo llevar tu contenido más allá de redes y convertirlo en nuevas oportunidades.",
        avatar: rossDiaz,
      },
      {
        tag: "TALK 2 · JUAN",
        title: "Cómo el PR te abre las puertas y es un antes y después en tu carrera",
        desc: "Descubre cómo el PR y las relaciones estratégicas pueden abrir nuevas oportunidades y transformar tu carrera como creador.",
        avatar: juan,
      },
    ],
  },
];
