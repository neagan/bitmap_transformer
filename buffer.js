'use strict';

// Converts buffer to object
function bufObj(data) {
  var bitmap = {};
  bitmap.BMPheader = {};
  bitmap.DIBheader = {};
  bitmap.pixelData = {};

  // BMP header
  bitmap.BMPheader.header = data.toString('utf8', 0, 2);
  bitmap.BMPheader.size = data.readUInt32LE(2);
  bitmap.BMPheader.reservedOne = data.readUInt16LE(6);
  bitmap.BMPheader.reservedTwo = data.readUInt16LE(8);
  bitmap.BMPheader.offset = data.readUInt32LE(10);

  // Check offset
  //console.log(bitmap.BMPheader.offset);

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

  // Confirm configuration
  //console.log(bitmap.DIBheader.size);
  //console.log(bitmap.DIBheader.width, bitmap.DIBheader.height);
  console.log(bitmap.DIBheader.colorNum);

  // Pixel data
  var pixelOffset = bitmap.BMPheader.offset;
  var rowSize = ((bitmap.DIBheader.bitPix * bitmap.DIBheader.width +32) / 32)*4
  //console.log(rowSize);
  var pixelArraySize = rowSize * bitmap.DIBheader.height;
  //console.log(pixelArraySize);
}

exports.bufObj = bufObj;
