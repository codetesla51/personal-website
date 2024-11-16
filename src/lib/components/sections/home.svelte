<script>
  import { onMount } from 'svelte';
  import Typewriter from '$lib/components/reusable/typer.svelte';  
      import Button from "$lib/components/reusable/button.svelte";
  let vantaEffect;

onMount(() => {
  if (typeof VANTA !== 'undefined' && VANTA.DOTS) {
    vantaEffect = VANTA.DOTS({
      el: "#main-section",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 20.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0xe91a1,
      color2: 0x363636,
      backgroundColor: 0x0,
      size: 10.0,
      spacing: 19.0,
      showLines: false
    });
  } else {
    console.error('VANTA or VANTA.DOTS is not defined');
  }

  return () => {
    if (vantaEffect) vantaEffect.destroy();
  };
});

  const socials = [
    { Socialicon: "fab fa-facebook" },
    { Socialicon: "fab fa-x-twitter" },
    { Socialicon: "fab fa-github" },
    { Socialicon: "fab fa-linkedin" },
  ];
</script>
<section class="head" id="main-section">
  <header class="flex justify-center items-center flex-col text-center">
    <Typewriter Class="greet py-2 px-4 text-xl bgt font-bold"
      text="Hi, I'm Uthman Oladele"
      typingSpeed={80}
      replay={false} 
    />

    <h2 class="text-gradient text-5xl leading-relaxed font-bold mt-4 capitalize">
      I design digital experiences that help modern brands connect with their audiences.
    </h2>

    <Typewriter Class="text-center font-medium text-xl mt-6 mb-7 leading-relaxed"
      text="As a passionate web designer and developer with solid experience, I focus on creating tailored, user-centric web solutions using modern technologies."
      typingSpeed={80}
      replay={false} 
    />

    <div class="flex items-center gap-4 mt-7">
      {#each socials as { Socialicon }}
        <i class={`social-icon text-2xl ${Socialicon}`}></i>
      {/each}
    </div>

    <Button
      text="Let's Talk"
    />
  </header>
</section>
