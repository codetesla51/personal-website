<script>
  export let text = "";
  export let Class = "";
  export let link = "";
</script>

{#if link}
  <a href={link} target="_blank" rel="noopener noreferrer">
    <button class={`rounded-[30px] mt-10 w-[150px] h-[45px] ${Class}`} data-aos="fade-up">
      {text}
    </button>
  </a>
{/if}

{#if !link}
  <button class={`rounded-[30px] mt-10 w-[150px] h-[45px] ${Class}`} data-aos="fade-up">
    {text}
  </button>
{/if}
