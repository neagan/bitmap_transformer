'use strict';

// Converts buffer to object
function bufObj(data, invert, write) {
  var bitmap = {};
  bitmap.BMPheader = {};
  bitmap.DIBheader = {};

  // BMP header
  bitmap.BMPheader.header = data.toString('utf8', 0, 2);
  bitmap.BMPheader.size = data.readUInt32LE(2);
  bitmap.BMPheader.reservedOne = data.readUInt16LE(6);
  bitmap.BMPheader.reservedTwo = data.readUInt16LE(8);
  bitmap.BMPheader.offset = data.readUInt32LE(10);

  // DIB header
  bitmap.DIBheader.size = data.readUInt32LE(14);
  bitmap.DIBheader.width = data.readUInt32LE(18);
  bitmap.DIBheader.height = data.readUInt32LE(22);
  bitmap.DIBheader.planes = data.readUInt16LE(26);
  bitmap.DIBheader.bitPix = data.readUInt16LE(28);
  bitmap.DIBheader.compression = data.readUInt32LE(30);
  bitmap.DIBheader.imgSize = data.readUInt32LE(34);
  bitmap.DIBheader.horzRes = data.readUInt32LE(38);
  bitmap.DIBheader.vertRes = data.readUInt32LE(42);
  bitmap.DIBheader.colorNum = data.readUInt32LE(46);
  bitmap.DIBheader.important = data.readUInt32LE(50);

  // Pixel data -> starts at bottom left and works up left to right
  var offset = bitmap.DIBheader.size + 14;
  var pixels = bitmap.BMPheader.offset;
  var fileSize = bitmap.BMPheader.size;

  if (offset === pixels) {
    pixels = fileSize;
  }

  // Assign pixel color data to array and call transform
  bitmap.pixelData = [];

  for (var i = offset; i < pixels; i++) {
    bitmap.pixelData.push(data[i]);
  }
  invert(bitmap);

  write(data, bitmap);
}

exports.bufObj = bufObj;
