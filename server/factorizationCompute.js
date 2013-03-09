var fs = require('fs');
var path = require("path");

var BitLength = 24;

var testUpTo = 1<<BitLength;

//var testUpTo = Math.pow(10,6);

var tested = 3;

PrimeQ = new Uint8Array(Math.ceil(testUpTo/8));

//function markPrime(k){
//    PrimeQ[k>>3]+=(1<<(k&7));
//}

PrimeQ[2>>3]+=(1<<(2&7));
PrimeQ[3>>3]+=(1<<(3&7));

for (var k = 4;k<=testUpTo;k++){

    tested = k;
    //process.stdout.write(k+'\n');
    var start = Math.ceil(Math.sqrt(k));
    for(var j=start;j>1;j--)
    {
        i = (start-j)+2;
        if(Boolean(PrimeQ[i>>3]&(1<<(i&7))) && (k%i)==0){

            j=-1;
        }
    }

    if(j>-1)
    {
        PrimeQ[k>>3]+=(1<<(k&7));
    }
}

var Count = 0;
for (var i = 2;i<=testUpTo;i++){
    if(Boolean(PrimeQ[i>>3]&(1<<(i&7))))
    {
        Count ++;
    }
}

var buffer = new Buffer(PrimeQ)

var writeStream = fs.createWriteStream('./server/primes.Uint'+BitLength+'.Q', { flags : 'w+' });

writeStream.write(buffer);

writeStream.end();

writeStream.destroy()

console.log('tested up to:',testUpTo,' found:',Count)