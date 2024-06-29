<script>
    import "../global.css";
    import ThemeToggle from "../components/ThemeToggle.svelte";
</script>

<header>
    <h1>My Website</h1>
    <ThemeToggle />
</header>

<main>
    <slot></slot>
    <div class="bg-white dark:bg-gray-800 text-black dark:text-white">
        <p>This content changes color based on the theme.</p>
    </div>
</main>

<footer>
    <p>© 2024 My Website</p>
</footer>
