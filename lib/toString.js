'use strict';

const transform = require('./transform');

module.exports = toString;

function toString() {
  return transform((chunk, done) => {
    done(null, chunk.toString());
  });
}
