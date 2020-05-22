const plugins = [];

if (process.env.NODE_ENV === 'production') {
  plugins.push(require('cssnano'));
  plugins.push(require('autoprefixer'));
} else {
  plugins.push(require('autoprefixer'));
}

module.exports = {
  plugins: plugins
};
