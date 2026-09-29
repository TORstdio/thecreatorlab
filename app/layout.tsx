import type { Metadata, Viewport } from "next";
import {
  Archivo,
  Archivo_Black,
  Archivo_Narrow,
  Instrument_Serif,
  Pinyon_Script,
} from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const archivoNarrow = Archivo_Narrow({
  variable: "--font-archivo-narrow",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const pinyonScript = Pinyon_Script({
  variable: "--font-pinyon",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Creator Playbook — The Creator Lab",
  description:
    "Crear contenido es solo el comienzo. Aprende a definir tu valor, cobrar, entender tus métricas y trabajar mejor con marcas. 7 módulos, 17 clases, 100% online.",
  openGraph: {
    title: "The Creator Playbook — The Creator Lab",
    description:
      "Si quieres construir una carrera como creador, empieza entendiendo cómo funciona la industria. From creator to career.",
    locale: "es_MX",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#5c5af6",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${archivo.variable} ${archivoBlack.variable} ${archivoNarrow.variable} ${instrumentSerif.variable} ${pinyonScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-canvas text-ink font-sans">
        {/* Antes del primer pintado: si habrá animación de intro, ocultar el
            hero via CSS (.motion) para evitar el flash de contenido */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('motion')}catch(e){}",
          }}
        />
        {children}
      </body>
    </html>
  );
}
