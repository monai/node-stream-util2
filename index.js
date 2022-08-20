'use strict';

const readable = require('./lib/readable');
const transform = require('./lib/transform');
const writable = require('./lib/writable');
const readArray = require('./lib/readArray');
const readFunction = require('./lib/readFunction');
const buffer = require('./lib/buffer');
const toString = require('./lib/toString');
const consoleLog = require('./lib/consoleLog');
const pushArray = require('./lib/pushArray');
const bufferArray = require('./lib/bufferArray');
const writeVoid = require('./lib/writeVoid');
const PromiseWriteStream = require('./lib/writePromise');

module.exports = {
  PromiseWriteStream,

  readable,
  transform,
  writable,

  readArray,
  readFunction,

  buffer,
  toString,
  consoleLog,
  pushArray,
  bufferArray,

  writeVoid,
};
