<script lang="ts">
    import axios from "axios";
    import { onMount } from "svelte";    
    import Github from 'svelte-feathers/Github.svelte';
    import ExternalLink from 'svelte-feathers/ExternalLink.svelte'

    let loading: boolean = true;
    let errored: boolean = false;
    let repos: any;

    onMount(async () => {
        try {
            const response = await axios.get('https://api.github.com/users/crabreader/repos');

            repos = response.data;
            loading = false;
        } catch (error) {
            errored = true;
            loading = false;

            console.error('Kunde inte hämta repos:', error);

            repos = {
                error: {
                    error_text: 'Kunde inte hämta repos från GitHub',
                    error_message: error
                }
            };
        }
    });
</script>

<h1>Portfolio</h1>
{#if loading}
    <div class="loading">
        <h2>Hämtar projekt...</h2>
    </div>
{:else if errored}
    <h3>{repos.error.error_text}: {repos.error.error_message}</h3>
{:else}
    <div class="portfolio-grid">
        {#each repos as repo}
            <div class="portfolio-item">
                <h2><Github /> {repo.name}</h2>
                <hr>
                <p>{repo.description}</p>
                <a href={repo.html_url} target="_blank">Github<ExternalLink size="15" /></a>
            </div>
        {/each}
    </div>
{/if}