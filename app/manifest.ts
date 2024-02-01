import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Briefkasten Docs",
    short_name: "Briefkasten Docs",
    description: "Briefkasten Docs",
    start_url: "/",
    theme_color: "#1e293b",
    background_color: "#1e293b",
    display: "standalone",
    icons: [
      {
        src: "favicon/android-chrome-36x36.png",
        sizes: "36x36",
        type: "image/png",
      },
      {
        src: "favicon/android-chrome-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "favicon/android-chrome-72x72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        src: "favicon/android-chrome-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "favicon/android-chrome-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        src: "favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "favicon/android-chrome-256x256.png",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "favicon/android-chrome-384x384.png",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
