<script>
    import { onMount } from 'svelte';
  import logo from "../assets/images/svg.svg"
  import AOS from 'aos';

    import 'aos/dist/aos.css';

    onMount(() => {
        AOS.init({
            duration: 1500, 
            easing: 'ease-in-out', 
            once: true 
        });
    });
  import "../app.css"
</script>


  <header class="px-4 py-4 fixed w-full z-50">
    <nav class="nav  px-4 py-4 flex justify-between items-center">
    <!-- Logo-Section -->
   <div class="flex items-center justify-center gap-3">
     <img src={logo} class="w-1/5" alt="logo">
     <h3 class="text-2xl mb-0.5 mr-2">uthmanDev.</h3>
   </div>
   <div class="mr-4">
     <i class="fa-solid fa-bars-staggered text-2xl "></i>
   </div>
    </nav>
  </header>

<main >
  <slot />
</main>


<footer data-aos="fade-down" class="bg-black text-gradient px-4 py-6 mb-4 ">
    <div class="container mx-auto text-center">
        <h3 class="text-2xl font-semibold mb-4">"Code is my canvas, each line a new creation."</h3>
        <p class="text-sm mb-6 italic">- Uthman Oladele</p>
        <p class="text-base">Crafted with passion. &copy; 2024 Uthman Oladele</p>
    </div>
</footer>
