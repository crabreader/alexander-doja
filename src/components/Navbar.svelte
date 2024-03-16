<script>
    import { onMount } from "svelte";
    import { toggleMenu } from "../utils";
    import Menu from 'svelte-feathers/Menu.svelte';

    let isPhoneSize = false;

    function handleLinkClick() {
        if (isPhoneSize) {
            toggleMenu();
        }
    }

    function checkScreenSize() {
        isPhoneSize = window.innerWidth <= 900;
    }

    onMount(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    });
</script>


{#if isPhoneSize}
    <button class="menu-button" on:click={toggleMenu}>
        <Menu size="26"/>
    </button>    
{/if}

<nav class="navbar">
    {#if isPhoneSize}
        <button class="menu-close" on:click={toggleMenu}>X</button> 
    {/if}
    <ul>
        <a href="/" on:click={handleLinkClick}><li>Hem</li></a>
        <a href="/cv" on:click={handleLinkClick}><li>CV</li></a>
        <a href="/portfolio" on:click={handleLinkClick}><li>Portfolio</li></a>
        <a href="/kontakt" on:click={handleLinkClick}><li>Kontakt</li></a>
    </ul>
</nav>