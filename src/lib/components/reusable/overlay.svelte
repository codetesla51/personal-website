<script>
  import { onMount } from 'svelte';

  let showFogOverlay = true;

  function checkScrollPosition() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      showFogOverlay = false;
    } else {
      showFogOverlay = true;
    }
  }

  // Run only on the client
  onMount(() => {
    window.addEventListener('scroll', checkScrollPosition);

    // Clean up the event listener when the component is destroyed
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
  }
</style>
