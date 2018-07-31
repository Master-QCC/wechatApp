const ExtractTextPlugin = require('extract-text-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV;

const lessLoader =  NODE_ENV === 'development' ? ['style-loader','css-loader','postcss-loader','less-loader'] :  ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: [{
      loader: 'css-loader',
      options: {
          minimize: true
      }
  }, 'postcss-loader', 'less-loader']
});
const cssLoader = NODE_ENV === 'development' ? ['style-loader','css-loader','postcss-loader'] : ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: [{
      loader: 'css-loader',
      options: {
          minimize: true
      }
  }, 'postcss-loader']
});

let modules = {
  loaders: [{
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader'
  },{
    test: /\.vue$/,
    loader: 'vue-loader',
    options: {
      loaders: {
        less: lessLoader
      }
    }
  },{
    test: /\.css$/,
    loader: cssLoader
  },{
    test: /\.less$/,
    loader: lessLoader
  },{
    test: /\.json$/,
    loader: 'json'
  },{
    test: /\.tpl$/,
    loader: "html"
  },{
    test: /\.(png|jpe?g|gif|svg|png)(\?.*)?$/,
    loader: 'url-loader',
    options: {
      limit: 1000,
      name: 'images/[name].[hash].[ext]'
    }
  },{
    test: /\.(woff2?|eot|ttf|otf)(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url-loader',
    options: {
      limit: 1000,
      name: 'fonts/[name].[hash].[ext]'
    }
  }]
}

module.exports = modules;
