<script>
  let showFogOverlay = true;

  function checkScrollPosition() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      showFogOverlay = false;
    } else {
      showFogOverlay = true;
    }
  }

  window.addEventListener('scroll', checkScrollPosition);
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
