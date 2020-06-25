<script>
  let test = true
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<h1 class="font-thin text-6xl text-teal-600 uppercase leading-none">
  About this site
</h1>

<p class="about" class:border-green-500={test}>
  This is the 'about' page. There's not much here.
</p>

<style type="text/postcss">
  .about {
    @apply pl-4 border-l-4;
  }
</style>
