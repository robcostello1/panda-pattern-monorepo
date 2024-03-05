import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  strictTokens: true,
  strictPropertyValues: true,
  jsxFramework: "react",
  importMap: "@scootch/styled-system",
  outdir: "../styled-system/dist",
});
