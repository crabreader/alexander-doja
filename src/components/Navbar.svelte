<script>
    import { toggleMenu } from "../utils";
</script>

<nav class="navbar" id="test">
    <button class="menu-close" on:click={toggleMenu}>X</button>
    <ul>
        <a href="/"><li>Hem</li></a>
        <a href="/"><li>CV</li></a>
        <a href="/"><li>Portfolio</li></a>
        <a href="/"><li>???</li></a>
        <a href="/"><li>Lorem</li></a>
    </ul>
</nav>