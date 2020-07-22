const svelte_preprocess_postcss = require('svelte-preprocess-postcss')

module.exports = {
  preprocess: sveltePreprocess({
    postcss: true,
  }),
}
