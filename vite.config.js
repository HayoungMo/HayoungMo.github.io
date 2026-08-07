import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  cacheDir: ".vite-cache",
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        about: "about.html",
        resume: "resume.html",
        portfolio: "portfolio.html",
      },
    },
  },
});
