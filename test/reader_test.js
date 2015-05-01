'use strict';

var expect = require('chai').expect;
var reader = require('../reader');

describe('reader.js', function() {
  describe('.read()', function() {
    it('should read a file to a buffer', function(done) {
      var file = './bmp/bitmap1.bmp';
      reader.read(file, function(err, data) {
        if (err) return done(err);
        data.should.have.length(11078);
      })
    });
  });
});
