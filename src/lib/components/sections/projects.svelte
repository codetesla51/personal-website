<script lang="ts">
import { onMount } from 'svelte';
  import Typewriter from '$lib/components/reusable/typer.svelte';
    import Heading from '$lib/components/reusable/heading.svelte';
    interface TechStackItem {
        icon: string;
        name: string;
    }

    interface ProjectLinks {
        live?: string;   
        github?: string; 
    }

    interface Project {
        title: string;
        description: string;
        solves: string[];
        status: string;
        techStack: TechStackItem[];
        links: ProjectLinks;
        image?: string;      
    }

const projects: Project[] = [
    {
        title: 'VaultX',
        description: 'VaultX is an encryption system built with Laravel using modern algorithms for secure file encryption and decryption. It features file sharing, key management, and supports Google and GitHub authentication for logins and registration.',
        solves: ['Security', 'Encryption', 'File Sharing'],
        status: 'Completed',
        techStack: [
            { icon: 'laravel', name: 'Laravel' },
            { icon: 'js', name: 'JavaScript' },
            { icon: 'sass', name: 'Sass' },
            { icon: 'bootstrap', name: 'Bootstrap' },
        ],
        links: {
            github: 'https://github.com/vautx',
        },
        image: 'https://via.placeholder.com/300x200?text=VaultX+Image',
    },
    {
        title: 'Lyric Lens',
        description: 'A web app for finding music based on lyrics. Users can enter any memorable lyrics, and it will search for matching songs, displaying details like the track and demo from Spotify. Core functionality is complete, with more features to come.',
        solves: ['Music', 'Lyrics', 'Search Engine'],
        status: 'Work In Progress',
        techStack: [
            { icon: 'js', name: 'JavaScript' },
            { icon: 'sass', name: 'Sass' },
            { icon: 'php', name: 'PHP' },
        ],
        links: {
            github: 'https://github.com/vautx',
        },
        image: 'https://via.placeholder.com/300x200?text=Lyric+Lens+Image',
    },
    {
        title: 'Repo Crawler',
        description: 'A web app for finding popular GitHub repositories based on user search queries and programming language preferences. It displays results from most to least popular by stars, including information like description, last updated, and forks count. Version 2 is in development.',
        solves: ['GitHub', 'Repository Search', 'API Integration'],
        status: 'Work In Progress',
        techStack: [
            { icon: 'js', name: 'JavaScript' },
            { icon: 'sass', name: 'Sass' },
            { icon: 'php', name: 'PHP' },
        ],
        links: {
            live: 'https://repocralw.vercel.app',
            github: 'https://github.com/vautx',
        },
        image: 'https://via.placeholder.com/300x200?text=Repo+Crawler+Image',
    },
    {
        title: 'Phantom PHP',
        description: 'A PHP server for mobile devices, designed to help developers run PHP apps locally. It supports MySQL, direct file execution, and features fast, reliable performance, with options like port forwarding and seamless MySQL integration.',
        solves: ['Mobile Development', 'PHP', 'Local Server'],
        status: 'Completed',
        techStack: [
            { icon: 'js', name: 'JavaScript' },
            { icon: 'bash', name: 'Bash' },
            { icon: 'php', name: 'PHP' },
        ],
        links: {
            github: 'https://github.com/vautx',
        },
        image: 'https://via.placeholder.com/300x200?text=Phantom+PHP+Image',
    },
    {
        title: 'Web Scraper Script',
        description: 'A PHP-based web scraping script that leverages proxy rotation and user-agent switching for undetectable scraping. It can scrape any website without being blocked, making it a powerful tool for data extraction.',
        solves: ['Web Scraping', 'Data Extraction', 'Proxy Rotation'],
        status: 'Work In Progress',
        techStack: [
            { icon: 'php', name: 'PHP' },
        ],
        links: {
            github: 'https://github.com/vautx',
        },
        image: 'https://via.placeholder.com/300x200?text=Web+Scraper+Image',
    },
    {
        title: 'Code Quiz',
        description: 'A GitHub repository containing a collection of Data Structures and Algorithms (DSA) problems solved with high-performance algorithms like binary search, two pointers, and sliding window. Aimed at enhancing problem-solving skills for developers.',
        solves: ['Algorithms', 'Problem Solving', 'Data Structures'],
        status: 'Work In Progress',
        techStack: [
            { icon: 'git', name: 'Git' },
            { icon: 'py', name: 'Python' },
            { icon: 'php', name: 'PHP' },
        ],
        links: {
            github: 'https://github.com/vautx',
        },
        image: 'https://via.placeholder.com/300x200?text=Code+Quiz+Image',
    },
    {
        title: 'Web-IP',
        description: 'A PHP CLI tool for retrieving the IP address and geolocation of any URL. It offers fast and accurate results, useful for web analysis and tracking.',
        solves: ['Geolocation', 'IP Address', 'Web Analysis'],
        status: 'Completed',
        techStack: [
            { icon: 'php', name: 'PHP' },
        ],
        links: {
            github: 'https://github.com/vautx',
        },
        image: 'https://via.placeholder.com/300x200?text=Web-IP+Image',
    },
    {
        title: 'UD-Cipher',
        description: 'An encoding library utilizing ancient symbols and runes to encode text, adding random noise patterns to obfuscate content. It’s currently in development, with plans to enhance its encoding methods.',
        solves: ['Text Encoding', 'Symbolic Representation', 'Obfuscation'],
        status: 'Work In Progress',
        techStack: [
            { icon: 'js', name: 'JavaScript' },
            { icon: 'php', name: 'PHP' },
        ],
        links: {
            github: 'https://github.com/vautx',
        },
        image: 'https://via.placeholder.com/300x200?text=UD-Cipher+Image',
    },
];

    onMount(() => {
        new Swiper('.mySwiper2', {
            grabCursor: true,
            effect: 'creative',
            creativeEffect: {
                prev: {
                    shadow: true,
                    translate: ['-120%', 0, -500],
                },
                next: {
                    shadow: true,
                    translate: ['120%', 0, -500],
                },
            },
            slidesPerView: 'auto', 
            loop: false, 
            centeredSlides: true,
            speed: 600, 
            breakpoints: {
                640: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 2,
                },
            },
        });
    });
</script>



<section>
    <!-- Heading Component -->
    <Heading 
        heading="Featured Projects" 
        subheading="Highlighting My Recent Creations" 
        subicon="fas fa-briefcase" 
    />
<Typewriter 
  Class="text-center font-medium text-xl mt-14 leading-relaxed"
  text="I have worked on a lot of projects. Here are some that portray and solve real-world problems. Swipe left or right to navigate."
  typingSpeed={80}
  replay={false} 
/>
    <div class="swiper-container mySwiper2">
        <div class="swiper-wrapper">
            {#each projects as project}
                <div class="swiper-slide">
                    
                    <div class="px-4 py-4 bg-bg rounded w-[500px] mt-24">
                        <div>
                            <h2 class="text-gradient text-4xl md-3 mt-3 font-black">{project.title}</h2>
                            
                            {#if project.image}
                                <img class="tech-icon w-full h-auto mt-4 mb-4 rounded"
                                    src={project.image}
                                    alt="Project Image" /> 
                            {:else}
                                <p class="text-red-500 mt-4 mb-4">Image not available</p>
                            {/if}

                            <p class="mt-4 mb-4 leading-relaxed text-xl">{project.description}</p>
                        </div>
                        <div class="line w-full h-[1px] bg-br opacity-40"></div>
                        <div class="flex mt-4 mb-4">
                            <div class="flex items-center">
                                <p class="text-xl">Tags:</p>
                                <div class="flex justify-center gap-4 ml-4">
                                    {#each project.solves as solve}
                                        <p class="bgt text-base font-medium">{solve}</p>
                                    {/each}
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-between items-center">
                            <div class="flex items-center gap-3">
                                <p class="text-xl">Status:</p>
                                <p class={project.status === 'Completed' ? 'text-green-400' : 'text-yellow-400'}>
                                    {project.status}
                                </p>
                            </div>
                            <div>
                                <div class="flex items-center gap-3 mb-3 mt-3">
                                    <p class="text-xl">Tech Stack:</p>
                                    <div class="flex justify-center gap-3">
                                        {#each project.techStack as stack}
                                            <div class="flex flex-col items-center">
                                                <img class="tech-icon w-[25px]"
                                                    src={`https://skillicons.dev/icons?i=${stack.icon}`}
                                                    alt={stack.name} />
                                            </div>
                                        {/each}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Buttons with Conditional Logic -->
                        <div class="flex gap-4 items-center mt-4 mb-4">
                            <button 
                                class="w-[130px] px-3 h-[35px] text-white
                                disabled:opacity-40" 
                                on:click={() => window.open(project.links.live, '_blank')}
                                disabled={!project.links.live}
                            >
                                {project.links.live ? 'Live Demo' : 'Not Available'}
                            </button>
                            
                            <button 
                                class="w-[130px] px-3 h-[35px] text-white
                                disabled:opacity-40" 
                                on:click={() => window.open(project.links.github, '_blank')}
                                disabled={!project.links.github}
                            >
                                {project.links.github ? 'GitHub Repo' : 'Not Available'}
                            </button>
                        </div>
                    </div>
                </div>
            {/each}
        </div>

    </div>
    <div class="flex flex-col justify-center items-center">
<Typewriter 
  Class="text-center font-medium text-xl mt-14 leading-relaxed"
  text="I have more projects on my GitHub account. Feel free to check them out. 
        Click the button below."
  typingSpeed={80}
  replay={false} 
/>
  <button class="rounded-[30px] mt-10 w-[150px] h-[45px]">GitHub</button>
</div>

</section>
<style>
  .mySwiper2 {
    width: 100%;
    height: 100%;
    overflow: hidden; 
}

</style>