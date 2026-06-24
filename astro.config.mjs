// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { satteri, satteriHeadingIdsPlugin } from "@astrojs/markdown-satteri";
import { defineHastPlugin } from "satteri";

// https://astro.build/config
export default defineConfig({
  markdown: {
    processor: satteri({
      features: {
        headingAttributes: true,
      },
      // hastPlugins: [satteriHeadingIdsPlugin, hastPlugin],
    }),
  },
  integrations: [
    starlight({
      title: "My Docs",
    }),
  ],
});

export function hastPlugin() {
  return defineHastPlugin({
    name: "test-plugin",
    element: {
      filter: ["h1", "h2", "h3", "h4", "h5", "h6"],
      visit: (node) => {
        // Read the custom ID
        console.log(
          "🚨 [astro.config.mjs:32] node.properties['id']:",
          node.properties["id"],
        );
      },
    },
  });
}
