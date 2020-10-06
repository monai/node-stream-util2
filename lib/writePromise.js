'use strict';

const { Writable } = require('readable-stream');

class PromiseWriteStream extends Writable {
  static get [Symbol.species]() {
    return Promise;
  }

  constructor(options = {}) {
    const opts = {};
    if ('highWaterMark' in options) {
      opts.highWaterMark = options.highWaterMark;
    }
    if ('defaultEncoding' in options) {
      opts.defaultEncoding = options.defaultEncoding;
    }
    super(opts);

    this.buffer = [];
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });

    Object
      .entries(Object.getOwnPropertyDescriptors(Promise.prototype))
      .forEach(([prop, descriptor]) => {
        descriptor.value = descriptor.value.bind(this.promise);
        Object.defineProperty(this, prop, descriptor);
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

module.exports = {
  PromiseWriteStream,
  writePromise,
};

function writePromise(options) {
  return new PromiseWriteStream(options);
}
