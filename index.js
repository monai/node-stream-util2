'use strict';

const stream = require('readable-stream');
const { Readable, Writable, Transform } = stream;

module.exports = {
  transform,
  readable,
  writable,

  buffer,
  toString,
  consoleLog,

  readArray,
  pushArray,
  bufferArray,

  writeVoid,
  readFunction,
};

function transform(transform, flush) {
  /*jshint validthis: true */
  return new Transform({
    objectMode : true,
    transform  : _transform,
    flush
  });

  function _transform(chunk, enc, done) {
    return transform.call(this, chunk, done);
  }
}

function readable(read) {
  return new Readable({
    objectMode : true,
    read
  });
}

function writable(write) {
  /*jshint validthis: true */
  return new Writable({
    objectMode : true,
    write      : _write
  });

  function _write(chunk, enc, done) {
    return write.call(this, chunk, done);
  }
}

function buffer() {
  const chunks = [];
  return transform((chunk, done) => {
    chunks.push(chunk);
    done();
  }, done => done(null, Buffer.concat(chunks)));
}

function toString() {
  return transform((chunk, done) => {
    done(null, chunk.toString());
  });
}

function consoleLog() {
  return transform((chunk, done) => {
    console.log(chunk);
    done(null, chunk);
  });
}

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

function pushArray(array) {
  return transform((chunk, done) => {
    array.push(chunk);
    done(null, chunk);
  });
}


function bufferArray() {
  const chunks = [];
  return transform((chunk, done) => {
    chunks.push(chunk);
    done();
  }, done => done(null, chunks));
}

function writeVoid() {
  return writable((_, done) => done());
}

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
