<script>
    import { SOCIAL_MEDIA } from "../data/content";
    import { theme } from "../stores/theme.js";

    let hoverColor = "lightgray";
    $: {
        theme.subscribe(($theme) => {
            hoverColor = $theme.current === "dark" ? "lightgray" : "darkgray";
        });
    }
</script>

<section id="hero">
    <div class="container mx-auto px-4 py-16 text-center">
        <h1 class="hero text-5xl md:text-6xl font-bold mt-10">I'm McAuley</h1>
        <p class="description text-xl md:text-2xl mb-8">
            I write software and research how humans interact with computers
        </p>
    </div>
    <div class="hero flex justify-center gap-x-3">
        {#each SOCIAL_MEDIA as media}
            <a href={media.link} target="_blank" title={media.name}>
                {#if $theme.current === "dark"}
                    <svelte:component
                        this={media.icon}
                        class="hover:text-white w-8 h-8 transition ease-in-out"
                    />
                {:else}
                    <svelte:component
                        this={media.icon}
                        class="hover:text-yellow-500 w-8 h-8 transition ease-in-out"
                    />
                {/if}
            </a>
        {/each}
    </div>
</section>

<style>
    .hero {
        padding: 2rem 0;
        color: var(--foreground);
        font-family: "Roboto Slab", serif;
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
</style>
