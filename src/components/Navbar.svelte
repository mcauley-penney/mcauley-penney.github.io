<script lang="ts">
    import { NAV_LINKS } from "../data/content";
    import ThemeToggle from "../components/ThemeToggle.svelte";
    import PhList from "~icons/ph/list";
    import PhX from "~icons/ph/x";

    let menuOpen = false;

    function toggleMenu() {
        menuOpen = !menuOpen;
    }
</script>

<header
    class="p-4 fixed top-0 w-full z-20 backdrop-filter backdrop-blur-xl navbar"
>
    <div class="container mx-auto flex items-center justify-between">
        <a
            href="#hero"
            class="link jetbrains-font text-xl py-1 px-2 inline-flex items-center rounded-sm duration-100"
        >
            📖 JMP
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
                    class="link text-xs py-1 px-2 inline-flex items-center
                    rounded-sm duration-100">{link.name}</a
                >
            {/each}
        </nav>
        <ThemeToggle />
    </div>

    <!--  Menu mobile -->
    {#if menuOpen}
        <nav
            class="font-bold text-center text-2xl md:hidden flex flex-col gap-y-4 h-screen justify-center inter-font"
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
        font-family: "Inter", monospace;
        font-optical-sizing: auto;
        color: var(--foreground);
    }
    .navbar {
        background-color: var(--muted);
    }
    .link {
        color: var(--muted-foreground);
    }
    .link:hover {
        background-color: var(--hover);
        color: var(--foreground);
    }
</style>
