'use strict';

const { Writable } = require('stream');

module.exports = writable;

function writable(write) {
  /*jshint validthis: true */
  return new Writable({
    objectMode: true,
    write: writeFn,
  });

  function writeFn(chunk, _enc, done) {
    return write.call(this, chunk, done);
  }
}
