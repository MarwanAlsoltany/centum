let mix = require('laravel-mix');
let package = require('./package.json');
let extension = process.env.NODE_ENV === 'production' ? 'min.css' : 'css';

mix
  .setPublicPath('./')
  .sass('./main.scss', `${package.name}@${package.version}.${extension}`)
  .options({ 
    processCssUrls: false,
    // autoprefixer: false
  })
  // .sourceMaps()
  // .webpackConfig({
  //   devtool: 'inline-source-map'
  // })
;
