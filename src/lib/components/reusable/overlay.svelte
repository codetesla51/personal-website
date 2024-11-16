<script>
  import { onMount } from 'svelte';

  let showFogOverlay = true;

  function checkScrollPosition() {
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;
    
    if (scrollPosition >= pageHeight - 1) {
      showFogOverlay = false;
    } else {
      showFogOverlay = true;
    }
  }

  onMount(() => {
    window.addEventListener('scroll', checkScrollPosition);

    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  });
</script>

{#if showFogOverlay}
  <div class="fog-overlay"></div>
{/if}

<style>
  .fog-overlay {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 35vh;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
    pointer-events: none;
    transition: opacity 0.3s ease;
  }
</style>
