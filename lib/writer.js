'use strict';

var fs = require('fs');

function write(buf, obj) {
  // Copy transformed color into original buffer
  var test = new Buffer(obj.pixelData);
  test.copy(buf, 54);
}

exports.write = write;
