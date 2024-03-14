<script>
    import { toggleMenu } from "../utils";
</script>

<nav class="navbar" id="test">
    <button class="menu-close" on:click={toggleMenu}>X</button>
    <ul>
        <a href="/"><li>Hem</li></a>
        <a href="/cv"><li>CV</li></a>
        <a href="/portfolio"><li>Portfolio</li></a>
        <a href="/kontakt"><li>Kontakt</li></a>
    </ul>
</nav>