<script lang="ts">
    import { base } from "$app/paths";
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    import { WORK, EDUCATION } from "$src/data/content";
    import MdiCalendarBlank from "~icons/mdi/calendar-blank";
    import MdiBusiness from "~icons/mdi/business";
    import MdiSchool from "~icons/mdi/school";
    import MdiLocationOnOutline from "~icons/mdi/location-on-outline";

    import {
        Accordion,
        AccordionContent,
        AccordionItem,
        AccordionTrigger,
    } from "$lib/components/ui/accordion/index.ts";

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

    let isMobile = false;

    onMount(() => {
        const handleResize = () => {
            isMobile = window.innerWidth < 600;
        };

        handleResize(); // Call once to set initial state
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    });
</script>

<div id="history" class="container pt-20 mx-auto mb-10 md:px-7">
    <div class="py-2 section">
        <div class="flex flex-wrap items-center gap-1 inter-font">
            <h1
                class="font-bold text-2xl md:text-4xl tracking-tight text-zinc-800 dark:text-zinc-100 px-9 mb-5"
            >
                History
            </h1>
            <div class="flex flex-wrap items-center gap-2 mb-4">
                <a
                    href="{base}/documents/jacob-penney_resume.pdf"
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
                        <div class="flex items-center">
                            <svg
                                class="download-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                            >
                                <circle cx="16" cy="16" r="4" />
                                <path
                                    d="M30.94 15.66A16.69 16.69 0 0 0 16 5A16.69 16.69 0 0 0 1.06 15.66a1 1 0 0 0 0 .68A16.69 16.69 0 0 0 16 27a16.69 16.69 0 0 0 14.94-10.66a1 1 0 0 0 0-.68M16 22.5a6.5 6.5 0 1 1 6.5-6.5a6.51 6.51 0 0 1-6.5 6.5"
                                />
                            </svg>
                            <svg
                                class="hover-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M22 8s-4 6-10 6S2 8 2 8m13 5.5l1.5 2.5m3.5-5l2 2M2 13l2-2m5 2.5L7.5 16"
                                    color="black"
                                />
                            </svg>
                            <span class="ml-2 text-xs md:text-md">Resume</span>
                        </div>
                    {/if}
                </a>
                <a
                    href="{base}/documents/jacob-penney_resume.pdf"
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
                        <div class="flex items-center">
                            <svg
                                class="download-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                            >
                                <circle cx="16" cy="16" r="4" />
                                <path
                                    d="M30.94 15.66A16.69 16.69 0 0 0 16 5A16.69 16.69 0 0 0 1.06 15.66a1 1 0 0 0 0 .68A16.69 16.69 0 0 0 16 27a16.69 16.69 0 0 0 14.94-10.66a1 1 0 0 0 0-.68M16 22.5a6.5 6.5 0 1 1 6.5-6.5a6.51 6.51 0 0 1-6.5 6.5"
                                />
                            </svg>
                            <svg
                                class="hover-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M22 8s-4 6-10 6S2 8 2 8m13 5.5l1.5 2.5m3.5-5l2 2M2 13l2-2m5 2.5L7.5 16"
                                    color="black"
                                />
                            </svg>
                            {#if isMobile === true}
                                <span class="ml-2 text-xs">CV</span>
                            {:else}
                                <span class="ml-2 text-md"
                                    >Curriculum Vitae</span
                                >
                            {/if}
                        </div>
                    {/if}
                </a>
            </div>
        </div>
    </div>
    <h2
        class="font-bold tracking-tight text-zinc-800 dark:text-zinc-100 text-xl md:text-2xl mt-2 px-10 mb-5"
    >
        Work
    </h2>
    <div class="timeline">
        {#each WORK as job}
            <div class="mb-8 items-start relative mt-6">
                <div class="work-entry-icon ml-4 sm:text-md md:text-xl">
                    <MdiBusiness />
                </div>
                <div class="work-entry ml-12">
                    <Accordion value={isMobile ? [] : ["accordion"]}>
                        <AccordionItem value="accordion" style="border: none;">
                            <AccordionTrigger
                                class="sm:text-md lg:text-xl font-semibold text-zinc-700 dark:text-zinc-300"
                            >
                                {job.title}
                            </AccordionTrigger>
                            <h4
                                class="sm:text-md lg:text-lg tracking-tight text-zinc-700 dark:text-zinc-300"
                            >
                                {job.company}
                            </h4>
                            <h5
                                class="sm:text-sm md:text-lg tracking-tight text-zinc-500 dark:text-zinc-500 mb-1"
                            >
                                <MdiLocationOnOutline
                                    class="inline-block mr-2 mb-1"
                                />
                                {job.location}
                            </h5>

                            <p
                                class="sm:text-sm md:text-lg text-zinc-500 dark:text-zinc-500"
                            >
                                <MdiCalendarBlank
                                    class="inline-block mr-2 mb-1"
                                />
                                {#if job.delta === null}
                                    {`${job.date[0]} - `}
                                    <span
                                        class="latest-badge sm:text-sm md:text-lg text-zinc-700 dark:text-zinc-300"
                                    >
                                        Present
                                    </span>
                                {:else}
                                    {`${job.date[0]} - ${job.date[1]}`}
                                {/if}
                            </p>
                            <p
                                class="sm:text-sm md:text-lg text-zinc-500 dark:text-zinc-500 mb-6 ml-9"
                            >
                                {formatDate(job.date[0], job.date[1])}
                            </p>
                            <AccordionContent
                                class="text-base tracking-tight text-zinc-500 dark:text-zinc-500"
                            >
                                <p
                                    class="text-gray-900 dark:text-gray-300 sm:text-md md:text-lg pr-6 md:pr-40"
                                    style="white-space: pre-line"
                                >
                                    {job.description}
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        {/each}
    </div>
    <h2
        class="font-bold text-xl md:text-2xl mt-12 heading tracking-tight text-zinc-800 dark:text-zinc-100 px-10 mb-5"
    >
        Education
    </h2>
    <div class="timeline">
        {#each EDUCATION as degree}
            <div class="mb-12 items-start relative mt-6">
                <div class="edu-entry-icon ml-4 sm:text-md md:text-xl">
                    <MdiSchool />
                </div>
                <div class="ml-16 edu-entry">
                    <h3
                        class="sm:text-md lg:text-xl font-semibold text-zinc-700 dark:text-zinc-300"
                    >
                        {degree.degree}
                    </h3>
                    <h4
                        class="sm:text-md lg:text-lg tracking-tight text-zinc-700 dark:text-zinc-300"
                    >
                        {degree.school}
                    </h4>
                    <h5
                        class="sm:text-sm md:text-lg tracking-tight text-zinc-500 dark:text-zinc-500 mb-1"
                    >
                        <MdiLocationOnOutline class="inline-block mr-2 mb-1" />
                        {degree.location}
                    </h5>

                    <p
                        class="sm:text-sm md:text-lg text-zinc-500 dark:text-zinc-500"
                    >
                        {#if degree.date[1] === null && degree.date[1] === null}
                            <MdiCalendarBlank class="inline-block mr-2 mb-1" />
                            {`${degree.date[0]} - `}
                            <span
                                class="latest-badge sm:text-sm md:text-lg text-zinc-700 dark:text-zinc-300"
                            >
                                Present
                            </span>
                        {/if}
                    </p>
                    {#if degree.desc !== undefined}
                        <p
                            class="sm:text-sm md:text-lg text-zinc-500 dark:text-zinc-500"
                        >
                            {degree.desc}
                        </p>
                    {/if}
                </div>
            </div>
        {/each}
    </div>
</div>

{#if showToast}
    <div class="toast" transition:fade>{toastMessage}</div>
{/if}

<style>
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
        display: inline-flex;
        font-size: 12px;
        padding: 6px 8px;
        font-weight: 500;
    }

    @media (max-width: 700px) {
        .custom-button {
            font-size: 8px;
            font-weight: 400;
        }
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
        height: 2em;
        width: 2em;
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

    .timeline {
        position: relative;
    }

    .timeline:before {
        content: "";
        position: absolute;
        left: 1rem;
        top: 0;
        bottom: 0;
        width: 1px;
        background: var(--muted);
    }

    .work-entry {
        margin-top: -2rem;
    }

    .work-entry-icon {
        left: 1.25rem;
        transform: translateX(-50%);
        width: 2.5rem;
        height: 2.5rem;
        background: var(--background);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--secondary-foreground);
    }

    .edu-entry {
        margin-top: -2rem;
    }

    .edu-entry-icon {
        left: 1.25rem;
        transform: translateX(-50%);
        width: 2.5rem;
        height: 2.5rem;
        background: var(--background);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--secondary-foreground);
    }

    .inter-font {
        font-family: "Inter", sans-serif;
        font-optical-sizing: auto;
        color: var(--foreground);
    }

    .latest-badge {
        display: inline-block;
        background: var(--secondary);
        color: var;
        padding: 1px 5px;
        border-radius: 4px;
        font-weight: 400;
        margin-left: 2px;
    }
</style>
