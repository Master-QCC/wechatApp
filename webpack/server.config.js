const path = require('path'),
      basePath = require('./config').output,
      sitePath = require('./config').site,
      port = require('./config').port,
      host = require('./config').host

let server = {
  host: host,
  disableHostCheck: true,
  inline: true,
  port: port,
  // contentBase: path.join(__dirname, '..', basePath, sitePath),
  historyApiFallback: {
    index:'/'
  },
  proxy: {
    '/api': {
      target: 'http://localhost:9090',      // 转发mock请求
      secure: false
    }
  }
}

module.exports = server;
