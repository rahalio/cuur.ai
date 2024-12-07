import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"], // Do not exclude or include 'firebase'
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
