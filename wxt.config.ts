import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ["@wxt-dev/module-react"],
  manifest: {
    web_accessible_resources: [
      {
        matches: ["https://www.linkedin.com/*"],
        resources: ["/icon/ai-icon.svg"],
      },
    ],
  },
});
