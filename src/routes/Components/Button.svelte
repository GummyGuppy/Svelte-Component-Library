<script>
    export let title = 'Default'
    export let clickFn
</script>

<button class='py-1 px-2 rounded-lg m-2 outline shadow-gray-400 shadow-md outline-2 
    outline-blue-300 bg-gradient-to-r from-blue-200 to-gray-100 hover:from-yellow-200'
    on:click={clickFn}>{title}</button>
