<script lang="ts">
    import "../global.css";
    import NavBar from "../components/Navbar.svelte";
    import Hero from "../components/Hero.svelte";
    import About from "../components/About.svelte";
    import History from "../components/History.svelte";
</script>

<NavBar />
<Hero />
<About />
<History />

<main>
    <slot></slot>
</main>

<footer></footer>
