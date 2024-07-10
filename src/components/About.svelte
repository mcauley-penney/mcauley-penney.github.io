<section id="about" class="container px-5 pt-20 mx-auto">
    <div class="flex flex-col lg:flex-row justify-between items-start gap-8">
        <h1
            class="heading text-2xl tracking-tight sm:text-4xl inline-block py-1 px-2 mb-5 rounded"
        >
            About Me
        </h1>
    </div>
    <div class="flex flex-col lg:flex-row gap-8">
        <p class="plain-text lg:w-1/3 leading-relaxed">
            Hi, my name is <span class="literal">McAuley</span>. I'm a
            <span class="literal">PhD student and graduate researcher</span>
            under Dr. Igor Steinmacher in the
            <span class="literal">RESHAPE Lab</span> @
            <span class="literal">Northern Arizona University</span>, where I
            study and publish in the field of
            <span class="literal">Human-Computer Interaction</span>. Right now,
            I specifically study at the intersection of AI and computer science
            pedagogy, focusing on how students interact with nascent
            technologies.
        </p>
        <p class="plain-text lg:w-1/3 leading-relaxed">
            I love programming and am interested in <span class="literal"
                >embedded systems, operating systems, text editors and IDEs,
                graphics, networks, telecommunications and navigation, and
                machine learning</span
            >
            (the last of which I contribute to publications on). I aspire to contribute
            to software which helps other scientists, such as medical researchers,
            astronomers, and climate scientists.
        </p>
        <div class="lg:w-1/3">
            <h2
                class="heading text-xl tracking-tight sm:text-2xl inline-block py-1 px-2 mb-2 rounded"
            >
                Fun Facts 📠
            </h2>
            <div class="grid-container">
                <div>
                    <h3
                        class="heading text-xl tracking-tight sm:text-xl py-1 px-2 mb-2 rounded"
                    >
                        Interests
                    </h3>
                    <p class="plain-text ml-6 mb-6">
                        🦠 Medicine<br />
                        🔭 Astronomy<br />
                        👟 Sports Science<br />
                        ✒️ Typesetting<br />
                        📜 History<br />
                        🎨 Art History<br />
                    </p>
                </div>
                <div>
                    <h3
                        class="heading text-xl tracking-tight sm:text-xl py-1 px-2 mb-2 rounded"
                    >
                        Likes
                    </h3>
                    <p class="plain-text ml-6 mb-6">
                        🌨️ Bleak weather<br />
                        💻 Hardware<br />
                        🏋🏻 Weightlifting<br />
                        ✈️ Travelling<br />
                        <span
                            style="display: inline-flex; align-items: center;"
                        >
                            👹
                            <img
                                src="/src/assets/doom_logo.gif"
                                alt="Logo for the video game Doom"
                                width="70em"
                                height="70em"
                                style="margin-left: 10px; margin-top: 5px"
                            />
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .plain-text {
        color: var(--foreground);
        font-family: "Inter", sans-serif;
        font-optical-sizing: auto;
    }

    .literal {
        -webkit-box-decoration-break: clone;
        background-color: var(--secondary);
        border-radius: 4px;
        box-decoration-break: clone;
        color: var(--foreground);
        display: inline;
        font-family: "JetBrains Mono", monospace;
        font-optical-sizing: auto;
        font-size: 0.85em;
        font-weight: 500;
        line-height: 1.9;
        margin-right: 1px;
        padding: 0.75px 5px;
    }

    .heading {
        color: var(--foreground);
        font-family: "Roboto Slab", serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
    }

    .grid-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px; /* Adjust the gap between grid items */
    }
</style>
