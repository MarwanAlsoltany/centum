const path = require('path');
const package = require(path.resolve(__dirname, 'package.json'));
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devtool: process.env.NODE_ENV === 'production' ? false : 'source-map',
  entry: {
    main: path.resolve(__dirname, 'src/main.scss')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `${package.name}@${package.version}.js`,
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // \.(sa|sc|c)ss
        exclude: /(node_modules)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true
            }
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              sourceMap: process.env.NODE_ENV === 'production' ? false : true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.resolve(__dirname, 'postcss.config.js')
              },
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              webpackImporter: false,
              implementation: require('sass'),
              prependData: () => `$name: '${package.name}'; $version: '${package.version}'; $env: '${process.env.NODE_ENV}';`,
              sassOptions: {
                indentWidth: 2,
                outputStyle: process.env.NODE_ENV === 'production' ? 'compressed' : 'expanded'
              },
              sourceMap: process.env.NODE_ENV === 'production' ? false : true
            },
          }
        ]
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${package.name}@${package.version}.${process.env.NODE_ENV === 'production' ? 'min.css' : 'css'}`
    })
  ]
};