'use strict';

const transform = require('./transform');

module.exports = consoleLog;

function consoleLog() {
  return transform((chunk, done) => {
    console.log(chunk);
    done(null, chunk);
  });
}
