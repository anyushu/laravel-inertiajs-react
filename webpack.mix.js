const mix = require('laravel-mix')

mix
  .ts('resources/ts/app.tsx', 'public/js')
  .react()
  .postCss('resources/css/app.css', 'public/css', [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ])
  .webpackConfig(require('./webpack.config'))

if (mix.inProduction()) {
  mix.version()
}
