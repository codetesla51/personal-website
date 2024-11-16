<script>
  export let text = "";
  export let Class = "";
  export let link = "";
  export let onClick = () => {};
</script>

{#if link}
  <a href={link} target="_blank" rel="noopener noreferrer">
    <button 
        class={`rounded-[30px] mt-10 w-[150px] h-[45px] ${Class}`} 
      data-aos="fade-up"
      on:click={onClick}
    >
      {text}
    </button>
  </a>
{/if}

{#if !link}
  <!-- If no link is provided, the button will function normally -->
  <button 
    class={`rounded-[30px] mt-10 w-[150px] h-[45px] ${Class}`} 
    data-aos="fade-up"
    on:click={onClick}
  >
    {text}
  </button>
{/if}
