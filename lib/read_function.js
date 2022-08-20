'use strict';

const readable = require('./readable');

module.exports = readFunction;

function readFunction(options, fn) {
  options = options || {};
  let T = options.T || 1000;
  let t0 = Date.now();

  return readable(function () {
    let t = Date.now();
    let dt = t - t0;

    if (dt > T) {
      t0 = t0 + T;
      dt = t0 - t;
    }

    this.push(fn(dt, T));
  });
}
