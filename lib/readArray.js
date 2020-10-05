'use strict';

const readable = require('./readable');

module.exports = readArray;

function readArray(array) {
  let i = 0;
  const l = array.length;

  return readable(function () {
    if (i < l) {
      this.push(array[i++]);
    } else {
      this.push(null);
    }
  });
}
