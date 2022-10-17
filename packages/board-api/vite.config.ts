import path from "path";

import { defineConfig } from "vite";

import { name } from "./package.json";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/index.ts"),
      name,
      fileName: (format) =>
        format === "cjs" ? "index.js" : `index.${format}.js`,
      formats: ["cjs", "es"],
    },
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
