'use strict';

const { Transform } = require('stream');

module.exports = transform;

function transform(transform, flush) {
  /*jshint validthis: true */
  return new Transform({
    objectMode: true,
    transform: transformFn,
    flush,
  });

  function transformFn(chunk, _enc, done) {
    return transform.call(this, chunk, done);
  }
}
