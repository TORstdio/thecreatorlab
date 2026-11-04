"use client";

import { useEffect, useState, type ReactNode } from "react";
import CheckoutLink from "@/components/CheckoutLink";
import { PRECIO, PRECIO_REGULAR } from "@/lib/oferta";

/**
 * Barra de pago fija en móvil. Aparece cuando la tarjeta de orden
 * de arriba (#orden-movil) sale de pantalla.
 */
export default function BarraPago({
  precio = `$${PRECIO} USD`,
  detalle = <span className="line-through">antes ${PRECIO_REGULAR}</span>,
  children,
}: {
  precio?: string;
  detalle?: ReactNode;
  /** Botón de pago; por defecto, el del curso completo. */
  children?: ReactNode;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const orden = document.getElementById("orden-movil");
    if (!orden) return;
    const io = new IntersectionObserver(([e]) => setVisible(!e.isIntersecting));
    io.observe(orden);
    return () => io.disconnect();
  }, []);

  return (
    <div
      data-cursor="butter"
      aria-hidden={!visible}
      inert={!visible}
      className={`lg:hidden fixed inset-x-0 bottom-0 z-40 bg-ink px-4 pt-3 pb-[calc(12px+env(safe-area-inset-bottom))] flex items-center justify-between gap-3 transition-transform duration-300 ease-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex flex-col">
        <span className="font-display text-xl leading-tight text-canvas">{precio}</span>
        <span className="text-xs text-canvas/60">{detalle}</span>
      </div>
      {children ?? (
        <CheckoutLink
          data-cursor="purple"
          className="btn-hard bg-butter text-ink border-2 border-ink rounded-full px-7 py-3 text-[15px] font-bold"
        >
          Inscribirme
        </CheckoutLink>
      )}
    </div>
  );
}
