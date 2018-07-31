const entryPath = './dev/pages/*/*.js'

const output = {
  production: 'release',
  development: 'dev',
  qa: 'qa'
}[process.env.NODE_ENV] || 'dev'

const port = {
  'development': 8100,
  'qa': 8200,
  'production': 8300
}[process.env.NODE_ENV]

const host = '0.0.0.0'

const template = './dev/pages/*/*.html'

const aliasPath = './dev/alias/'

module.exports = {
  entryPath,
  output,
  port,
  template,
  aliasPath
}
