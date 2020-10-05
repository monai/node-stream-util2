'use strict';

const writable = require('./writable');

module.exports = writeVoid;

function writeVoid() {
  return writable((_, done) => done());
}
