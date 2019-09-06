const mode = process.env.NODE_ENV
const dev = mode === 'development'

const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-url')(),
    require('postcss-nesting')(),
    require('tailwindcss'),
    !dev && require('autoprefixer'),
    !dev &&
      purgecss({
        content: ['./**/*.html', './**/*.svelte'],
        defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      }),
    !dev && require('cssnano')(),
  ],
}
