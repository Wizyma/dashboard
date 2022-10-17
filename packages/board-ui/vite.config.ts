import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import { peerDependencies as externals, name } from "./package.json";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/index.ts"),
      name,
      fileName: (format) =>
        format === "cjs" ? "index.js" : `index.${format}.js`,
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      external: Object.keys(externals),
      output: {
        globals: {
          react: "React",
          reactDom: "reactDom",
        },
      },
    },
  },
  css: {
    devSourcemap: true,
  },
  resolve: {
    alias: [
      {
        find: "src",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
});
