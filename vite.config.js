import { defineConfig } from "vite"
import { resolve } from "path"
import path from "path"
import { globSync } from "glob"

export default defineConfig({
  root: resolve(__dirname, "src"),
  build: {
    outDir: resolve(__dirname, "dist"),
    rollupOptions: {
      input: Object.fromEntries(
        globSync("src/**/*.html").map(file => [
          path.relative(
            "src",
            file.slice(0, file.length - path.extname(file).length),
          ),
          resolve(__dirname, file),
        ]),
      ),
    },
  },
})
