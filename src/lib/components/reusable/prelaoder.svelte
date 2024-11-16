<script>
  import { createEventDispatcher } from 'svelte';

  export let duration = 3000; 
  const dispatch = createEventDispatcher();

  let isLoading = true;

  setTimeout(() => {
    isLoading = false; 
    dispatch('load'); 
  }, duration);
</script>

{#if isLoading}
  <div id="loader-container">
    <div class="loader"></div>
    <h3 class="mb-10 mt-10 text-2xl text-gradientanimted ">Loading Assets Please Wait</h3>
  </div>
{/if}

<style>
  #loader-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--bg);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 9999;
  }

  /* Loader Animation Style */
  .loader {
    display: block;
    --height-of-loader: 7px;
    --loader-color: #0071e2;
    width: 130px;
    height: var(--height-of-loader);
    border-radius: 30px;
    background-color: #232425;
    position: relative;
  }

  .loader::before {
    content: "";
    position: absolute;
    background: var(--loader-color);
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    border-radius: 30px;
    animation: moving 1s ease-in-out infinite;
  }

  @keyframes moving {
    50% {
      width: 100%;
    }

    100% {
      width: 0;
      right: 0;
      left: unset;
    }
  }
</style>
