import aws from "astro-sst/lambda";
import react from "@astrojs/react";
import { defineConfig } from "astro/config";

export default defineConfig({
  output: "server",
  adapter: aws(),
  integrations: [react()]
});
