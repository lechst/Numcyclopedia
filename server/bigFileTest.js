var fs = require('fs');
var path = require("path");

var BitLength = 32;

var testUpTo = Math.pow(2,BitLength);

//var testUpTo = Math.pow(10,6);

var tested = 3;

//PrimeQ = new Uint8Array(Math.ceil(testUpTo/8));
var buffer = new Buffer(1);
buffer.fill(0);
//function markPrime(k){
//    PrimeQ[k>>3]+=(1<<(k&7));
//}
console.log('./server/primes.Uint'+BitLength+'.Q');
var fd = fs.openSync('./server/primes.Uint'+BitLength+'.Q',  'a+' );
fs.readSync(fd,buffer,0,1,2001);
console.log(buffer);

fs.closeSync(fd);