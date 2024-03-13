<script>
    import MenuButton from "../components/MenuButton.svelte";
    import Navbar from "../components/Navbar.svelte";
</script>

<div class="page-layout">
    <MenuButton />
    <Navbar />
    <slot />
</div>
