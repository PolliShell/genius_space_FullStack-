const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./docs/text.txt');
const writeStream = fs.createWriteStream('./docs/new-text.txt')
const compressStream = zlib.createGzip();


// readStream.on('data',(chunk)=>{
//     console.log('--------');
//     console.log(chunk.toString());
// })

// readStream.on('data',(chunk)=>{
//    writeStream.write(chunk);
// })

const handleError = () => {
    console.log('Error');
    readStream.destroy();
    writeStream.end('Finish with error...');
}

readStream
    .on('error', handleError)
    .pipe(compressStream)
    .pipe(writeStream)
    .on('error', handleError);