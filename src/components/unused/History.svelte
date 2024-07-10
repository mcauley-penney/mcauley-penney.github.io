<script lang="ts">
    import { fade } from "svelte/transition";
    import { WORK } from "../data/content";
    import MdiCalendarBlank from "~icons/mdi/calendar-blank";
    import MdiBusiness from "~icons/mdi/business";
    import MdiLocationOnOutline from "~icons/mdi/location-on-outline";

    function formatDate(start: string, end: string) {
        const startDate = start === null ? new Date() : new Date(start);
        const endDate = end === null ? new Date() : new Date(end);

        let years = endDate.getFullYear() - startDate.getFullYear();
        let months = endDate.getMonth() - startDate.getMonth();

        if (months < 0) {
            years--;
            months += 12;
        }

        let yearString: string = "";

        if (years > 0) {
            yearString = years === 1 ? `${years} year, ` : `${years} years, `;
        }

        const monthString =
            months === 1 ? `${months} month` : `${months} months`;

        return `${yearString}${monthString}`;
    }

    let isResumeLoading = false;
    let isCVLoading = false;
    let showToast = false;
    let toastMessage = "";

    function handleResumeClick() {
        isResumeLoading = true;

        toastMessage = "Résumé download initiated...";
        showToast = true;

        setTimeout(() => {
            isResumeLoading = false;
            showToast = false;
        }, 3000);
    }

    function handleCVClick() {
        isCVLoading = true;

        toastMessage = "CV download initiated...";
        showToast = true;

        setTimeout(() => {
            isCVLoading = false;
            showToast = false;
        }, 3000);
    }
</script>

<div id="history" class="history relative isolate overflow-hidden">
    <div class="mx-auto max-w-5xl px-6 lg:px-8">
        <div id="learning" class="py-16 md:py-32 section">
            <div
                class="max-w-2xl md:inline-flex items-center gap-x-8 inter-font"
            >
                <h1
                    class="heading tracking-tight text-zinc-800
                    dark:text-zinc-100 sm:text-4xl text-2xl"
                >
                    History
                </h1>
                <div
                    class="display: flex justify-content:space-between ml-4
                md:flex-row gap-2 md:gap-0 justify-center items-center mt-6 md:mt-0"
                >
                    <a
                        href="/src/assets/documents/jacob-penney_resume.pdf"
                        target="_blank"
                        class="custom-button {isResumeLoading
                            ? 'custom-button--loading'
                            : ''}"
                        on:click={handleResumeClick}
                        aria-disabled={isResumeLoading}
                    >
                        {#if isResumeLoading}
                            <span class="spinner"></span>
                            Downloading...
                        {:else}
                            <div>
                                <svg
                                    class="download-icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                    ><circle cx="16" cy="16" r="4" /><path
                                        d="M30.94 15.66A16.69 16.69 0 0 0 16 5A16.69 16.69 0 0 0 1.06 15.66a1 1 0 0 0 0 .68A16.69 16.69 0 0 0 16 27a16.69 16.69 0 0 0 14.94-10.66a1 1 0 0 0 0-.68M16 22.5a6.5 6.5 0 1 1 6.5-6.5a6.51 6.51 0 0 1-6.5 6.5"
                                    /></svg
                                >
                                <svg
                                    class="hover-icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    ><path
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M22 8s-4 6-10 6S2 8 2 8m13 5.5l1.5 2.5m3.5-5l2 2M2 13l2-2m5 2.5L7.5 16"
                                        color="black"
                                    /></svg
                                >
                            </div>
                            <span class="ml-2">Résumé</span>
                        {/if}
                    </a>
                    <div class="divider" />
                    <a
                        href="/src/assets/documents/jacob-penney_resume.pdf"
                        target="_blank"
                        class="custom-button {isCVLoading
                            ? 'custom-button--loading'
                            : ''}"
                        on:click={handleCVClick}
                        aria-disabled={isCVLoading}
                    >
                        {#if isCVLoading}
                            <span class="spinner"></span>
                            Downloading...
                        {:else}
                            <svg
                                class="download-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                ><circle cx="16" cy="16" r="4" /><path
                                    d="M30.94 15.66A16.69 16.69 0 0 0 16 5A16.69 16.69 0 0 0 1.06 15.66a1 1 0 0 0 0 .68A16.69 16.69 0 0 0 16 27a16.69 16.69 0 0 0 14.94-10.66a1 1 0 0 0 0-.68M16 22.5a6.5 6.5 0 1 1 6.5-6.5a6.51 6.51 0 0 1-6.5 6.5"
                                /></svg
                            >
                            <svg
                                class="hover-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                ><path
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M22 8s-4 6-10 6S2 8 2 8m13 5.5l1.5 2.5m3.5-5l2 2M2 13l2-2m5 2.5L7.5 16"
                                    color="black"
                                /></svg
                            >
                            <span class="ml-2">Curriculum Vitae</span>
                        {/if}
                    </a>
                </div>
            </div>
            <div
                class="mt-16 border-l border-zinc-200 pl-6 dark:border-zinc-700/50"
            >
                <div class="flex max-w-3xl flex-col space-y-16">
                    {#each WORK as job}
                        <article
                            class="md:grid md:grid-cols-4 md:items-baseline"
                        >
                            <div
                                class="relative z-10 order-first mb-3
                                items-center text-sm text-zinc-400
                                dark:text-zinc-600 mt-1"
                            >
                                <MdiCalendarBlank
                                    class="inline-block mr-2 mb-1"
                                />
                                <span class="inline-block">
                                    {`${job.date[0]} - ${job.date[1]}`}
                                </span>
                                <br />
                                <span class="ml-7">
                                    {formatDate(job.date[0], job.date[1])}
                                </span>
                            </div>
                            <div
                                class="group relative flex flex-col items-start md:col-span-3"
                            >
                                <div
                                    class="text-base font-semibold tracking-tight
                                    text-zinc-800 dark:text-zinc-100 md:text-lg text-sm"
                                >
                                    {job.title}
                                </div>
                                <div
                                    class="text-base tracking-tight
                                    text-zinc-700 dark:text-zinc-300 md:text-base text-xs"
                                >
                                    <MdiBusiness
                                        class="inline-block mr-2 mb-1"
                                    />
                                    {job.company}
                                </div>
                                <div
                                    class="text-base tracking-tight
                                    text-zinc-500 dark:text-zinc-500 md:text-sm text-xs"
                                >
                                    <MdiLocationOnOutline
                                        class="inline-block mr-3 mb-1"
                                    />
                                    {job.location}
                                </div>
                                <p
                                    class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400 md:text-base text-xs"
                                    style="white-space: pre-line;"
                                >
                                    {job.description}
                                </p>
                            </div>
                        </article>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>

{#if showToast}
    <div class="toast" transition:fade>{toastMessage}</div>
{/if}

<style>
    .history {
        background: var(--background);
    }

    .heading {
        color: var(--foreground);
        font-family: "Roboto Slab", serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
    }

    .divider {
        width: 1em;
        height: auto;
        display: inline-block;
    }

    .custom-button {
        align-items: center;
        background-color: var(--accent);
        box-shadow:
            rgba(0, 0, 0, 0.25) 0px 4px 8px -2px,
            rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
        border-radius: 4px;
        border: none;
        color: white;
        cursor: pointer;
        display: flex;
        font-size: 12px;
        padding: 8px 12px;
    }

    .custom-button:hover {
        background-color: var(--accent-hover);
    }

    .custom-button:active {
        transform: scale(0.98);
    }

    .custom-button:active .download-icon {
        display: none;
    }

    .download-icon {
        fill: white;
        display: inline-block;
        height: 1.75em;
        width: 1.75em;
    }

    .hover-icon {
        display: none;
    }

    .custom-button:active .hover-icon {
        stroke: var(--accent-foreground);
        display: block;
        height: 1.75em;
        width: 1.75em;
    }

    .custom-button:hover .download-icon {
        position: relative;
        animation: color_anim 1s ease-in-out infinite;
    }

    .custom-button--loading {
        background-color: var(--secondary);
        color: var(--secondary-foreground);
        cursor: not-allowed;
    }

    .custom-button--loading:hover {
        background-color: var(--secondary);
    }

    .spinner {
        border: 4px solid var(--muted-foreground);
        border-top: 4px solid var(--accent-foreground);
        border-radius: 50%;
        width: 1.5em;
        height: 1.5em;
        animation: spin 1s linear infinite;
        display: inline-block;
        margin-right: 8px;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes color_anim {
        0%,
        100% {
            fill: white;
        }
        50% {
            fill: var(--accent-foreground);
        }
    }

    .toast {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: var(--muted);
        color: var(--muted-foreground);
        padding: 10px 20px;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        z-index: 1000;
    }
</style>
