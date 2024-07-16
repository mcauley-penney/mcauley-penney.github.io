<script>
    import { base } from "$app/paths";
</script>

<section
    id="about"
    class="container pt-20 mx-auto mb-10 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14 py-4"
>
    <div class="flex flex-col lg:flex-row justify-between items-start gap-8">
        <h1
            class="font-bold heading text-2xl md:text-4xl tracking-tight inline-block py-1 px-2 mb-5"
        >
            About Me
        </h1>
    </div>
    <div class="flex flex-col lg:flex-row gap-10">
        <p class="plain-text sm:text-lg md:text-lg lg:w-1/3">
            My name is <span class="literal">McAuley Penney</span>. I'm a
            <span class="literal">PhD student and graduate researcher</span>
            under Dr. Marco Gerosa and Dr. Igor Steinmacher in the
            <span class="literal">
                <a href="https://www.reshapelab.site">RESHAPE Lab</a>
                <svg
                    class="inline-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z"
                    />
                </svg>
            </span>
            @ <span class="literal">Northern Arizona University</span>. I study
            and publish in the field of
            <span class="literal">Human-Computer Interaction</span>, right now
            specifically at the intersection of
            <span class="literal">AI and computer science pedagogy</span>.
        </p>
        <p class="plain-text sm:text-lg md:text-lg lg:w-1/3">
            I love programming. I'm interested in <span class="literal"
                >embedded and operating systems, telecommunications and
                navigation, text editors and IDEs, graphics, networks, and
                machine learning</span
            >
            (the last of which I contribute to publications on). I aspire to contribute
            to software that helps other scientists, such as medical researchers
            and climate scientists.
        </p>
        <div class="lg:w-1/3">
            <h2
                class="font-bold text-xl tracking-tight inline-block py-1 px-2 mb-2 rounded"
            >
                Fun Facts 📠
            </h2>
            <p
                class="plain-text sm:text-xs md:text-lg ml-4"
                style="line-height: 1.7;"
            >
                🌩️ I prefer gloomy weather<br />
                🏋️ I aspire to be a competitive powerlifter<br />
                🎨 my favorite musuem is the Musuem of International Folk Art in
                Sante Fe, NM, USA<br />
                ☕ I collect coffee mugs<br />
                💻 I'm excited about hardware<br />
                ✒️ I'm a font nerd<br />

                <span style="display: inline-block;">
                    👹 My favorite video game is
                    <img
                        src="{base}/doom.webp"
                        alt="Logo for the video game Doom"
                        width="100em"
                        height="100em"
                        class="inline-block ml-1"
                    /><br />
                </span>
            </p>
        </div>
    </div>
</section>

<style>
    .plain-text {
        color: var(--foreground);
        font-family: "Inter", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        font-variation-settings: "wdth" 100;
    }

    .literal {
        -webkit-box-decoration-break: clone;
        background-color: var(--secondary);
        border-radius: 4px;
        box-decoration-break: clone;
        color: var(--foreground);
        display: inline;
        line-height: 1.9;
        margin-right: 1px;
        padding: 0.75px 5px;
        font-family: "Inter", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
    }

    .inline-svg {
        fill: var(--muted-foreground);
        display: inline-block;
        margin-left: -0.2em;
        margin-top: -0.2em;
    }

    a:hover {
        text-decoration: underline;
    }
</style>
