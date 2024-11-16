<script>
  import { onMount, onDestroy } from 'svelte';
  export let text = ""; 
  export let typingSpeed = 100; 
  export let replay = false;
  export let Class = "";
  let displayedText = "";
  let currentIndex = 0;
  let observer;
  let textVisible = false;
  let sectionRef;

  function typeText() {
    if (currentIndex < text.length) {
      displayedText += text[currentIndex];
      currentIndex++;
      setTimeout(typeText, typingSpeed);
    }
  }


  function resetTyping() {
    displayedText = "";
    currentIndex = 0;
    textVisible = false;
  }

  onMount(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!textVisible || replay) {
            resetTyping();
            textVisible = true;
            typeText();
          }
        } else {
          if (replay) {
            resetTyping();
          }
        }
      });
    });

    if (sectionRef) {
      observer.observe(sectionRef);
    }
  });

  onDestroy(() => {
    if (observer && sectionRef) {
      observer.unobserve(sectionRef);
    }
  });
</script>

<div bind:this={sectionRef} class="relative">
  <p class=" {Class}" data-aos="fade-up">
    {displayedText}
  </p>
</div>

<style>
  div {
  }
</style>
