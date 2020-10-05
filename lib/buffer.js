'use strict';

const transform = require('./transform');

module.exports = buffer;

function buffer() {
  const chunks = [];
  return transform((chunk, done) => {
    chunks.push(chunk);
    done();
  }, done => done(null, Buffer.concat(chunks)));
}
