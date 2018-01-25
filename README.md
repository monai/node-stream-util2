# stream-util2

[![npm version](http://img.shields.io/npm/v/stream-util2.svg)](https://www.npmjs.org/package/stream-util2)

Various stream utilities.

## Installation

`npm install stream-util2`

## API

### transform(transform, [flush])

Returns a transform stream in object mode.

- `transform` implements [`_transform`](https://nodejs.org/api/stream.html#stream_transform_transform_chunk_encoding_callback). Arguments: `chunk`, `callback`.
- `flush` implements [`_flush`](https://nodejs.org/api/stream.html#stream_transform_flush_callback).

### readable(read)

Returns a readable stream in object mode.

- `read` implements [`_read`](https://nodejs.org/api/stream.html#stream_readable_read_size_1).

### writable(write)

Returns a writable stream in object mode.

- `write` implements [`_write`](https://nodejs.org/api/stream.html#stream_writable_write_chunk_encoding_callback_1). Arguments: `chunk`, `callback`.

### buffer()

Returns a transform stream that buffers chunks of `<Buffer>` type and emits concatenated buffer down the stream.

### toString()

Returns a transform stream that calls `chunk.toString()` for each chunk.

### consoleLog()

Returns a transform stream that calls `console.log(chunk)` for each chunk.

### readArray(array)

Returns a readable stream that reads the array and emits each item down the stream.

### pushArray(array)

Returns a transform stream that pushes each chunk to `array`.

### bufferArray()

Returns a transform stream that buffers chunks to an array and emits it down the stream.

### writeVoid()

Returns a writable stream that does nothing.

### readFunction(options, fn)

Returns a readable stream that generates data from periodic function `fn`.

Options:

- `T` - function period in milliseconds. Default is `1000`.

`fn` arguments:

- `dt` - delta time since beginning of current period.
- `T` - period.

## License

ISC
