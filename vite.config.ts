import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import Icons from "unplugin-icons/vite";

export default defineConfig({
    plugins: [
        sveltekit(),
        Icons({
            // see https://www.youtube.com/watch?v=6fW613fblwk
            // see https://icones.js.org for icons
            compiler: "svelte",
        }),
    ],
});
