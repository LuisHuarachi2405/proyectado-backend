import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import unusedImports from "eslint-plugin-unused-imports";
import tsParser from "@typescript-eslint/parser";
import airbnbBaseTypescript from "eslint-config-airbnb-base-typescript";

export default defineConfig([
  js.configs.recommended,
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { files: ["**/*.{js,mjs,cjs,ts}"], languageOptions: { 
      parser: tsParser,
      globals: {
        ...globals.browser,
        ...globals.node,
      }
    } 
  },
  { files: ["**/*.{js,mjs,cjs,ts}"], 
    plugins: { 
      js,
      "@typescript-eslint": tseslint,
      "unused-imports": unusedImports,
    },
    rules: {
      ...airbnb.rules,
      ...airbnbBaseTypescript.rules,
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
    extends: ["js/recommended"] 
  },
  tseslint.configs.recommended,
]);