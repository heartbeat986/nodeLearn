var fs = require("fs");
var zlib = require("zlib");

var gzip = zlib.createGunzip();
var inFile = fs.createReadStream("./1.zip");
var outFile = fs.createWriteStream("./1.unzip.txt");
inFile.pipe(gzip).pipe(outFile);
