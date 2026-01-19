import { defineConfig, globalIgnores } from "eslint/config"
import { FlatCompat } from "@eslint/eslintrc"

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

export default defineConfig([
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript"],
  }),

  // Override default ignores of eslint-config-next.
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
])
