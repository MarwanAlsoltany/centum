const path = require('path');
const package = require(path.resolve(__dirname, 'package.json'));

(function(){
  throw new Error(`
    Please use one of the following files to import Centum:
      - SCSS: ${path.relative('~', path.resolve(__dirname, 'centum.scss'))} or ${path.relative('~', path.resolve(__dirname, 'src/main.scss'))}
      - Compiled CSS: ${path.relative('~', path.resolve(__dirname, 'dist/' + package.name + '.css'), path.resolve(__dirname))}
      - Compiled minified CSS: ${path.relative('~', path.resolve(__dirname, 'dist/' + package.name + '.min.css'), path.resolve(__dirname))}
  `);
}());