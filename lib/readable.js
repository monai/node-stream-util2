'use strict';

const { Readable } = require('readable-stream');

module.exports = readable;

function readable(read) {
  return new Readable({
    objectMode: true,
    read,
  });
}
