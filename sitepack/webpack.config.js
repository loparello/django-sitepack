const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleTracker = require('webpack-bundle-tracker');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  const outputPath = isProduction ? path.resolve('./assets/dist') : path.resolve('./assets/dev');

  return {
    entry: {
      main: './src/index.js',
      home: './src/home.js'
    },
    output: {
      filename: isProduction ? '[name].[chunkhash].bundle.js' : '[name].bundle.js',
      path: outputPath
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
          }
        },
        {
          test: /\.(jpe?g|png|gif|svg)/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                name: './img/[name].[ext]',
                limit: 10000
              }
            },
            {
              loader: 'img-loader'
            }
          ]
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
      ]
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      },
      extensions: ['*', '.js', '.vue', '.json']
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].bundle.css',
        chunkFilename: '[id].bundle.css'
      }),
      new BundleTracker({filename: './webpack-stats.json'}),
      new VueLoaderPlugin()
    ]
  };
};