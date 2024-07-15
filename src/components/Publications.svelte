<script lang="ts">
    import { CITES } from "../data/content";
</script>

<div id="academia" class="container sm:px-0 md:px-0 pt-20 mx-auto mb-10">
    <div class="mx-auto max-w-6xl lg:px-6">
        <div class="pb-4 section">
            <div class="items-center">
                <h1
                    class="heading tracking-tight text-zinc-800
                    dark:text-zinc-100 sm:text-2xl md:text-4xl px-10 mb-5"
                >
                    Academia
                </h1>
                <h2
                    class="heading tracking-tight text-zinc-800
                    dark:text-zinc-100 sm:text-xl md:text-2xl px-10 mb-5"
                >
                    Publications
                </h2>
            </div>
        </div>
    </div>
    <div class="pb-4 section">
        {#each CITES as { year, entries }}
            <div class="sm:text-md md:text-xl publication-year inter-font">
                {year}
                <div class="divider"></div>
            </div>
            <div class="publications-list sm:text-xs md:text-xl">
                <ul style="list-style-type:disc">
                    {#each entries as entry}
                        <div class="publication-details">
                            <li>
                                <a href={entry.doi} target="_blank">
                                    <strong>{entry.authors}</strong>,
                                    {entry.title},
                                    <span class="literal">{entry.venue}</span>.
                                    {entry.doi}</a
                                >.
                            </li>
                        </div>
                    {/each}
                </ul>
            </div>
        {/each}
    </div>
    <div class="mx-auto max-w-6xl lg:px-6">
        <h2
            class="heading tracking-tight text-zinc-800
                    dark:text-zinc-100 sm:text-xl md:text-2xl px-10 mb-5"
        >
            Service
        </h2>
        <div class="sm:text-md md:text-xl publication-year inter-font">
            Reviewer
        </div>
        <div class="divider"></div>
        <div class="sm:text-md md:text-xl publication-details">
            <ul style="list-style-type:disc">
                <li>
                    <strong>Conversations 2023</strong> - 7th International Workshop
                    on Chatbot Research
                </li>
            </ul>
        </div>
    </div>
</div>
<div class="mx-auto max-w-6xl lg:px-6">
    <h2
        class="heading tracking-tight text-zinc-800
                    dark:text-zinc-100 sm:text-xl md:text-2xl px-10 mb-5"
    >
        Awards
    </h2>
    <div class="sm:text-md md:text-xl publication-details">
        <ul style="list-style-type:disc">
            <li>
                Nomination for the 2024 Research and Creative Activity (RCA)
                <strong>Most Promising Graduate Student Researcher</strong> award,
                Northern Arizona University (February 2024)
            </li>
            <br />
            <li>
                <strong>Best Paper</strong> at the 7th International Workshop on
                Chatbot Research (November 2023)
            </li>
            <br />
            <li>
                <strong>Outstanding Senior in Applied Computer Science</strong>,
                Northern Arizona University (May 2023)
            </li>
        </ul>
    </div>
</div>

<style>
    .publication-year {
        color: var(--foreground);
        font-weight: bold;
        margin-bottom: 10px;
        position: relative;
    }

    .inter-font {
        font-family: "Inter", monospace;
        font-optical-sizing: auto;
    }

    .divider {
        height: 1px;
        background: var(--muted);
        width: 100%;
        margin-top: 1em;
        margin-bottom: 1em;
    }

    .publications-list {
        margin-top: 1em;
    }

    .publication-details {
        color: var(--foreground);
        margin-bottom: 2em;
        margin-left: 1em;
        margin-right: 3em;
        text-align: left;
    }

    .heading {
        color: var(--foreground);
        font-family: "Roboto Slab", serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
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

    a:hover {
        text-decoration: underline;
    }
</style>
