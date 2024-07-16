<script lang="ts">
    import { writable } from "svelte/store";
    import { CITES } from "$src/data/content";
    import { ScrollArea } from "$lib/components/ui/scroll-area/index.js";
    import * as Pagination from "$lib/components/ui/pagination";

    let currentPage = writable(0);
    const itemsPerPage = 1; // Since each year represents a page

    function paginatedPublications(publications, page) {
        const start = page * itemsPerPage;
        const end = start + itemsPerPage;
        return publications.slice(start, end);
    }

    $: paginatedItems = paginatedPublications(CITES, $currentPage);

    function handlePrevPage() {
        currentPage.update((n) => (n > 0 ? n - 1 : n));
    }

    function handleNextPage() {
        currentPage.update((n) => (n < CITES.length - 1 ? n + 1 : n));
    }
</script>

<div id="academia" class="container pt-20 px-4 sm:px-0 md:px-7 py-4 mb-36">
    <div>
        <h1
            class="font-bold text-2xl md:text-4xl tracking-tight text-zinc-800
        dark:text-zinc-100 px-9 mb-10"
        >
            Academia
        </h1>
        <h2
            class="font-bold tracking-tight text-zinc-800 dark:text-zinc-100 text-xl md:text-2xl mt-2 px-10 mb-5"
        >
            Publications
        </h2>

        <div class="center-container">
            <ScrollArea
                class="h-[40em] w-[60em] bg-card dark:bg-card-dark rounded-md border
        p-4 shadow-shadow text-foreground dark:text-foreground-dark
        border-secondary dark:border-secondary-dark dark:shadow-shadow-dark"
            >
                {#each paginatedItems as cite}
                    <div class="mb-4">
                        <h2 class="text-xl font-semibold">{cite.year}</h2>
                        <div class="divider"></div>
                        {#each cite.entries as entry}
                            <div
                                class="md:mr-8 md:ml-8 mt-8 text-card-foreground dark:text-foreground-dark sm:text-md md:text-lg"
                                style="text-align: left;"
                            >
                                <li
                                    style="padding-left: 1.2em; text-indent: -1.2em; }"
                                >
                                    <a href={entry.doi} target="_blank">
                                        <strong>{entry.authors}</strong>,
                                        {entry.title},
                                        <span class="literal"
                                            >{entry.venue}</span
                                        >.
                                        {entry.doi}.
                                    </a>
                                </li>
                            </div>
                        {/each}
                    </div>
                {/each}
            </ScrollArea>
        </div>

        <Pagination.Root count={CITES.length} perPage={1}>
            <Pagination.Content>
                <Pagination.Item>
                    <Pagination.PrevButton
                        class="hover:bg-hover/95 dark:hover:bg-muted-dark/95
                    text-foreground/95 dark:text-muted/95
                    hover:text-foreground dark:hover:text-muted
                    mx-6 px-[14px] text-[15px] mt-4
                    font-semibold shadow-mini active:scale-98
                    active:transition-all"
                        on:click={() => handlePrevPage()}
                    />
                </Pagination.Item>
                <Pagination.Item>
                    <Pagination.NextButton
                        class="hover:bg-hover/95 dark:hover:bg-muted-dark/95
                    text-foreground/95 dark:text-muted/95
                    hover:text-foreground dark:hover:text-muted
                    mx-6 px-[14px] text-[15px] mt-4
                    font-semibold shadow-mini active:scale-98
                    active:transition-all"
                        on:click={() => handleNextPage()}
                    />
                </Pagination.Item>
            </Pagination.Content>
        </Pagination.Root>
    </div>
    <div style=" width: 1em; height: auto; display: inline-block;"></div>

    <div class="flex flex-col lg:flex-row gap-8 mt-20">
        <div class="flex flex-col lg:flex-row gap-28">
            <div class="flex-1 service-section">
                <h2
                    class="font-bold tracking-tight text-zinc-800 dark:text-zinc-100 text-xl md:text-2xl mt-2 px-10 mb-5"
                >
                    Service
                </h2>
                <h3 class="sm:text-md md:text-xl mt-2">Reviewer</h3>
                <div class="divider"></div>
                <div
                    class="md:mr-8 md:ml-8 mt-8 text-card-foreground dark:text-foreground-dark sm:text-md md:text-lg"
                >
                    <ul style="list-style-type:disc">
                        <li>
                            <strong>Conversations 2023</strong> - 7th International
                            Workshop on Chatbot Research
                        </li>
                    </ul>
                </div>
            </div>
            <div class="flex-1 awards-section">
                <h2
                    class="font-bold tracking-tight text-zinc-800 dark:text-zinc-100 text-xl md:text-2xl mt-2 px-10 mb-5"
                >
                    Awards
                </h2>
                <div
                    class="md:mr-8 md:ml-8 mt-8 text-card-foreground dark:text-foreground-dark sm:text-md md:text-lg"
                >
                    <ul style="list-style-type:disc">
                        <li>
                            Nomination for the 2024 Research and Creative
                            Activity (RCA)
                            <strong
                                >Most Promising Graduate Student Researcher</strong
                            >
                            award, Northern Arizona University (Feb 2024)
                        </li>
                        <br />
                        <li>
                            <strong>Best Paper</strong>, the 7th International
                            Workshop on Chatbot Research (Nov 2023)
                        </li>
                        <br />
                        <li>
                            <strong
                                >Outstanding Senior in Applied Computer Science</strong
                            >, Northern Arizona University (May 2023)
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .center-container {
        display: flex;
        justify-content: center; /* Centers horizontally */
        align-items: center; /* Centers vertically */
    }

    .divider {
        height: 1px;
        background: var(--accent-foreground);
        width: 100%;
        margin-top: 1em;
        margin-bottom: 1em;
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
        font-size: 0.9em;
        font-weight: 500;
        line-height: 1.9;
        margin-right: 1px;
        padding: 0.75px 5px;
    }

    @media (max-width: 1024px) {
        .service-section,
        .awards-section {
            margin: 0 3rem; /* Apply margin on smaller screens */
        }
    }

    a:hover {
        text-decoration: underline;
    }
</style>
