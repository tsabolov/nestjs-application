import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    dir: "./e2e",
    globalSetup: ["./e2e/_setup.ts"],
    watch: false,
  },
});
