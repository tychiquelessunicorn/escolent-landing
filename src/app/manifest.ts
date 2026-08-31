import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Escolent — Adaptive Learning Architecture",
    short_name: "Escolent",
    description:
      "One curriculum. Every student's real pace. A real-time intelligence layer adapting to cognitive struggle and emotional distress.",
    start_url: "/",
    display: "standalone",
    background_color: "#07080c",
    theme_color: "#1e6bff",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/logo-icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
