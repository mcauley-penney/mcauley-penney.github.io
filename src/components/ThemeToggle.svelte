<script>
    import { onMount } from "svelte";
    import IconSun from "~icons/feather/sun";
    import IconMoon from "~icons/feather/moon";
    import { Label } from "$lib/components/ui/label/index.js";
    import { Switch } from "$lib/components/ui/switch/index.js";

    let isDarkMode = false;

    onMount(() => {
        if (localStorage.getItem("theme")) {
            isDarkMode = localStorage.getItem("theme") === "dark";
        } else {
            isDarkMode = window.matchMedia(
                "(prefers-color-scheme: dark)",
            ).matches;
        }
        document.documentElement.classList.toggle("dark", isDarkMode);
    });

    function toggleTheme() {
        isDarkMode = !isDarkMode;
        document.documentElement.classList.toggle("dark", isDarkMode);
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }
</script>

<div class="flex items-center space-x-2">
  <Switch id="dark-mode-switch" checked={isDarkMode} onCheckedChange={toggleTheme} />
  <Label for="dark-mode-switch">Dark Mode</Label>
</div>
