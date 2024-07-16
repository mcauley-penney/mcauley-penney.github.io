<script>
    import { derived } from "svelte/store";
    import { base } from "$app/paths";
    import { theme } from "$src/stores/theme";

    // Derived store to get the current theme
    const currentTheme = derived(theme, ($theme) => $theme.current);
</script>

<section
    id="contact"
    class="relative h-screen flex items-center justify-center mt-10"
>
    <div class="image-container sm:text-xs md:text-lg">
        {#if $currentTheme === "dark"}
            <img
                src="{base}/lorenz-attractor.png"
                alt="background"
                class="image"
                loading="lazy"
            />
            <div class="caption">
                <p>
                    Rendered Lorenz Attractor by Darien Brito @
                    https://darienbrito.com/2021/07/23/hashtractors/
                </p>
            </div>
        {:else}
            <img
                src="{base}/stanford-bunny.webp"
                alt="background"
                class="image"
                loading="lazy"
            />
            <div class="caption">
                <p>
                    The Stanford Bunny @ https://doi.org/10.3390/jimaging7060096
                </p>
            </div>
        {/if}
    </div>
</section>

<style>
    .image-container {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .image {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .caption {
        font-family: "Inter", sans-serif;
        font-optical-sizing: auto;
        font-weight: 300;
        font-style: normal;
        position: absolute;
        bottom: 5px;
        right: 5px;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        padding: 2px 5px;
        border-radius: 3px;
    }
</style>
