'use strict';

var fs = require('fs');

// Not sure if this belongs here
var bitmap = {};
    bitmap.structure = {};

function read(file, bufObj) {
  fs.readFile(file,  function(err, data) {
    if (err) throw err;
    bufObj(data);
  });
}

exports.read = read;
