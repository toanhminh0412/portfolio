<script>
  let { children } = $props();
  import "../global.css";
  import Navbar from "../components/+Navbar.svelte";
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</svelte:head>

<main class="md:px-16 py-32 bg-base-100 min-h-screen bg-[url('/img/bg.svg')] bg-cover bg-center bg-fixed">
  <!-- <Navbar /> -->
  {@render children()}
</main>