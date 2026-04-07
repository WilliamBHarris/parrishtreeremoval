// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://parrishtreeremoval.com",
  output: "static",
  vite: {
    build: {
      cssCodeSplit: false,
    },
  },
  devToolbar: {
    enabled: false,
  },
});
