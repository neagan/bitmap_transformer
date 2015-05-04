'use strict';

var expect = require('chai').expect;
var reader = require('../lib/reader');

describe('reader.js', function() {
  var file = './bmp/bitmap1.bmp';


  describe('.read()', function() {
    it('reads a file into a buffer', function(done) {
      reader.read(file, bufTest);
    });
  });
});
