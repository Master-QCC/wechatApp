const autoprefixer = require('autoprefixer')

let postcss = [
  autoprefixer({browsers: ['> 5%']})
]

module.exports = postcss
