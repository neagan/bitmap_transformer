'use strict';

var reader = require('./lib/reader');
var buffer = require('./lib/buffer');
var transform = require('./lib/transform');
var writefile = require('./lib/writefile');

// Reads in file as command line argument or use default
var file = process.argv[2] || './bmp/bitmap1.bmp';
reader.read(file, buffer.bufObj, transform.invert, writefile.write);
