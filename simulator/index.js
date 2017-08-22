var fs = require('fs')
var babelCfg = JSON.parse(fs.readFileSync('./.babelrc'))
require('babel-register')(babelCfg)
require('./main')
