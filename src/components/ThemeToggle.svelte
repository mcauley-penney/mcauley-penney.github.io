<script>
    import { onDestroy } from "svelte";
    import { theme } from "../stores/theme";
    import { BROWSER } from "esm-env";
    import IconSun from "~icons/feather/sun";
    import IconMoon from "~icons/feather/moon";
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
                    <IconMoon class="icon" />
                {:else}
                    <IconSun class="icon" />
                {/if}
            </div>
        {/if}
    </Label>
</div>

<style>
    .icon {
        color: var(--accent-foreground);
    }
</style>
