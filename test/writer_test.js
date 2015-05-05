'use strict';

var expect = require('chai').expect;
var fs = require('fs');
var transform = require('../lib/transform');
var writer = require('../lib/writer');
var buffer = require('../lib/buffer');

describe('writefile.js', function() {
  var buf = fs.readFileSync('./bmp/bitmap1.bmp');
  var orig = buf[54];
  var bitmap = buffer.bufObj(buf);
  transform.invert(bitmap);
  writer.write(buf, bitmap);

  it('overwrites original buffer with transformed color data', function() {
    expect(buf[54]).to.eql(255 - orig);
  });
});

