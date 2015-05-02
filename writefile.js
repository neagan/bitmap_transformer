'use strict';

var fs = require('fs');

function write(buf, obj) {
  // Copy transformed color into original buffer
  var test = new Buffer(obj.pixelData);
  console.log(buf[54]);
  test.copy(buf, 54);
  console.log(buf[54]);

  // Write buffer to file
  fs.writeFile('./bmp/inverted.bmp', buf, function(err) {
    if (err) throw err;
    console.log('File saved');
  })
}

exports.write = write;
