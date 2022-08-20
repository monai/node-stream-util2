'use strict';

const { Writable } = require('readable-stream');

class PromiseWriteStream extends Writable {
  constructor(options) {
    super(options);

    this.buffer = [];
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }

  _write(chunk, encoding, done) {
    this.buffer.push(Buffer.from(chunk, encoding));
    done();
  }

  _destroy(error, done) {
    this.reject(error);
    done(error);
  }

  _final(done) {
    this.resolve(Buffer.concat(this.buffer));
    done();
  }
}

module.exports = PromiseWriteStream;
