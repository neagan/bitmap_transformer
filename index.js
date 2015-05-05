'use strict';

var fs = require('fs');
var buffer = require('./lib/buffer');
var transform = require('./lib/transform');
var writer = require('./lib/writer');

// Reads in file as command line argument or use default
var file = process.argv[2] || './bmp/bitmap1.bmp';

fs.readFile(file, function(err, data) {
  if (err) {
    throw err;
  }
  var obj = buffer.bufObj(data);
  transform.invert(obj);
  writer.write(data, obj);

  fs.writeFile('./bmp/inverted.bmp', data, function(err) {
    if (err) {
      throw err;
    }
    console.log('File saved to bmp/inverted.bmp');
  });
});
