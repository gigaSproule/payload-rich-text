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
  { ignores: ["dist", "node_modules", ".yarn"] },
  {
    files: ["**/*.{js,cjs,mjs}"],
    extends: [tseslint.configs.disableTypeChecked],
  },
  {
    files: ["**/*.{ts,tsx}"],
    extends: [react.configs.flat.recommended, reactHooks.configs.recommended],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
    },
    rules: {
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: {
        version: "detect",
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
