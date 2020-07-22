<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<div class="flex flex-col items-center">

  <h1 class="test font-thin text-6xl text-orange-600 uppercase leading-none">
    Great success!
  </h1>

  <figure class="w-2/3">
    <img class="w-full object-cover" alt="" src="rey.jpg" />
    <figcaption>HIGH FIVE!</figcaption>
  </figure>

  <p>
    <strong>
      Try editing this file
      <span class="text-orange-600">(src/routes/index.svelte)</span>
      to test live reloading.
    </strong>
  </p>
</div>

<style type="text/postcss">
  .test {
    @apply mt-16;
  }
  img {
    height: 450px;
  }
</style>
