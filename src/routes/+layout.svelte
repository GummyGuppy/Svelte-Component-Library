<script>
    import "../app.css";
    import Footer from './Footer.svelte'
  </script>
  
  <div class="font-extrabold flex justify-center text-center items-center bg-gradient-to-tr from-blue-100 to-gray-50 w-screen mb-24 lg:h-64">
    <h1 class="bg-clip-text lg:text-8xl tracking-wide flex justify-center p-6 text-transparent bg-ocean">
      Svelte Component Library
    </h1>
  </div>
  <slot />
  <Footer/>