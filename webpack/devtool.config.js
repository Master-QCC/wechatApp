const devtool = process.env.NODE_ENV === 'development' ? 'eval-source-map' : 'eval'


module.exports = devtool;
