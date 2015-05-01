'use strict';

// Inverts colors of bitmap
function invert(obj) {
  obj.pixelData.forEach(function(data, i, arr) {
    arr[i] = 255 - data;
  });
}

exports.invert = invert;
