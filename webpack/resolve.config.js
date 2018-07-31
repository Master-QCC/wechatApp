const fs = require('fs'),
      path = require('path');

let resolve = {
  extensions: ['.js', '.ts', '.vue', '.json']
}

const aliasPath = path.join(__dirname, '..', require('./config').aliasPath);

let alias = {},
    files = fs.readdirSync(aliasPath);

files && files.map(file => {
  let name = file.substring(0, file.lastIndexOf('.'));
  if(!name) return
  alias[name] = aliasPath + file;
});

resolve.alias = Object.assign(alias, {
  'vue': 'vue/dist/vue.js',
  '@': path.join(__dirname, '..', 'dev')
})

module.exports = resolve
