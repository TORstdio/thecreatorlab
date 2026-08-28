import InstructorCard from "@/components/InstructorCard";

type Instructor = {
  name: string;
  summary: string;
  highlights: string[];
  photoBg: string;
  fotoColor: string;
};

const instructores: Instructor[] = [
  {
    name: "Carolina Sandoval",
    summary: "Socia fundadora de Peach Group · +8 años en Influencer Marketing.",
    highlights: [
      "+8 años de experiencia en Influencer Marketing y en la profesionalización de la Creator Economy.",
      "Socia fundadora de Peach Group y Directora de Administración y Finanzas.",
      "Lidera estrategias financieras, tecnológicas y operativas que combinan data, creatividad e innovación.",
    ],
    photoBg: "bg-blue",
    fotoColor: "text-white/85",
  },
  {
    name: "Gabriela González",
    summary: "+9 años en derecho corporativo aplicado al Influencer Marketing.",
    highlights: [
      "+9 años de experiencia en el área legal, con especialización en derecho corporativo.",
      "Asesora estratégicamente a empresas para proteger y fortalecer sus operaciones.",
      "Experiencia legal aplicada a proyectos, contratos y operaciones dentro de Influencer Marketing.",
    ],
    photoBg: "bg-pink",
    fotoColor: "text-white/85",
  },
  {
    name: "Ilse Guerra",
    summary: "+2,000 campañas negociadas entre marcas y creadores.",
    highlights: [
      "Socia fundadora de Peach Group, especializada en negociación entre marcas y creadores.",
      "Ha negociado y liderado +2,000 campañas de Influencer Marketing.",
      "Experta en encontrar el punto medio para construir acuerdos que funcionen para marcas y talentos.",
    ],
    photoBg: "bg-mint",
    fotoColor: "text-white/85",
  },
  {
    name: "Paulina P. Zarur",
    summary: "+10 años en Marketing: Dior, L'Oréal, Netflix, Coca-Cola.",
    highlights: [
      "+10 años de experiencia en Marketing y +6 años especializada en Creator Economy.",
      "Ha trabajado en Lala y Rappi, y con marcas como Dior, L'Oréal, Netflix, Amazon, Mercado Libre y Coca-Cola.",
      "Socia de Peach Group, especializada en desarrollar y posicionar talentos referentes dentro de la industria.",
    ],
    photoBg: "bg-butter",
    fotoColor: "text-ink/60",
  },
  {
    name: "Daniela Palacios",
    summary: "Talent Agent Leader en Peach Group · campañas end-to-end para marcas globales.",
    highlights: [
      "5 años de experiencia en Influencer Marketing, trabajando tanto con marcas como con talentos.",
      "Ha desarrollado campañas end-to-end para Natura, Jumex, Beiersdorf, Mondelez, Unilever, Lenovo y Betterware.",
      "Talent Agent Leader en Peach Group, liderando el desarrollo de talentos, campañas y proyectos personales.",
    ],
    photoBg: "bg-purple",
    fotoColor: "text-white/85",
  },
  {
    name: "Ana Treviño",
    summary: "Strategic Partner en Meta, cerca de creadores y del ecosistema digital.",
    highlights: [
      "Strategic Partner en Meta desde 2022, trabajando de cerca con creadores y el ecosistema digital.",
      "+2 años en Bitso, evolucionando de Brand & Comms hasta liderar estrategia de marca y Go-To-Market.",
      "Experiencia en estrategia, comunicación y marketing para marcas y plataformas digitales.",
    ],
    photoBg: "bg-mint",
    fotoColor: "text-white/85",
  },
  {
    name: "Eduardo Nuñez",
    summary: "Dirige Influencer Marketing en Another, Mejor Agencia de IM en México.",
    highlights: [
      "Lleva más de 10 años trabajando entre briefs, campañas y creadores.",
      "Ha colaborado con marcas como TikTok, HBO Max, P&G, Fashion Nova, Hasbro y Miniso, además de trabajar con creadores de distintos países de Latinoamérica.",
      "Dirige Influencer Marketing en Another, reconocida dos años consecutivos como Mejor Agencia de Influencer Marketing en México.",
      "Formó parte de los Eliot Awards, ha hecho investigaciones sobre la Creator Economy y compartido su experiencia en foros de la industria.",
    ],
    photoBg: "bg-pink",
    fotoColor: "text-white/85",
  },
  {
    name: "Natalia Cabral",
    summary: "[Bio por confirmar]",
    highlights: [],
    photoBg: "bg-blue",
    fotoColor: "text-white/85",
  },
];

export default function Instructores() {
  return (
    <section
      id="instructores"
      data-cursor="purple"
      className="bg-canvas py-24 px-6 md:px-14 flex flex-col gap-12"
      aria-label="Instructores"
    >
      <header
        data-reveal
        className="flex flex-wrap items-baseline justify-between gap-4"
      >
        <h2 className="font-display uppercase text-ink text-[clamp(36px,4.4vw,62px)] leading-none">
          Instructores
        </h2>
        <p className="font-serif-d italic text-muted text-xl">
          La gente que ya opera en la industria
        </p>
      </header>

      {/* Móvil: carrusel con swipe (scroll-snap). Tablet/desktop: grid */}
      <ul className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4.5 -mx-6 px-6 pb-2 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:overflow-visible sm:grid-cols-2 lg:grid-cols-4">
        {instructores.map((i) => (
          <InstructorCard key={i.name} {...i} />
        ))}
      </ul>
      <p
        aria-hidden="true"
        className="sm:hidden -mt-6 text-center font-narrow font-semibold text-[12px] tracking-[0.18em] uppercase text-muted"
      >
        Desliza para conocerlos →
      </p>
    </section>
  );
}
