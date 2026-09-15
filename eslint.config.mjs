import { defineConfig } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // This package has no pages/app router of its own — it's a component
      // library consumed by three separate Next.js apps that do.
      "@next/next/no-html-link-for-pages": "off",
    },
  },
]);

export default eslintConfig;
