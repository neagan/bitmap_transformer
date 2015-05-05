'use strict';

var expect = require('chai').expect;
var transform = require('../lib/transform');

describe('transform.js', function() {
  it('inverts the color data array', function() {
    var obj = {};
    obj.pixelData = [24, 56, 73, 140, 223, 255];
    transform.invert(obj);
    expect(JSON.stringify(obj.pixelData)).to.equal(
      JSON.stringify([231, 199, 182, 115, 32, 0]));
  });
});
