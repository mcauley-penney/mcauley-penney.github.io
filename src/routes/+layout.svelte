<script lang="ts">
    import "$lib/styles/global.css";
    import NavBar from "$src/components/Navbar.svelte";
    import Hero from "$src/components/Hero.svelte";
    import About from "$src/components/About.svelte";
    import History from "$src/components/History.svelte";
    import Publications from "$src/components/Publications.svelte";
    import  Contact from "$src/components/Contact.svelte";
</script>

<NavBar />
<Hero />
<About />
<History />
<Publications />
<Contact />

<main>
    <slot></slot>
</main>

<footer></footer>
