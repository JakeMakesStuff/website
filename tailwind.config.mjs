/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        h2: {
                            marginTop: "1em",
                            marginBottom: "0.5em",
                        },
                        "--tw-prose-bullets": "black",
                    },
                },
                invert: {
                    css: {
                        "--tw-prose-bullets": "white",
                    },
                },
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
