'use strict';

var reader = require('./reader');
var buffer = require('./buffer');

// Reads in file as command line argument
reader.read(process.argv[2], buffer.bufObj);



