import type { ComponentPropsWithoutRef } from "react";
import CheckoutLink from "@/components/CheckoutLink";
import type { Minicurso } from "@/lib/minicursos";

/** Botón de pago de un minicurso. Sin producto en Hotmart no cobra el curso completo por error. */
export default function CtaMinicurso({
  curso,
  ...props
}: { curso: Minicurso } & ComponentPropsWithoutRef<"a">) {
  if (curso.checkoutUrl) {
    return <CheckoutLink checkoutUrl={curso.checkoutUrl} {...props} />;
  }
  return <a href="#comprar" {...props} />;
}
