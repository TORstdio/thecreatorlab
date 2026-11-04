"use client";

import { useEffect, useState, type ComponentPropsWithoutRef, type MouseEvent } from "react";
import { ensureHotmartPopup } from "@/lib/hotmartPopup";

const defaultCheckoutUrl = process.env.NEXT_PUBLIC_HOTMART_CHECKOUT_URL;
const fallbackUrl = "#inscripcion";

function widgetUrl(checkoutUrl?: string) {
  return checkoutUrl
    ? `${checkoutUrl}${checkoutUrl.includes("?") ? "&" : "?"}checkoutMode=2`
    : fallbackUrl;
}

const attributionKeys = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "fbclid",
  "gclid",
  "ttclid",
  "src",
];

function buildCheckoutUrl(checkoutUrl?: string) {
  if (!checkoutUrl) return fallbackUrl;

  try {
    const url = new URL(checkoutUrl);
    const currentParams = new URLSearchParams(window.location.search);

    attributionKeys.forEach((key) => {
      const value = currentParams.get(key);
      if (value && !url.searchParams.has(key)) {
        url.searchParams.set(key, value);
      }
    });

    url.searchParams.set("checkoutMode", "2");

    return url.toString();
  } catch {
    return checkoutUrl;
  }
}

type CheckoutLinkProps = ComponentPropsWithoutRef<"a"> & {
  /** Producto de Hotmart; por defecto, el curso completo. */
  checkoutUrl?: string;
};

export default function CheckoutLink({
  checkoutUrl = defaultCheckoutUrl,
  children,
  onClick,
  className,
  ...props
}: CheckoutLinkProps) {
  // Los UTMs se agregan al cargar (no al dar clic) porque la ventana de
  // Hotmart lee el href antes que el onClick.
  const [href, setHref] = useState(widgetUrl(checkoutUrl));

  useEffect(() => {
    setHref(buildCheckoutUrl(checkoutUrl));
    ensureHotmartPopup();
  }, [checkoutUrl]);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (event.defaultPrevented || !checkoutUrl) return;

    event.currentTarget.href = buildCheckoutUrl(checkoutUrl);
  };

  return (
    <a
      {...props}
      className={`hotmart-fb hotmart__button-checkout ${className ?? ""}`.trim()}
      href={href}
      onClick={handleClick}
      data-checkout-cta="true"
    >
      {children}
    </a>
  );
}
