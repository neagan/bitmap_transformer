'use strict';

var fs = require('fs');

function write(buf, obj) {
  // Copy transformed color into original buffer
  var test = new Buffer(obj.pixelData);
  test.copy(buf, 54);

  // Write buffer to file
  fs.writeFile('./bmp/inverted.bmp', buf, function(err) {
    if (err) throw err;
    console.log('File saved to bmp/inverted.bmp');
  })
}

exports.write = write;
