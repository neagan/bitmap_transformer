'use strict';

var reader = require('./lib/reader');
var buffer = require('./lib/buffer');
var transform = require('./lib/transform');
var writefile = require('./lib/writefile');

// Reads in file as command line argument
reader.read(process.argv[2], buffer.bufObj, transform.invert, writefile.write);
