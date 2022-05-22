const fs = require('fs');
const path = require('path');
const TEXT = path.join('C:\\Users\\lopat\\projects\\HTML-builder\\01-read-file\\text.txt');
let readableStream = fs.createReadStream(TEXT, 'utf8');
readableStream.on('data', function(chunk) {
  console.log(chunk);
});