'use strict';

var reader = require('./reader');
var buffer = require('./buffer');
var transform = require('./transform');

// Reads in file as command line argument
reader.read(process.argv[2], buffer.bufObj, transform.invert);
