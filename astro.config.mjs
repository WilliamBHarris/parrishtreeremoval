// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://parrishtreeremoval.com",
  output: "static",
  build: {
    inlineStylesheets: "always",
  },
  devToolbar: {
    enabled: false,
  },
});
