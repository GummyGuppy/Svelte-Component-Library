## Prerequisites 

- Tailwind CSS
- A Svelte file you wish to add this component to

## Card

Note that Image on line ***15*** and Icons on ***35-38*** must be either imported or replaced in order to properly format the Card.

Args | Type
--- | ---
name | String
title | String


```
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

```
