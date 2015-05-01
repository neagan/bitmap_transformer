'use strict';

// Converts buffer to object
function bufObj(data) {
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

exports.bufObj = bufObj;
