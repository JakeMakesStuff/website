// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercelServerless from "@astrojs/vercel/serverless";
import rehypeSemanticImages from "@benjc/rehype-semantic-images";

// https://astro.build/config
export default defineConfig({
    output: "hybrid",
    integrations: [tailwind()],
    adapter: vercelServerless({
        webAnalytics: {
            enabled: true,
        },
    }),
    prefetch: {
        prefetchAll: true,
    },
    markdown: {
        rehypePlugins: [
            () => {
                /** @ts-ignore */
                return rehypeSemanticImages({
                    elements: {
                        figure: { className: "w-full text-center" },
                        figcaption: { className: "text-black dark:text-white" },
                        img: { className: "mx-auto" },
                    },
                });
            },
        ],
    },
});
