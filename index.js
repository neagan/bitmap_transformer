'use strict';

var fs = require('fs');

var bitmap = {};
    bitmap.structure = {};
var buf = new Buffer(50);

fs.readFile('./bmp/bitmap1.bmp',  function(err, data) {
  if (err) throw err;
  buffer(data);
});

function buffer(data) {
  // header
  console.log(data.toString('utf8', 0, 2));
  console.log(data.readUInt32LE(2));
  console.log(data.readUInt16LE(6));
  console.log(data.readUInt16LE(8));
  console.log(data.readUInt32LE(10));

  // bitmap width and height
  console.log(data.readUInt32LE(14));
  console.log(data.readUInt32LE(18));
  console.log(data.readUInt32LE(22));
  console.log(data.readUInt16LE(26));
  console.log(data.readUInt16LE(28));
}


