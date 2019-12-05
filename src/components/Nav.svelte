<script>
  export let segment
</script>

<style type="text/postcss">
  nav {
    @apply font-light px-4 border-b border-teal-400;
  }
  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    @apply bg-teal-600;
    position: absolute;
    content: '';
    width: calc(100% - 1em);
    height: 2px;
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>

<nav>
  <ul class="flex">
    <li>
      <a class={segment === undefined ? 'selected' : ''} href=".">home</a>
    </li>
    <li>
      <a class={segment === 'about' ? 'selected' : ''} href="about">about</a>
    </li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <li>
      <a
        rel="prefetch"
        class={segment === 'blog' ? 'selected' : ''}
        href="blog">
        blog
      </a>
    </li>
  </ul>
</nav>
