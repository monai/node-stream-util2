'use strict';

const transform = require('./transform');

module.exports = bufferArray;

function bufferArray() {
  const chunks = [];
  return transform((chunk, done) => {
    chunks.push(chunk);
    done();
  }, done => done(null, chunks));
}
