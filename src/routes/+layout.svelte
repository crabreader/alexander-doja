<script>
    import Navbar from "../components/Navbar.svelte";
    import Footer from "../components/Footer.svelte";
</script>

<div class="page-layout">
    <Navbar />
    <main>
        <slot />
    </main>
    <Footer />
</div>
