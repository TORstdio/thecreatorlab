"use client";

import { useRef } from "react";

type Section = { title: string; items: string[] };

const SECTIONS: Section[] = [
  {
    title: "1. Acceso y Licencia de Uso Personal",
    items: [
      "1.1. Al adquirir cualquiera de nuestros Productos, obtienes una licencia de uso personal, limitada, intransferible, revocable y no exclusiva para acceder al contenido.",
      "1.2. El acceso es exclusivo para el comprador y no podrá compartirse con terceros, incluyendo familiares, amigos, colaboradores, agencias, empresas o equipos de trabajo.",
      "1.3. Queda estrictamente prohibida la reproducción, distribución, comercialización, cesión, sublicencia, transmisión, descarga masiva o cualquier otro uso distinto al autorizado.",
      "1.4. The Creator Lab podrá suspender o cancelar el acceso de manera inmediata si detecta accesos simultáneos no autorizados, uso fraudulento, distribución del contenido o cualquier incumplimiento de estos términos.",
    ],
  },
  {
    title: "2. Propiedad Intelectual",
    items: [
      "2.1. Todo el contenido disponible dentro de The Creator Lab, incluyendo, entre otros, videos, audios, presentaciones, documentos, plantillas, estrategias, metodologías, ejercicios, materiales descargables, diseños, marcas, logotipos y recursos educativos, es propiedad exclusiva de The Creator Lab o de sus respectivos autores y colaboradores, y se encuentra protegido por la legislación aplicable en materia de propiedad intelectual.",
      "2.2. Ningún contenido podrá copiarse, modificarse, reproducirse, distribuirse, venderse, compartirse o utilizarse para impartir cursos, capacitaciones, consultorías o productos similares sin autorización previa y por escrito.",
      "2.3. El incumplimiento de esta disposición podrá dar lugar a las acciones legales correspondientes.",
    ],
  },
  {
    title: "3. Pagos, Cancelaciones y Reembolsos",
    items: [
      "3.1. Debido a la naturaleza digital de los Productos y al acceso inmediato al contenido, todas las compras son finales.",
      "3.2. No se realizan devoluciones, cancelaciones, cambios ni reembolsos, salvo que la legislación aplicable establezca lo contrario.",
      "3.3. En caso de planes de pago, el alumno se compromete a cubrir la totalidad de las mensualidades o parcialidades contratadas conforme a las condiciones aceptadas al momento de la compra.",
    ],
  },
  {
    title: "4. Resultados y Responsabilidad",
    items: [
      "4.1. Los Productos de The Creator Lab tienen fines educativos e informativos.",
      "4.2. No garantizamos resultados específicos, crecimiento en redes sociales, aumento de ingresos, obtención de campañas, representación por agencias, monetización, viralidad o cualquier otro resultado profesional o económico.",
      "4.3. Los resultados dependerán de factores individuales como la implementación, disciplina, experiencia, nicho, mercado, estrategia y constancia de cada participante.",
      "4.4. Cada usuario es el único responsable de las decisiones que tome con base en la información proporcionada dentro de nuestros Productos.",
    ],
  },
  {
    title: "5. Duración del Acceso",
    items: [
      "5.1. El tiempo de acceso a cada Producto será el indicado en la página de venta correspondiente.",
      '5.2. Cuando un Producto indique acceso "de por vida", este se entenderá vigente mientras dicho Producto permanezca activo dentro de la plataforma de The Creator Lab.',
      "5.3. The Creator Lab podrá actualizar, modificar, migrar o retirar contenidos cuando resulte necesario para mejorar la experiencia educativa o por cuestiones técnicas u operativas.",
    ],
  },
  {
    title: "6. Sesiones en Vivo, Mentorías y Eventos",
    items: [
      "6.1. Algunos Productos podrán incluir sesiones en vivo, mentorías, workshops o clases grupales.",
      "6.2. En caso de no asistir a una sesión programada, The Creator Lab no está obligado a ofrecer reposiciones individuales.",
      "6.3. Las sesiones podrán ser grabadas para uso exclusivo de la comunidad cuando así se determine.",
    ],
  },
  {
    title: "7. Comunidad y Código de Conducta",
    items: [
      "7.1. The Creator Lab busca mantener una comunidad segura, profesional y respetuosa.",
      "7.2. No se permitirán conductas ofensivas o discriminatorias, acoso o amenazas hacia alumnos, invitados o colaboradores, spam o autopromoción no autorizada, compartir información confidencial de otros participantes, ni cualquier comportamiento que afecte negativamente la experiencia de la comunidad.",
      "7.3. El incumplimiento podrá ocasionar la suspensión o expulsión definitiva del programa sin derecho a reembolso.",
    ],
  },
  {
    title: "8. Confidencialidad",
    items: [
      "8.1. Los participantes se comprometen a respetar la confidencialidad de la información compartida por otros alumnos, invitados, coaches o especialistas dentro de la comunidad.",
      "8.2. La información, estrategias y experiencias compartidas por terceros dentro de mentorías o grupos privados no podrán difundirse sin autorización.",
    ],
  },
  {
    title: "9. Seguridad de la Cuenta",
    items: [
      "9.1. Cada usuario es responsable de mantener la confidencialidad de su correo electrónico y contraseña.",
      "9.2. The Creator Lab no será responsable por accesos derivados del uso compartido de credenciales o negligencia del usuario.",
    ],
  },
  {
    title: "10. Colaboradores e Instructores Invitados",
    items: [
      "10.1. Algunos contenidos podrán ser impartidos por especialistas, coaches, creadores o expertos invitados.",
      "10.2. Las opiniones expresadas por dichos colaboradores corresponden exclusivamente a ellos y no necesariamente representan la postura oficial de The Creator Lab.",
    ],
  },
  {
    title: "11. Protección de Datos Personales",
    items: [
      "11.1. Los datos personales proporcionados serán tratados conforme a nuestro Aviso de Privacidad y únicamente para fines relacionados con la prestación de nuestros servicios.",
      "11.2. Al utilizar nuestra plataforma, autorizas el tratamiento de tus datos conforme a la legislación aplicable.",
    ],
  },
  {
    title: "12. Modificaciones",
    items: [
      "The Creator Lab podrá actualizar estos Términos y Condiciones cuando resulte necesario para mejorar sus servicios, cumplir con obligaciones legales o adaptar sus procesos. Las modificaciones entrarán en vigor desde su publicación en nuestros canales oficiales.",
    ],
  },
  {
    title: "13. Contacto",
    items: [
      "Si tienes dudas sobre estos Términos y Condiciones, puedes comunicarte con nosotros a través del correo electrónico hola@thecreatorlab.mx o por cualquiera de nuestros canales oficiales de atención.",
    ],
  },
];

/**
 * Trigger + modal de Términos y Condiciones con <dialog> nativo
 * (Esc para cerrar, foco atrapado, click en el fondo cierra).
 */
export default function TermsModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const open = () => {
    dialogRef.current?.showModal();
    document.documentElement.style.overflow = "hidden";
  };
  const close = () => {
    dialogRef.current?.close();
  };

  return (
    <>
      <button
        type="button"
        onClick={open}
        className="uppercase hover:text-canvas transition-colors"
      >
        Términos
      </button>

      <dialog
        ref={dialogRef}
        onClose={() => {
          document.documentElement.style.overflow = "";
        }}
        onClick={(e) => {
          // click fuera del contenido (en el backdrop) cierra
          if (e.target === dialogRef.current) close();
        }}
        data-lenis-prevent
        aria-label="Términos y Condiciones"
        className="m-auto w-[min(92vw,760px)] max-h-[85vh] bg-canvas text-ink rounded-2xl border-2 border-ink shadow-[8px_8px_0_0_#1c1a17] backdrop:bg-ink/60 backdrop:backdrop-blur-sm"
      >
        <div className="flex flex-col max-h-[85vh]">
          <header className="flex items-start justify-between gap-6 px-7 md:px-9 pt-7 pb-5 border-b-[1.5px] border-dashed border-ink/40 shrink-0">
            <div className="flex flex-col gap-1 text-left">
              <h2 className="font-display uppercase text-[clamp(20px,2.4vw,28px)] leading-tight">
                Términos y Condiciones
              </h2>
              <p className="font-narrow font-semibold text-xs tracking-[0.14em] uppercase text-muted">
                Última actualización: 7 de julio de 2026
              </p>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Cerrar"
              className="btn-hard shrink-0 size-10 rounded-full bg-purple text-canvas border-2 border-ink flex items-center justify-center shadow-[2px_2px_0_0_#1c1a17]"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 2L12 12M12 2L2 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </button>
          </header>

          <div className="overflow-y-auto px-7 md:px-9 py-6 text-left">
            <p className="text-[15px] leading-relaxed text-muted">
              Estos Términos y Condiciones regulan el acceso y uso de los
              cursos, programas, talleres, mentorías, contenidos digitales,
              materiales descargables y demás productos y servicios ofrecidos
              por The Creator Lab a través de su sitio web, plataforma
              educativa y demás canales oficiales.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              Al adquirir, acceder o utilizar cualquiera de nuestros Productos,
              aceptas expresamente estos Términos y Condiciones. Si no estás de
              acuerdo con alguna de estas disposiciones, te recomendamos
              abstenerte de realizar la compra o utilizar nuestros servicios.
            </p>

            {SECTIONS.map((s) => (
              <section key={s.title} className="mt-6">
                <h3 className="font-bold text-[16px] mb-2">{s.title}</h3>
                {s.items.map((p) => (
                  <p
                    key={p.slice(0, 40)}
                    className="text-[14px] leading-relaxed text-muted mb-2"
                  >
                    {p}
                  </p>
                ))}
              </section>
            ))}

            <p className="mt-8 mb-2 text-[14px] leading-relaxed font-medium text-ink border-[1.5px] border-dashed border-ink/40 rounded-xl px-5 py-4">
              Gracias por formar parte de The Creator Lab. Nuestro objetivo es
              brindarte herramientas, conocimiento y una comunidad que impulse
              el crecimiento de tu carrera como creador de contenido de manera
              profesional, ética y sostenible.
            </p>
          </div>
        </div>
      </dialog>
    </>
  );
}
