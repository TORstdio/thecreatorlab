import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export estático (carpeta `out/`) para servirlo desde Cloudflare Pages.
  output: "export",
  // Sin servidor no hay optimización de imágenes; las imágenes ya están en webp ligeras.
  images: { unoptimized: true },
};

export default nextConfig;
