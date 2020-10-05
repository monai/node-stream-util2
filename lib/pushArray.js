'use strict';

const transform = require('./transform');

module.exports = pushArray;

function pushArray(array) {
  return transform((chunk, done) => {
    array.push(chunk);
    done(null, chunk);
  });
}
