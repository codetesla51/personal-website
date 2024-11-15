<script lang="ts">
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
        tags?: string[];     
        duration?: string;  
        difficulty?: string; 
    }

    const projects: Project[] = [
        {
            title: 'VaultX',
            description: 'VaultX is an advanced encryption system built with Laravel, designed to ensure data security and efficient file management.',
            solves: ['Encryption', 'Security', 'File Management' , 'Decryption'
            ],
            status: 'Completed',
            techStack: [
                { icon: 'laravel', name: 'Laravel' },
                { icon: 'js', name: 'TypeScript' },
                { icon: 'sass', name: 'Sass' },
            ],
            links: {
                live: 'https://vautx.com',
                github: 'https://github.com/vautx',
            },
            image: 'https://example.com/project-image.jpg',  // Optional
            tags: ['Security', 'Web Development'],            // Optional
            duration: '2 months',                             // Optional
            difficulty: 'Intermediate'                        // Optional
        }
    ];
</script>

<section>
    <Heading 
        heading="Featured Projects" 
        subheading="Highlighting My Recent Creations" 
        subicon="fas fa-briefcase" 
    />
    <div class="flex justify-center items-center flex-col gap-4 mt-4 mb-4">
        {#each projects as project}
            <div class="px-4 py-4 bg-bg rounded w-[500px]">
                <div>
                    <h2 class="text-gradient text-4xl font-black">{project.title}</h2>
                    <p class="mt-4 mb-4 leading-relaxed text-xl">{project.description}</p>
                </div>
                <div class="line w-full h-[1px] bg-br"></div>
                <div class="flex mt-4 mb-4">
                    <div class="flex items-center">
                        <p class="text-xl">Solves : </p>
                        <div class="flex justify-center gap-4 ml-4">
                            {#each project.solves as solve}
                                <p class="bgt text-base font-medium">{solve}</p>
                            {/each}
                        </div>
                    </div>
                </div>
                <div class="flex justify-between">
                    <div class="flex items-center gap-3">
                        <p class="text-xl">Status :</p>
                        <p class="text-green-300">{project.status}</p>
                    </div>
                    <div>
                        <div class="flex items-center gap-3 mb-3 mt-3">
                            <p class="text-xl">Tech Stack : </p>
                            <div class="flex justify-center gap-3">
                                {#each project.techStack as stack}
                             <img class="tech-icon w-[25px]"
                             src={`https://skillicons.dev/icons?i=${stack.icon}`}
                             alt={stack.names} /> 

                                {/each}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</section>
