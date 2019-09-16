<script>
  import Nav from '../components/Nav.svelte'

  export let segment
</script>

<style type="text/postcss">
  main {
    @apply relative bg-pink-400;
    max-width: 56em;
  }
</style>

<Nav {segment} />

<main class="my-0 mx-auto p-8">
  <slot />
</main>
