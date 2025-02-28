import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";
import security from "eslint-plugin-security";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import jest from "eslint-plugin-jest";

export default tseslint.config(
  js.configs.recommended,
  security.configs.recommended,
  prettierRecommended,
  ...tseslint.configs.recommended,
  { ignores: ["dist", "node_modules", ".yarn"] },
  {
    files: ["**/*.{js,cjs,mjs}"],
    ...tseslint.configs.disableTypeChecked,
  },
  {
    files: ["**/*.{ts,tsx}"],
    ...react.configs.flat.recommended,
    ...reactHooks.configs.recommended,
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
      ...react.configs.flat.recommended.rules,
      ...reactHooks.configs.recommended.rules,
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
    ...jest.configs["flat/recommended"],
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
