'use strict';

var expect = require('chai').expect;
var fs = require('fs');
var buffer = require('../lib/buffer');

describe('buffer.js', function() {
  var palette = fs.readFileSync('./bmp/bitmap1.bmp');
  var noPalette = fs.readFileSync('./bmp/non-palette-bitmap.bmp');

  var bitmap1 = buffer.bufObj(palette);
  var bitmap2 = buffer.bufObj(noPalette);

  it('adds important file properties to object', function() {
    expect(bitmap1.header).to.eql('BM');
  });

  it('adjusts for a color palette', function() {
    expect(bitmap1.pixels === bitmap1.size).to.not.eql(true);
    expect(bitmap2.pixels === bitmap2.size).to.eql(true);
  });

  it('adds the color data to an array', function() {
    expect(bitmap1.pixelData.length).to.eql(1024);
    expect(bitmap2.pixelData.length).to.eql(30000);
  });
});
