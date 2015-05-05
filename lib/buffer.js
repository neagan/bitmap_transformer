'use strict';

// Converts buffer to object
function bufObj(data) {
  var bitmap = {};

  // Important file properties
  bitmap.header = data.toString('utf8', 0, 2);
  bitmap.size = data.readUInt32LE(2);
  bitmap.pixels = data.readUInt32LE(10);
  bitmap.DIBsize = data.readUInt32LE(14);

  var offset = bitmap.DIBsize + 14;

  // Checks for color palette
  if (offset === bitmap.pixels) {
    bitmap.pixels = bitmap.size;
  }

  // Assign pixel color data to array
  bitmap.pixelData = [];

  for (var i = offset; i < bitmap.pixels; i++) {
    bitmap.pixelData.push(data[i]);
  }

  return bitmap;
}

exports.bufObj = bufObj;
