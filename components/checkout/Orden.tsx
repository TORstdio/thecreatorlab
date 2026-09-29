import Image from "next/image";
import CheckoutLink from "@/components/CheckoutLink";
import { DESCUENTO, PRECIO, PRECIO_REGULAR } from "@/lib/oferta";
import logo from "@/public/logo-creator-lab.png";

const ctaClass =
  "btn-hard block w-full text-center bg-butter text-ink border-2 border-ink rounded-full font-bold";

function PrecioEspecial({ className = "" }: { className?: string }) {
  return (
    <span
      className={`bg-mint text-ink border-2 border-ink rounded-full font-narrow font-bold tracking-[0.06em] ${className}`}
    >
      PRECIO ESPECIAL
    </span>
  );
}

/** Desktop: ticket "Tu orden" con desglose de precio. */
export function OrdenDesktop() {
  return (
    <div className="bg-white border-2 border-ink rounded-[20px] shadow-[6px_6px_0_0_#1c1a17] p-7 flex flex-col gap-[18px]">
      <div className="flex items-center justify-between">
        <h2 className="font-narrow font-bold text-xs tracking-[0.22em] text-purple">
          TU ORDEN
        </h2>
        <PrecioEspecial className="px-3 py-1 text-[11px]" />
      </div>

      <div className="flex items-center gap-3.5">
        <div className="size-16 shrink-0 rounded-[14px] bg-purple border-2 border-ink flex items-center justify-center">
          <Image src={logo} alt="" className="w-[50px] h-auto" />
        </div>
        <div>
          <p className="font-bold text-[17px] text-ink">The Creator Playbook</p>
          <p className="text-[13px] text-muted">Curso online · 7 módulos · 17 clases</p>
        </div>
      </div>

      <hr className="border-0 border-t-[1.5px] border-dashed border-ink/50" />
      <dl className="flex flex-col gap-3 text-[15px]">
        <div className="flex justify-between">
          <dt className="text-muted">Precio regular</dt>
          <dd className="text-muted line-through">${PRECIO_REGULAR} USD</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-muted">Descuento de lanzamiento</dt>
          <dd className="font-semibold text-purple">−${DESCUENTO} USD</dd>
        </div>
      </dl>
      <hr className="border-0 border-t-[1.5px] border-dashed border-ink/50" />

      <div className="flex items-baseline justify-between">
        <span className="font-bold text-lg text-ink">Total</span>
        <span className="flex items-baseline gap-1.5">
          <span className="font-display text-[44px] leading-none text-ink">${PRECIO}</span>
          <span className="font-narrow font-bold text-sm tracking-[0.08em] text-muted">USD</span>
        </span>
      </div>

      <CheckoutLink
        data-cursor="purple"
        className={`${ctaClass} py-[18px] text-[17px] shadow-[4px_4px_0_0_#1c1a17]`}
      >
        Inscribirme por ${PRECIO} USD
      </CheckoutLink>
      <p className="text-center text-xs text-muted">Te llevamos al checkout seguro de Hotmart</p>
    </div>
  );
}

/** Móvil: la orden va arriba del fold, en morado. */
export function OrdenMovil() {
  return (
    <div
      id="orden-movil"
      data-cursor="butter"
      className="bg-purple text-canvas border-2 border-ink rounded-[18px] shadow-[4px_4px_0_0_#1c1a17] p-5 flex flex-col gap-3.5"
    >
      <div className="flex items-center justify-between gap-3">
        <p className="font-narrow font-bold text-xs tracking-[0.16em]">THE CREATOR PLAYBOOK</p>
        <PrecioEspecial className="px-2.5 py-1 text-[10px]" />
      </div>
      <div className="flex items-center gap-2.5">
        <span className="font-display text-[52px] leading-none">${PRECIO}</span>
        <span className="flex flex-col">
          <span className="font-narrow font-bold text-sm tracking-[0.08em]">USD</span>
          <span className="text-[13px] font-medium line-through text-canvas/70">
            antes ${PRECIO_REGULAR}
          </span>
        </span>
      </div>
      <p className="text-sm leading-[1.45] text-canvas/90">
        Curso online · 7 módulos · 17 clases · acceso de por vida
      </p>
      <CheckoutLink
        data-cursor="purple"
        className={`${ctaClass} py-4 text-base shadow-[3px_3px_0_0_#1c1a17]`}
      >
        Inscribirme por ${PRECIO} USD
      </CheckoutLink>
      <p className="text-center text-xs text-canvas/85">
        Checkout seguro de Hotmart · Garantía de 7 días
      </p>
    </div>
  );
}
