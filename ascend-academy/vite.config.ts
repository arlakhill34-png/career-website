import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    prerender: {
      enabled: true,
      crawlLinks: true,
      autoStaticPathsDiscovery: true,
      concurrency: 4,
      failOnError: true,
    },
    spa: {
      enabled: true,
    },
  },
});
