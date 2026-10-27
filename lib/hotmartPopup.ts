/**
 * Ventana emergente del checkout de Hotmart.
 *
 * Replica `static.hotmart.com/checkout/widget.min.js` usando sus mismos
 * archivos (jQuery + fancybox), pero SIN su health check: el widget consulta
 * `api-checkout-vue.hotmart.com`, que ya no existe, y al fallar borra todos
 * los links a hotmart.com (los botones de compra desaparecían).
 *
 * Igual que el widget: en móvil no se abre ventana y el link navega normal.
 * Si algo de esto no carga, los botones siguen funcionando como links.
 */

const BASE = "https://static.hotmart.com/checkout";

type JQueryLike = (selector?: unknown) => {
  fancybox: (options: Record<string, unknown>) => void;
};

declare global {
  interface Window {
    jQuery?: JQueryLike;
  }
}

let loading: Promise<void> | null = null;

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`No cargó ${src}`));
    document.head.appendChild(script);
  });
}

function loadCSS(href: string) {
  if (document.querySelector(`link[href="${href}"]`)) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
}

/** Mismo criterio que `detectmob()` del widget de Hotmart. */
function isMobile() {
  return (
    screen.width <= 600 ||
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(
      navigator.userAgent,
    )
  );
}

export function ensureHotmartPopup() {
  if (loading) return loading;

  loading = (async () => {
    if (isMobile()) return;

    if (!window.jQuery) await loadScript(`${BASE}/jquery/jquery-3.2.1.min.js`);
    await loadScript(`${BASE}/fancybox/jquery.fancybox.min.js`);
    loadCSS(`${BASE}/fancybox/jquery.fancybox.min.css`);

    // `selector` delega el click en el documento: funciona también con
    // botones que React monte después, y corre después del onClick de React
    // (que agrega los UTMs al href).
    window.jQuery!().fancybox({
      selector: ".hotmart-fb",
      type: "iframe",
      toolbar: false,
      smallBtn: true,
      iframe: {
        css: { width: "600px" },
        attr: { allowpaymentrequest: "true" },
      },
    });
  })().catch(() => {
    loading = null;
  });

  return loading;
}
