const path = require('path');
const glob = require('glob');

const entryPath = require('./config').entryPath;

let entry = {}

let files = glob.sync(entryPath, {nodir: true});

files.map(file => {
  let arr = path.dirname(file).split('/');
  let name = arr[arr.length - 1];
  entry[name] = file;
});

module.exports = entry;
