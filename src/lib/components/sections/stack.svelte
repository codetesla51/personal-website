<script lang="ts">
  import Heading from '$lib/components/reusable/heading.svelte';
  import Typewriter from '$lib/components/reusable/typer.svelte';
  
  interface TechStack {
    name: string;
    icon: string;
  }

  const techStackRight: TechStack[] = [
    { name: 'Git', icon: 'git' },
    { name: 'Laravel', icon: 'laravel' },
    { name: 'PHP', icon: 'php' },
    { name: 'Python', icon: 'py' },
    { name: 'Svelte', icon: 'svelte' },
    { name: 'Vue.js', icon: 'vue' },
    { name: 'TypeScript', icon: 'ts' },
    { name: 'Tailwind CSS', icon: 'tailwind' },
    { name: 'Sass', icon: 'sass' },
    { name: 'Alpine.js', icon: 'alpinejs' },
    { name: 'React', icon: 'react' },
    { name: 'Bash', icon: 'bash' },
    { name: 'Bootstrap', icon: 'bootstrap' },
    { name: 'MySQL', icon: 'mysql' },
    { name: 'ThreeJs', icon: 'threejs' },
  ];

  import { onMount } from 'svelte';
  
  onMount(() => {
    const swiperRight = new Swiper('.swiper-right', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      loop: true,
      freeMode: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
        reverseDirection: true,
      },
      speed: 3000,
    });
  });
</script>

<section class="stack">
<Heading 
    heading="My Tech Stack" 
    subheading="Tools & Technologies I Use to Build Solutions" 
    subicon="fas fa-tools" 
/>
  <div class="stacks mt-10">
    <div class="swiper-container swiper-right w-full px-4 py-4 flex opacity-70 justify-center items-center mt-10">
      <div class="swiper-wrapper flex justify-center gap-5 " data-aos="fadr-down">
        {#each techStackRight as stack}
          <div class="swiper-slide flex justify-start items-center gap-4 w-[230px] p-4 bg-bg rounded-[10px]">
            <img class="tech-icon" src={`https://skillicons.dev/icons?i=${stack.icon}`} alt={stack.name} /> 
            <h4 class="font-black text-xl text-br">{stack.name}</h4>
          </div>
        {/each}
      </div>
    </div>
  </div>
  
  <div>
    <Typewriter
  Class="text-center font-medium text-xl mt-14 leading-relaxed"
  text="I continuously explore and master the latest tools and technologies to craft innovative  solutions that make a difference."
  typingSpeed={50}
  replay={false}
/>

  </div>
</section>

<style>
  .tech-icon {
    width: 50px; 
    height: 50px; 
  }

  .swiper-container {
    width: 90%;
    overflow: hidden;
    margin: 20px auto;
    pointer-events: none;
  }

  .stacks {
    
  }
</style>
