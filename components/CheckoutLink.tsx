"use client";

import { type ComponentPropsWithoutRef, type MouseEvent } from "react";

const checkoutUrl = process.env.NEXT_PUBLIC_HOTMART_CHECKOUT_URL;
const fallbackUrl = "#inscripcion";
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

function buildCheckoutUrl() {
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

    return url.toString();
  } catch {
    return checkoutUrl;
  }
}

type CheckoutLinkProps = ComponentPropsWithoutRef<"a">;

export default function CheckoutLink({
  children,
  onClick,
  target,
  ...props
}: CheckoutLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    const isPlainClick =
      event.button === 0 &&
      !event.metaKey &&
      !event.ctrlKey &&
      !event.shiftKey &&
      !event.altKey;

    if (event.defaultPrevented || !checkoutUrl || !isPlainClick) return;

    event.preventDefault();

    if (target === "_blank") {
      window.open(buildCheckoutUrl(), "_blank", "noopener,noreferrer");
      return;
    }

    window.location.assign(buildCheckoutUrl());
  };

  return (
    <a
      {...props}
      href={checkoutUrl || fallbackUrl}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : props.rel}
      onClick={handleClick}
      data-checkout-cta="true"
    >
      {children}
    </a>
  );
}
