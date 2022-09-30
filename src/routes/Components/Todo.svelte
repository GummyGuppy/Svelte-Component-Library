<script>

    import Button from './Button.svelte'

    let value = ''
    let flag = false


$: todos = [
    {isDone: false, todo: 'Clean Room'},
    {isDone: false, todo: 'Wash Car'},
    {isDone: false, todo: 'Homework'}
]

function submit() {

    if(value.length != 0){
        todos = [...todos, {isDone: false, todo: value}]
        value = ''
    } 
    else flag = true

}

</script>

<div class='flex flex-col mt-8 lg:flex-row justify-around items-center py-16 bg-gradient-to-r from-blue-200 to-gray-100'>

    <div class='bg-gradient-to-r from-yellow-100 
    to-gray-100 p-4 outline outline-2  outline-blue-300 rounded-lg shadow-lg'>
    <h1 class="font-extrabold text-4xl">Todo Lists</h1>
    <p>Simple Svelte todo list mockups available.</p>
        {#if flag}
            <div class='flex outline-double outline-blue-300 rounded-lg bg-red-200 
                w-96 h-8 m-4 shadow-xl p-2'></div>
        {/if}
        <input type="text" placeholder="Enter a task" class='flex focus:outline-4 outline
         outline-blue-300 rounded-lg focus:outline-offset-4 lg:w-96 h-8 m-4 shadow-xl p-2' bind:value/>
         <Button title="Submit" clickFn={submit}/>
        </div>

    <div class='flex flex-col sm:items-end items-center'>

    <h1 class="font-extrabold text-4xl pt-8 ">Tasks: </h1>

    {#each todos.filter(todo => !todo.isDone) as todo}

        <div class='flex outline-double outline-blue-300 rounded-lg w-96 h-8 m-4 shadow-xl
            '>
            <div class='w-10 h-full rounded-l-lg bg-gradient-to-r from-blue-300 to-slate-300
            flex justify-center items-center font-semibold'>
                <input type="checkbox" bind:checked={todo.isDone} class=''/>
                
            </div>
            <div class='flex items-center w-full bg-gradient-to-r from-blue-100 
            to-gray-100 focus:outline-offset-4 focus:outline-sky-400 rounded-r-lg pl-2 pr-2'>
                {todo.todo}
            </div>
        </div>
    {/each}


    <h1 class="font-extrabold text-4xl">Complete: </h1>
    {#each todos.filter(todo => todo.isDone) as todo}

        <div class='flex outline-double outline-blue-300 rounded-lg w-96 h-8 m-4 shadow-xl
            '>
            <div class='w-10 h-full rounded-l-lg bg-gradient-to-r from-blue-300 to-slate-300
            flex justify-center items-center font-semibold'>
                <input type="checkbox" bind:checked={todo.isDone} class=''/>
                
            </div>
            <div class='flex items-center w-full bg-gradient-to-r from-blue-100 
            to-gray-100 focus:outline-offset-4 focus:outline-sky-400 rounded-r-lg pl-2 pr-2'>
                {todo.todo}
            </div>
        </div>
    {/each}
    </div>

</div>