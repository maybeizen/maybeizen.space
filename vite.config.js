import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src", // Optional: add source directory alias
    },
  },
  // Optional: add build optimizations
  build: {
    sourcemap: true,
    minify: "terser",
  },
});
