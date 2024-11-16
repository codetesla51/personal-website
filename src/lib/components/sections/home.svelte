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
    { Socialicon: "fab fa-facebook", link: "https://www.facebook.com/profile.php?id=100089196350154" },
    { Socialicon: "fab fa-x-twitter", link: "https://x.com/oladele56481?t=vgW-0uHR_cMBKylZz55FcA&s=09" },
    { Socialicon: "fab fa-github", link: "https://github.com/codetesla51" },
    { Socialicon: "fab fa-linkedin", link: "https://www.linkedin.com/in/oladele-usman-a61578298" }
  ];
</script>

<section class="head" id="main-section">
  <header class="flex justify-center items-center flex-col text-center">
    <Typewriter
      Class="greet py-2 px-4 text-xl bgt font-bold"
      text="Hi, I'm Uthman Oladele"
      typingSpeed={80}
      replay={false}
    />

    <h2 data-aos="fade-down" class="text-gradient text-5xl leading-relaxed font-bold mt-4 capitalize">
      I design digital experiences that help modern brands connect with their audiences.
    </h2>

    <Typewriter
      Class="text-center font-medium text-xl mt-6 mb-7 leading-relaxed"
      text="As a passionate web designer and developer with solid experience, I focus on creating tailored, user-centric web solutions using modern technologies."
      typingSpeed={50}
      replay={false}
    />

    <div class="flex items-center gap-4 mt-7" data-aos="fade-right">
      {#each socials as { Socialicon, link }}
        <a href={link} target="_blank" rel="noopener noreferrer">
          <i class={`social-icon text-2xl ${Socialicon}`}></i>
        </a>
      {/each}
    </div>

    <Button text="Let's Talk"
    link="https://wa.link/6jqex1"
    />
  </header>
</section>
