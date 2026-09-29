"use client";

import Script from "next/script";
import { type ComponentPropsWithoutRef, type MouseEvent } from "react";

const checkoutUrl = process.env.NEXT_PUBLIC_HOTMART_CHECKOUT_URL;
const fallbackUrl = "#inscripcion";
const widgetCheckoutUrl = checkoutUrl
  ? `${checkoutUrl}${checkoutUrl.includes("?") ? "&" : "?"}checkoutMode=2`
  : fallbackUrl;
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

    url.searchParams.set("checkoutMode", "2");

    return url.toString();
  } catch {
    return checkoutUrl;
  }
}

type CheckoutLinkProps = ComponentPropsWithoutRef<"a">;

export default function CheckoutLink({
  children,
  onClick,
  className,
  ...props
}: CheckoutLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (event.defaultPrevented || !checkoutUrl) return;

    event.currentTarget.href = buildCheckoutUrl();
  };

  return (
    <>
      <Script
        src="https://static.hotmart.com/checkout/widget.min.js"
        strategy="afterInteractive"
      />
      <a
        {...props}
        className={`hotmart-fb hotmart__button-checkout ${className ?? ""}`.trim()}
        href={widgetCheckoutUrl}
        onClick={handleClick}
        data-checkout-cta="true"
      >
        {children}
      </a>
    </>
  );
}
