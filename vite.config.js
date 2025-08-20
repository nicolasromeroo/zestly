import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "",  // Ruta relativa vacía para asegurar que las referencias sean relativas
  build: {
    cssCodeSplit: false,
    outDir: "dist",
  },
});
