import "@testing-library/jest-dom";
import crypto from "node:crypto";

Object.defineProperty(global, "crypto", {
  value: {
    randomUUID: () => crypto.randomUUID(),
  },
});
