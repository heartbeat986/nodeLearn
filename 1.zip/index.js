var fs = require("fs");
var zlib = require("zlib");

var gzip = zlib.createGzip();
var inFile = fs.createReadStream("./1.txt");
var outFile = fs.createWriteStream("./1.zip");
inFile.pipe(gzip).pipe(outFile);
