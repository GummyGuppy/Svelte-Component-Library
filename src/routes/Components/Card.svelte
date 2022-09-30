<script>
    import Icon from '@iconify/svelte';
	import { now } from 'svelte/internal';    
    import Image from  './Icons/Profile.svelte'
    

export let name, title = ''

</script>

<div class='flex items-center flex-col-reverse lg:flex-row'>
<div class=' outline outline-3 outline-blue-300 rounded-lg w-64 h-96 m-12 shadow-lg flex flex-col justify-between
bg-gradient-to-r from-blue-100 to-gray-100'>
    <div class='flex flex-col justify-center p-2'>
        <Image class="shadow-lg"/>
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
            <Icon icon="icon-park:facebook" width="2em"/>
            <Icon icon="icon-park:instagram"  width="2em"/>   
            <Icon icon="flat-color-icons:conference-call"  height="2em" />
            <Icon icon="flat-color-icons:voice-presentation" height="2em"/>
        </div>
        
    </div>
    
    
</div>

<div class="gap-2 flex-col flex">

    {#if name}
    <div class="flex justify-around items-center w-64 bg-gradient-to-r from-yellow-100 
    to-gray-100 animate-in slide-in-from-top-72 duration-1000">
        <Icon icon="fluent-emoji:cool-button" height="2em"/>    
    
        Wicked Cool!
    </div>
    {/if}

    {#if title}
    <div class="flex justify-around items-center w-64 bg-gradient-to-r from-yellow-100 
    to-gray-100 animate-in slide-in-from-right spin-in-90 duration-1000">
        <Icon icon="logos:awesome" height="2em"/>
        You've got it!
    </div>
    {/if}
    <h1 class="font-extrabold text-4xl mt-4">Try it out!</h1>
    <input bind:value={name} placeholder="name.." class='bg-gradient-to-r from-blue-100 
        to-gray-100 p-2 w-64 outline outline-2 outline-blue-300 rounded-lg shadow-lg focus:outline-none' />
    <h1 class="font-extrabold text-4xl">Job title?</h1>
    <input bind:value={title} placeholder="job title.." class='bg-gradient-to-r from-blue-100 
    to-gray-100 p-2 w-64 outline outline-2 outline-blue-300 rounded-lg shadow-lg focus:outline-none' />
    <h1 class="font-extrabold text-4xl">Add Photo:</h1>
    <input placeholder="coming soon" disabled class='bg-gradient-to-r from-blue-100 
    to-gray-100 p-2 w-64 outline outline-2 outline-blue-300 rounded-lg shadow-lg focus:outline-none' />
</div>

    <div class=" flex flex-col justify-between w-3/4 lg:ml-12 sm:mr-10 mt-6 bg-gradient-to-r from-yellow-100 
    to-gray-100 p-6 outline outline-2  outline-blue-300 rounded-lg shadow-lg">

        
            <h1 class="font-extrabold text-4xl">Modular Cards</h1>
            <p class="font-bold p-8">Quickly develop a concept using these helper components. 
                Front and center profile image, with contact icons that demand a click! This Card Component 
                brings the attention to your users. The cards are in your hands!  </p>

            <div class="flex gap-2">
                <h3 class="bg-gradient-to-r from-blue-100 self-center lg:self-start
                to-gray-100 p-2 outline w-fit outline-2 outline-blue-300 rounded-lg shadow-lg">
                    <a href="https://github.com/GummyGuppy/Svelte-Component-Library/blob/master/README.md" 
                        target="_blank"
                        class="text-blue-400 underline underline-offset-2">View Docs</a>
                </h3>
                <h3 class="bg-gradient-to-r from-blue-100 self-center lg:self-start
                to-gray-100 p-2 outline w-fit outline-2 outline-blue-300 rounded-lg shadow-lg">
                    <a href="https://github.com/GummyGuppy/Svelte-Component-Library/blob/master/README.md" 
                        target="_blank"
                        class="text-blue-400 underline underline-offset-2">Grab Code</a>
                </h3>
            </div>
    </div>

</div>
