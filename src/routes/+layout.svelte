<script>
  import logo from "../assets/images/svg.svg"
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

<footer>
  
</footer>