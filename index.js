'use strict';

module.exports = {
  readable: require('./lib/readable'),
  transform: require('./lib/transform'),
  writable: require('./lib/writable'),

  readArray: require('./lib/readArray'),
  readFunction: require('./lib/readFunction'),

  buffer: require('./lib/buffer'),
  toString: require('./lib/toString'),
  consoleLog: require('./lib/consoleLog'),
  pushArray: require('./lib/pushArray'),
  bufferArray: require('./lib/bufferArray'),

  writeVoid: require('./lib/writeVoid'),
};
