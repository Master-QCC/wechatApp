module.exports = {
  // devtool: require('./webpack/devtool.config.js'),

  entry: require('./webpack/entry.config.js'),

  output: require('./webpack/output.config.js'),

  module: require('./webpack/module.config.js'),

  // devServer: require('./webpack/server.config.js'),

  resolve: require('./webpack/resolve.config.js'),

  plugins: require('./webpack/plugins.config.js'),

  // eslint: require('./webpack/eslint.config.js'),

  // postcss: require('./webpack/postcss.config.js'),

  // node: {fs: 'empty'}
}