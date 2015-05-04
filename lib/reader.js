'use strict';

var fs = require('fs');

// Reads file to buffer for object conversion
function read(file, bufObj, invert, write) {
  fs.readFile(file,  function(err, data) {
    if (err) {
      throw err;
    }
    bufObj(data, invert, write);
  });
}

exports.read = read;
