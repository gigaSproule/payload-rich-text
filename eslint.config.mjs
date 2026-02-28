import js from "@eslint/js";
import jest from "eslint-plugin-jest";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import security from "eslint-plugin-security";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig(
  js.configs.recommended,
  security.configs.recommended,
  prettierRecommended,
  tseslint.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  reactHooks.configs.flat.recommended,
  { ignores: ["dist", "node_modules", ".yarn"] },
  {
    files: ["**/*.{js,cjs,mjs}"],
    extends: [tseslint.configs.disableTypeChecked],
  },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
    },
    rules: {
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: {
        version: "19",
      },
    },
  },
  {
    files: ["**/*.test.{js,ts}", "jest-setup.mjs"],
    extends: [jest.configs["flat/recommended"]],
    languageOptions: {
      globals: {
        document: true,
        window: true,
        ...globals.node,
        ...globals.jest,
      },
    },
  },
);
