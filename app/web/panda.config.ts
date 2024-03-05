import { defineConfig } from "@pandacss/dev";
import path from "path";

const COMPONENT_LIBRARY_PATH = "../../packages/ui-lib/dist";
const STYLED_SYSTEM_PATH = "../../packages/styled-system/dist";

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  strictTokens: true,
  strictPropertyValues: true,
  include: [
    "./src/**/*.{ts,tsx,js,jsx}",
    path.join(COMPONENT_LIBRARY_PATH, "/**/*.{ts,tsx,js,jsx}"),
  ],
  jsxFramework: "react",
  outdir: STYLED_SYSTEM_PATH,
  importMap: "@eonnext/styled-system",
});
