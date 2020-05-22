const path = require('path');
const package = require(path.resolve(__dirname, 'package.json'));

(function(){
  throw new Error(`
    Please use one of the following files to import Centum:
      - SCSS: ${path.relative('~', path.resolve(__dirname, 'centum.scss'))} or ${path.relative('~', path.resolve(__dirname, 'src/main.scss'))}
      - Compiled CSS: ${path.relative('~', path.resolve(__dirname, 'dist/' + package.name + '@' + package.version + '.css'), path.resolve(__dirname))}
      - Compiled minified CSS: ${path.relative('~', path.resolve(__dirname, 'dist/' + package.name + '@' + package.version + '.min.css'), path.resolve(__dirname))}
  `);
}());