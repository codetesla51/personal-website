<script>
  import { onMount } from 'svelte';
  import Home from '$lib/components/sections/home.svelte';
  import Stack from '$lib/components/sections/stack.svelte';
  import Project from '$lib/components/sections/projects.svelte';
  import Overlay from '$lib/components/reusable/overlay.svelte';
  import Contact from '$lib/components/sections/contact.svelte';
  import Loader from "$lib/components/reusable/prelaoder.svelte";

  let isLoading = true;

  onMount(() => {
    window.addEventListener('load', () => {
      isLoading = false;
    });
  });

  setTimeout(() => {
    isLoading = false;
  }, 5000);
</script>

{#if isLoading}
  <Loader />
{/if}

<!-- Page content -->
{#if !isLoading}
  <Home />
  <Stack />
  <Project />
  <Contact />
  <Overlay />
{/if}
