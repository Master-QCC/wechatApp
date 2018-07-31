const path = require('path');

const outputPath = require('./config').output

let output = {
  path: path.join(__dirname, '..', 'dist', outputPath),
  filename: `js/[name].[hash:5].js`,
  chunkFilename: `js/[name].[hash:5].js`,
  publicPath: '/'
}

module.exports = output;
