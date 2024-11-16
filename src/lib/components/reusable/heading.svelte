<!-- Heading.svelte -->
<script>
  export let heading = '';
  export let subheading = '';
  export let subicon = '';
</script>

<div class="flex justify-center items-center flex-col text-center">
  {#if subheading}
    
    <div class="subheading font-bold bgt text-xl" data-aos="zoom-out">
        {#if subicon}
      <i class="bgt {subicon} mr-2"></i>
      {/if}
      {subheading}</div>
  {/if}
  <div class="heading font-black text-gradient text-4xl" data-aos="zoom-in">{heading}</div>
</div>

<style>
</style>