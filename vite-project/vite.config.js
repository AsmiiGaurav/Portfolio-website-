import { defineConfig } from "vite";

export default defineConfig({
  base: "/Portfolio-website-/", // 👈 MUST match your repo name exactly
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
