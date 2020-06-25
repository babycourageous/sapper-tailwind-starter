<script>
  import Nav from '../components/Nav.svelte'

  export let segment
</script>

<Nav {segment} />

<main class="test-apply relative">
  <slot />
</main>

<style type="text/postcss">
  .test-apply {
    @apply w-3/5 mx-auto p-8;
  }
</style>
