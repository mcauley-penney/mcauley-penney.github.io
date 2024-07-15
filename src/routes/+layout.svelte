<script lang="ts">
    import "../global.css";
    import NavBar from "../components/Navbar.svelte";
    import Hero from "../components/Hero.svelte";
    import About from "../components/About.svelte";
    import History from "../components/History.svelte";
    import Publications from "../components/Publications.svelte";
</script>

<NavBar />
<Hero />
<About />
<History />
<Publications />

<main>
    <slot></slot>
</main>

<footer></footer>
