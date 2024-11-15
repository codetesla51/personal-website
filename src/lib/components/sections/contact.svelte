<script>
    import Heading from '$lib/components/reusable/heading.svelte';
    const socialLinks = [
      { icon : 'fab fa-facebook' , username: 'uthmandev' , medialink: 'https://facebook.com'},
      { icon : 'fab fa-twitter' , username: 'uthmandev' , medialink: 'https://twitter.com'},
      { icon : 'fab fa-github' , username: 'codetesla51' , medialink: 'https://github.com'},
      { icon : 'fab fa-linkedin' , username: 'usmanoladele' , medialink: 'https://linkedin.com'},
    ];
</script>

<section>
    <Heading 
        heading="Lets Connect" 
        subheading="Get In Touch With Me" 
        subicon="fas fa-link" 
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
</section>
