'use strict';

const readable = require('./lib/readable');
const transform = require('./lib/transform');
const writable = require('./lib/writable');
const readArray = require('./lib/read_array');
const readFunction = require('./lib/read_function');
const buffer = require('./lib/buffer');
const toString = require('./lib/to_string');
const consoleLog = require('./lib/console_log');
const pushArray = require('./lib/push_array');
const bufferArray = require('./lib/buffer_array');
const writeVoid = require('./lib/write_void');
const PromiseWriteStream = require('./lib/write_promise');

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
