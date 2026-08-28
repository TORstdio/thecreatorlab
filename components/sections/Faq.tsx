import { Plus } from "@/components/icons";

const faqs: [string, string][] = [
  [
    "¿El curso es para principiantes?",
    "No necesariamente. Está pensado para creadores que quieren mejorar su desempeño, crecer, entender mejor sus resultados y profesionalizar la forma en la que trabajan. No necesitas una carrera avanzada, pero sí interés en llevar tu contenido al siguiente nivel.",
  ],
  [
    "¿Necesito tener muchos seguidores?",
    "No. El tamaño de tu audiencia no determina si puedes aprovechar el curso. The Creator Playbook te ayuda a entender tu valor como creador, leer mejor tus métricas y trabajar de forma más profesional con marcas, tengas la audiencia que tengas.",
  ],
  [
    "¿El curso es solo para creadores en México?",
    "No. La mayor parte del curso puede aprovecharse desde cualquier país. Algunos contenidos legales y fiscales —como las clases relacionadas con el SAT— están desarrollados específicamente para México y pueden requerir adaptación según tu país.",
  ],
  [
    "¿El curso es en vivo o pregrabado?",
    "Es un curso 100% online y pregrabado, para que avances a tu ritmo y puedas volver a las clases cuando lo necesites.",
  ],
  [
    "¿Cuánto tiempo tendré acceso al curso?",
    "Tu acceso es de por vida. Puedes regresar a las lecciones, recursos y contenidos siempre que necesites consultarlos nuevamente.",
  ],
  [
    "¿Puedo comprar solo un módulo?",
    "Por ahora, no. The Creator Playbook se ofrece como un curso completo porque los módulos están diseñados para complementarse entre sí.",
  ],
  [
    "¿Me garantiza resultados?",
    "No podemos garantizar resultados específicos. Tu crecimiento dependerá de cómo apliques lo aprendido, tu contenido, tu audiencia y tus objetivos. Lo que sí vas a encontrar es conocimiento, herramientas y contexto de industria para tomar mejores decisiones como creador.",
  ],
];

export default function Faq() {
  return (
    <section
      id="faq"
      data-cursor="purple"
      className="bg-canvas py-24 px-6 md:px-14 flex flex-col items-center gap-13"
      aria-label="Preguntas frecuentes"
    >
      <header data-reveal className="flex flex-col items-center gap-2 text-center">
        <h2 className="font-display uppercase text-ink text-[clamp(30px,4vw,56px)] leading-none">
          Preguntas frecuentes
        </h2>
        <p className="font-script text-purple text-[clamp(28px,2.9vw,40px)] leading-tight">
          antes de entrar al Playbook
        </p>
      </header>

      <div className="w-full max-w-[880px] flex flex-col gap-3">
        {faqs.map(([q, a]) => (
          <details
            key={q}
            data-reveal
            className="faq-item bg-white border-2 border-ink rounded-xl shadow-[3px_3px_0_0_#1c1a17]"
          >
            <summary className="flex items-center justify-between gap-5 px-6 py-5">
              <span className="font-bold text-lg">{q}</span>
              <Plus className="faq-plus shrink-0 text-purple" />
            </summary>
            <p className="px-6 pb-5 text-muted text-[15px] leading-[1.6] max-w-3xl">
              {a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
