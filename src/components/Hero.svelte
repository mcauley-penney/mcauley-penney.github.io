<script>
    import { base } from "$app/paths";
    import { SOCIAL_MEDIA } from "$src/data/content";
    import { theme } from "$src/stores/theme.js";

    let hoverColor = "lightgray";
    $: {
        theme.subscribe(($theme) => {
            hoverColor = $theme.current === "dark" ? "lightgray" : "darkgray";
        });
    }
</script>

<section
    id="hero"
    class="container mx-auto flex px-5 2xl:px-28 pt-20 md:pt-24 lg:pt-24 2xl:pt-0 2xl:min-h-screen flex-col lg:flex-row items-center"
>
    <div class="text-container lg:w-1/2 flex flex-col items-center text-center">
        <h1 class="hero text-4xl md:text-6xl font-bold">I'm McAuley</h1>

        <p class="description text-xl md:text-4xl mb-8">
            I write software and research how humans interact with computers
        </p>
        <div class="hero flex justify-center gap-x-3">
            {#each SOCIAL_MEDIA as media}
                <a href={media.link} target="_blank" title={media.name}>
                    {#if $theme.current === "dark"}
                        <svelte:component
                            this={media.icon}
                            class="text-gray-300 hover:text-white w-8 h-8 transition ease-in-out"
                        />
                    {:else}
                        <svelte:component
                            this={media.icon}
                            class="hover:text-hover w-8 h-8 transition ease-in-out"
                        />
                    {/if}
                </a>
            {/each}
        </div>
    </div>

    <div class="image-container lg:w-1/2 flex justify-center lg:justify-end">
        <img
            class="object-cover object-center transition ease-in-out duration-300 shadow-2xl shadow-color-primary/50"
            alt="McAuley through a ZWO ASI camera, Spring 2023"
            src="{base}/me_in_fits.png"
        />
    </div>
</section>

<style>
    .hero {
        padding: 2rem 0;
        color: var(--foreground);
        font-family: "JetBrains Mono", monospace;
        font-optical-sizing: auto;
        font-weight: 500;
        font-style: normal;
    }

    .description {
        color: var(--muted-foreground);
        font-family: "Inter", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
    }

    .text-container {
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .image-container img {
        max-width: 100%;
        height: auto;
    }
</style>
