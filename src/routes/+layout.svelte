<script>
    import "../app.css";
    import Footer from './Footer.svelte'
    import Todo from './Components/Todo.svelte'
    import Card from './Components/Card.svelte'
    


</script>
  
  <div class="font-extrabold flex justify-center text-center items-center bg-black w-screen mb-24">
    <h1 class="bg-clip-text lg:text-8xl tracking-wide flex flex-col w-screen p-6 text-transparent bg-ocean">
        <div class='self-start animate-in slide-in-from-right'>Svelte</div>
        <div class=''>Component</div>
        <div class='self-end animate-in slide-in-from-left'>Library</div>
   </h1>
  </div>

  <Card/>
  <Todo/>
  <Footer/>

