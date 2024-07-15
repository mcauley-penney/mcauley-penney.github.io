<script lang="ts">
    import { NAV_LINKS } from "$src/data/content";
    import ThemeToggle from "$src/components/ThemeToggle.svelte";
    import PhList from "~icons/ph/list";
    import PhX from "~icons/ph/x";

    let menuOpen = false;

    function toggleMenu() {
        menuOpen = !menuOpen;
    }
</script>

<header class="p-4 fixed w-full z-20 navbar">
    <div class="container mx-auto flex items-center justify-between">
        <a
            href="#hero"
            class="link jetbrains-font sm:text-xl md:text-2xl inline-flex rounded-sm duration-100"
        >
            MCAULEY
        </a>
        <div class="md:hidden flex inter-font">
            {#if menuOpen}
                <button on:click={toggleMenu}>
                    <PhX width="25" height="25" />
                </button>
            {:else}
                <button on:click={toggleMenu}>
                    <PhList width="25" height="25" />
                </button>
            {/if}
        </div>

        <!--  Menu desktop -->
        <nav class="hidden md:inline-flex items-center gap-x-4 inter-font">
            {#each NAV_LINKS as link}
                <a
                    href={link.link}
                    class="link text-lg py-1 px-2 inline-flex items-center rounded-sm duration-100"
                >
                    {link.name}
                </a>
            {/each}
        </nav>
        <ThemeToggle />
    </div>

    <!--  Menu mobile -->
    {#if menuOpen}
        <nav
            class="font-bold text-center text-xl md:hidden flex flex-col gap-y-4 h-screen justify-center inter-font"
        >
            {#each NAV_LINKS as link}
                <a href={link.link} on:click={toggleMenu}>
                    {link.name}
                </a>
            {/each}
        </nav>
    {/if}
</header>

<style>
    .jetbrains-font {
        font-family: "JetBrains Mono", monospace;
        font-optical-sizing: auto;
        font-weight: 500;
    }
    .inter-font {
        font-family: "Inter", sans-serif;
        font-optical-sizing: auto;
        color: var(--foreground);
    }
    .navbar {
        backdrop-filter: blur(10px); /* Apply blur to the background */
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Add a subtle shadow */
    }
    .link {
        color: var(--foreground);
    }
    .link:hover {
        background-color: var(--hover);
    }
</style>
