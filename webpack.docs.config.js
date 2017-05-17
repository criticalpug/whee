const path = require('path');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const flexbugs = require('postcss-flexbugs-fixes');
const merge = require('webpack-merge');
const getBaseConfiguration = require('./webpack/base.config.js');

const extractCSS = new ExtractTextPlugin('styles/[name]-css.[contenthash].css');

const params = {
  root: __dirname,
  buildPath: 'docs',
  output: {
    path: path.join(__dirname, '/docs'),
    filename: 'js/docs.[chunkhash].js',
    chunkFilename: 'js/[name].[chunkhash].js',
  },
  entry: {
    app: path.join(__dirname, '/src/index.jsx'),
  },
};

const plugins = [
  new webpack.LoaderOptionsPlugin({
    debug: false,
    noInfo: true,
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'js/vendor.bundle.[chunkhash].js',
  }),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'src/index.html',
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  }),
  new ExtractTextPlugin({
    filename: 'styles/[name].[contenthash].css',
    allChunks: true,
  }),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: {
      warnings: true,
    },
    output: {
      comments: false,
    },
    mangle: true,
  }),
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
  }),
];

const rules = [
  {
    test: /\.ejs$/,
    use: [
      'ejs-loader?variable=data',
    ],
  },
  {
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [flexbugs, precss, autoprefixer],
          },
        },
        'sass-loader',
      ],
    }),
  },
  {
    test: /\.ico$/,
    use: [
      'file-loader?name=[name].[ext]',
    ],
    include: /images/,
  },
  {
    test: /\.css$/,
    use: extractCSS.extract({
      fallback: 'style-loader',
      use: [
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [flexbugs, precss, autoprefixer],
          },
        },
      ],
    }),
  },
];

const config = merge(getBaseConfiguration(params), {
  plugins,
  module: {
    rules,
  },
});

module.exports = config;
