# Svelte Component Library #

[Project Webpage](https://svelte-component-library-alpha.vercel.app/) hosted by [Vercel](https://vercel.com/)

### Todo: ###

- [ ] Add color picker for various components
- [ ] Insert function argument ??
- [ ] Adjust CSS divs in mobile to fit content



## Prerequisites 

- [Svelte](https://svelte.dev/) or [SvelteKit](https://kit.svelte.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- A Svelte file you wish to add a component to

All of the icons used in this project were imported from [Iconify](https://iconify.design/), but you can obviously use any resource you wish. 
To use a component, simply copy and paste the relevant code block into a svelte file. 

## Card

Args | Type | Required?
--- | --- | ---
name | String | No
title | String | No


```
<script>
    let name, title = ''
</script>

<div class=' outline outline-3 outline-blue-300 rounded-lg w-64 h-96 shadow-lg flex flex-col justify-between
bg-gradient-to-r from-blue-100 to-gray-100'>
    <div class='flex flex-col justify-center p-2'>
---------------------------------        [INSERT IMG/SVG TAG] -------------------------------------------
        <div class='flex h-1 m-2 bg-blue-300'/>
    </div>
    <div class="flex pl-4 text-lg gap-2 font-bold">
         {#if name}
            {name}
         {:else}
            <slot>Karen Needsamanager</slot>
         {/if}
        
    </div>
    <div class='pl-4 text-sm'>
        {#if title}
            {title}
        {:else}
            <slot>Certified Manager</slot>
        {/if}
    </div>
    <div class='card-contact flex flex-row  justify-center pb-2 gap-6'>
        <div class="flex gap-1">
---------------------------------        [INSERT CONTACT ICONS/Links HERE] -------------------------------------------
        </div>
    </div>
</div>

```

###### This project was created by Earl / check my git for more! [Gummyguppy](https://github.com/gummyguppy) ######
