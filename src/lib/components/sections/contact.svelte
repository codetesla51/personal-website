<script>
    import Heading from '$lib/components/reusable/heading.svelte';
    import Button from "$lib/components/reusable/button.svelte";    
  import Typewriter from '$lib/components/reusable/typer.svelte';
 
    const socialLinks = [
      { icon : 'fab fa-facebook' , username: 'uthmandev' , medialink: 'https://facebook.com'},
      { icon : 'fab fa-twitter' , username: 'uthmandev' , medialink: 'https://twitter.com'},
      { icon : 'fab fa-github' , username: 'codetesla51' , medialink: 'https://github.com'},
      { icon : 'fab fa-linkedin' , username: 'usmanoladele' , medialink: 'https://linkedin.com'},
    ];
</script>

<section>
<Heading 
    heading="Let's Connect" 
    subheading="Get in Touch with Me" 
    subicon="fas fa-link" 
/>

<Typewriter
  Class="text-center mb-4 font-medium text-xl mt-10 leading-relaxed"
  text="Let's connect and build meaningful relationships through my social handles."
  typingSpeed={50}
  replay={false}
/>


    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-6 mb-6 justify-center items-center">
        {#each socialLinks as Links}
        <a href={Links.medialink} class="flex px-7 py-5 bg-bg justify-between items-center w-full rounded-[30px] mb-4">
            <div class="flex mr-5 items-center justify-center gap-3">
                <i class={`bgt xl:text-3xl text-2xl ${Links.icon}`}></i>
                <h3 class="text-xl xl:text-2xl text-gradient">@{Links.username}</h3>
            </div>
            <div>
                <i class="fa fa-arrow-up ml-5"></i>
            </div>
        </a>
        {/each}
    </div>
    <div>
<Heading 
    heading="Send Me an Email" 
/>


<Typewriter
    Class="text-center mb-4 font-medium text-xl mt-10 leading-relaxed"
    text="Feel free to reach out via email. I’d love to hear from you! I’ll reply as soon as possible."
    typingSpeed={50}
    replay={false}
/>


    <div class="flex justify-center items-center">
      <Button
      text="Send Email"
      />
    </div>

    </div>
</section>
