<script>
    import { onDestroy } from "svelte";
    import { theme } from "$src/stores/theme";
    import { BROWSER } from "esm-env";
    import { Label } from "$lib/components/ui/label/index.ts";
    import { Switch } from "$lib/components/ui/switch/index.ts";

    function toggle() {
        const upcoming_theme = $theme.current === "light" ? "dark" : "light";

        if (
            upcoming_theme ===
            (window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light")
        ) {
            // Switch the preference to `system`
            $theme.preference = "system";
        } else {
            // Switch the preference to `light` or `dark`
            $theme.preference = upcoming_theme;
        }

        $theme.current = upcoming_theme;
    }

    /** @param {MediaQueryListEvent} e */
    const cb = (e) =>
        theme.set({
            preference: $theme.preference,
            current: e.matches ? "dark" : "light",
        });

    /** @type {MediaQueryList} */
    let query;

    $: {
        if (!BROWSER) break $;

        query?.removeEventListener("change", cb);

        if ($theme.preference === "system") {
            query = window.matchMedia("(prefers-color-scheme: dark)");
            query.addEventListener("change", cb);
        }
    }

    onDestroy(() => query?.removeEventListener("change", cb));
</script>

<div class="flex items-center space-x-2">
    <Switch
        id="dark-mode-switch"
        checked={$theme.current === "dark"}
        onCheckedChange={toggle}
    />
    <Label for="dark-mode-switch">
        {#if BROWSER}
            <div class="icon">
                {#if $theme.current === "dark"}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon"
                        viewBox="0 0 24 24"
                        ><path
                            fill-rule="evenodd"
                            d="M12.97 3a8.02 8.02 0 0 0-4.054 7c0 4.418 3.522 8 7.866 8c1.146 0 2.236-.25 3.218-.698C18.39 19.544 15.787 21 12.849 21C7.962 21 4 16.97 4 12s3.962-9 8.849-9z"
                        /></svg
                    >
                {:else}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon"
                        viewBox="0 0 24 24"
                        ><path
                            d="M12 18a6 6 0 1 1 0-12a6 6 0 0 1 0 12m0-2a4 4 0 1 0 0-8a4 4 0 0 0 0 8M11 2h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zm-8 8h2v3h-2zm7.621-15l1.415 1.414l-2.122 2.122L16.5 6.12zM16.5 17.414L17.914 16l2.122 2.121l-1.415 1.415zM6.121 16l1.415 1.414l-2.122 2.122L4 18.12zM4 5.414L5.414 4l2.122 2.121L6.12 7.536z"
                        /></svg
                    >
                {/if}
            </div>
        {/if}
    </Label>
</div>

<style>
    .icon {
        fill: var(--accent-foreground);
        height: 2em;
        width: 2em;
    }
</style>
