<script>
  import Nav from '../components/Nav.svelte'

  export let segment
</script>

<Nav {segment} />

<main class="relative w-3/5 mx-auto p-8">
  <slot />
</main>

<style type="text/postcss" global>
  @import '../tailwind.css';
</style>
