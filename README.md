# stream-util2

Various stream utilities.

## Installation

`npm install stream-util2`

## API

### transform(callback, flush)

Return transform stream in object mode.

- Callback implements `_transform`. Arguments: chunk, callback.
- Flush implements `_flush`. Arguments: callback.

### readable(callback)

Return readable stream in object mode.

- Callback implements `_read`.

### writable(callback)

Return writable stream in object mode.

- Callback implements `_write`. Arguments: chunk, callback.

### buffer()

Returns transform stream that buffers chunks and adds a concatenated chunk of data into the queue.

### toString()

Returns transform stream that calls `chunk.toString()` for each chunk.

### readArray(array)

Returns readable stream that reads array and adds each item into the queue.

### pushArray(array)

Returns transform stream that pushes each chunk to array.

### bufferArray()

Returns transform stream that buffers chunks and adds a chunk array of data into the queue.

### writeNull()

Returns writable stream that does nothing.

### writeConsole()

Returns transform stream that calls `console.log(chunk)` for each chunk.

### readFunction(options, fn)

Returns readable stream that generates data from periodic function `fn`.

Options:

- `T` - function period in milliseconds. Default is `1000`.

Function arguments:

- `dt` - delta time since beginning of current period.
- `T` - period.

### transformWorker(options, worker)

Returns transform stream for parallel processing.

- Options:
    - `concurency` - number of parallel task. Default: `4`.
- Callback implements `_transform`. Arguments: chunk, callback.

## License

ISC
