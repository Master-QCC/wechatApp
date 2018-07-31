const glob = require('glob');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack');
const pkg = require('../package.json');
// const NodemonPlugin = require('nodemon-webpack-plugin');
const entryPath = require('./config').entryPath;
const pageTitle = require('./config.title');
const template = require('./config').template;

let plugins = []


/**
 * create html
 */
let files = glob.sync(template, {nodir: true});
files.map(file => {
  let arr = path.dirname(file).split('/');
  let name = arr[arr.length - 1];

  let config = {
    template: file,
    inject: 'true',
    filename: `pages/${name}/index.html`,
    chunks: ['common', name],
    title: pageTitle[name],
    chunksSortMode: function (chunk1, chunk2) {
      let order = ['common', name];
      let order1 = order.indexOf(chunk1.names[0]);
      let order2 = order.indexOf(chunk2.names[0]);
      return order1 - order2;
    }
  };

  plugins.push(new HtmlWebpackPlugin(config));
})


/**
 * combine common code
 */
plugins.push(
  new webpack.optimize.CommonsChunkPlugin({
    name: 'common',
    filename: `js/[name].[hash:5].js`,
    minChunks: '2'
  })
)

/**
 * define varible
 */
plugins.push(
  new webpack.DefinePlugin({'process.env': {NODE_ENV: JSON.stringify(process.env.NODE_ENV)}})
)

plugins.push(new ExtractTextPlugin(`css/[name].css`))

/**
 * compress code
 */
if(process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'qa'){
  plugins.push(
    new UglifyJSPlugin({
      uglifyOptions:{
        comments: false,
        compress: {
          warnings: false,
          drop_console: true,
          drop_debugger: true
        }
      }
    })
  )
}

// plugins.push(new NodemonPlugin())

module.exports = plugins
