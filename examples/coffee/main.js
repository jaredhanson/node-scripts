require('coffee-script');
var scripts = require('../..')

var path = scripts.resolve('hello');
console.log('resolved hello to: ' + path);
console.log('exports: ' + require('./hello').hello);
