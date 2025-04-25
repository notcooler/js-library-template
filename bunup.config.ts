import { defineConfig } from "bunup"

export default defineConfig({
  entry: [
    "src/index.ts",
    "src/verysecret/index.ts"
  ],
  clean: true,
  format: ["esm", "cjs"],
  dts: true,
  minify: true,
  target: "browser",
  outputExtension: ({ format }) => ({
    js: format === "esm" ? ".mjs" : ".cjs",
    dts: `.d.ts`,
  }),
})
