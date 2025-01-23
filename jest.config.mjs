/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jsdom",
  testMatch: ["**/__tests__/**/*.+(test).(ts|tsx|js)"],
  collectCoverageFrom: [
    "**/*.{ts,tsx,js}",
    "!**/coverage/**",
    "!**/dist/**",
    "!**/node_modules/**",
    "!**/__tests__/**",
    "!**/*.config.js",
  ],
  setupFilesAfterEnv: ["<rootDir>/jest-setup.mjs"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};

export default config;
