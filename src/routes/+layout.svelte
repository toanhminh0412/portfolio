<script>
  let { children } = $props();
  import "../global.css";
  import Navbar from "../components/+Navbar.svelte";
</script>

<main class="md:px-16 py-32 bg-base-300 min-h-screen">
  <!-- <Navbar /> -->
  {@render children()}
</main>