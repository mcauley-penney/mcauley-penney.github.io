import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import Icons from "unplugin-icons/vite";

export default defineConfig({
    plugins: [
        sveltekit(),
        Icons({
            compiler: "svelte",
        }),
    ],
    css: {
        postcss: {
            plugins: [tailwindcss(), autoprefixer()],
        },
    },
});
