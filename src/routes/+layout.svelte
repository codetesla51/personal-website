<script>
  import { onMount } from 'svelte';
  import logo from "../assets/images/svg.svg";
  import Loader from "$lib/components/reusable/prelaoder.svelte";
    import Button from "$lib/components/reusable/button.svelte";    
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  import "../app.css";

  let navState = false;
  let isLoading = true;

  const navlinks = [
    { name: "about", sectionid: "about" },
    { name: "projects", sectionid: "projects" },
    { name: "contact", sectionid: "contact" },
  ];

  function handleLoad() {
    isLoading = false;
  }

  function toggleNav() {
    navState = !navState;
  }

  onMount(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
  });
</script>

{#if isLoading}
  <!-- Loader Component -->
  <Loader duration={3000} on:load={handleLoad} />
{/if}

<header class="px-4 py-4 fixed w-full z-50">
  <nav class="nav px-4 py-4 flex justify-between items-center">
    <div class="flex items-center justify-center gap-1">
      <img src={logo} class="w-1/5" alt="logo">
      <h3 class="text-2xl mb-0.5 mr-2">uthmanDev.</h3>
    </div>
    <div class="mr-4" on:click={toggleNav}>
      <i class="fa-solid fa-bars-staggered text-2xl cursor-pointer"></i>
    </div>
  </nav>

  <!-- Navigation Overlay -->
  <div class="navigation fixed inset-0 flex justify-center items-center z-50 bg-black"
       class:hidden={!navState}>
    <div class="nav-body w-[450px] sm:w-[400px] md:w-[500px] xl:w-[550px] rounded">
      <div class="nav-head px-4 py-4 flex justify-between items-center">
        <div class="flex items-center justify-center gap-1">
          <img src={logo} class="w-1/5" alt="logo">
          <h3 class="text-2xl mb-0.5 mr-2">uthmanDev.</h3>
        </div>
        <i class="fas fa-x cursor-pointer" on:click={toggleNav}></i>
      </div>
      
      <div class="nav-items flex flex-col justify-center items-center mt-8">
        {#each navlinks as ash}
          <a href={`#${ash.sectionid}`} class="flex justify-between items-center border-b-2 border-b-br px-4 mt-4 mb-4 py-4 text-2xl w-[90%] bg-bgsec capitalize">
            {ash.name}
            <i class="fas fa-arrow-right"></i>
          </a>
        {/each}
      </div>
      
      <div class="nav-footer flex-col  flex justify-center items-center mb-4 mt-8">

        <p class="text-base">Crafted with passion. &copy; 2024 Uthman Oladele</p>
      </div>
    </div>
  </div>
</header>

<main>
  <slot />
</main>

<footer data-aos="fade-down" class="bg-black text-gradient px-4 py-6 mb-4">
  <div class="container mx-auto text-center">
    <h3 class="text-2xl font-semibold mb-4">"Code is my canvas, each line a new creation."</h3>
    <p class="text-sm mb-6 italic">- Uthman Oladele</p>
    <p class="text-base">Crafted with passion. &copy; 2024 Uthman Oladele</p>
  </div>
</footer>

<style>
  .navigation.hidden {
    display: none;
  }
</style>
