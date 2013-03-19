var fs = require('fs');
var path = require("path");



var byteLength = 32;

var Qfile = fs.openSync('./server/primes.Uint'+byteLength+'.Q','r');
var getNfile = fs.openSync('./server/primes.Uint'+(byteLength)+'.All.getN','w+');

var bufferLength = 1024;

var Qbuffer = new Buffer(bufferLength);
var getNbuffer = new Buffer(4*bufferLength);

var Qi = 0;
var getNi = 0;
var b = 0;

var getNoffset = 0;

getNbuffer.writeUInt32LE(0, 0);

count = 0;

for(var i=0;i*bufferLength<Math.pow(2,byteLength-3);i++){

    fs.readSync(Qfile, Qbuffer, 0, bufferLength, bufferLength*i);

    QiOffset = i*bufferLength;

    for (Qi = 0;Qi<bufferLength;Qi++){

        b = 0;
        while(Qbuffer[Qi])
        {
            if(Qbuffer[Qi]%2){
                getNbuffer.writeUInt32LE(8*(QiOffset+Qi)+b, 4*getNi);
                getNi++;
            }
            b++;
            Qbuffer[Qi]>>=1;
        }

        if(getNi>(bufferLength-8)){
            count+=getNi;
            fs.writeSync(getNfile,getNbuffer,0,getNi*4,getNoffset+4);
            getNoffset +=getNi*4;
            getNi = 0;
        }

    }

}

//zapisanie ostatniego kawalka, poniewaz Qi przerywa petle niezaleznie od getNi, wiec ostantie liczby sie nie zapisza bez tego

count+=getNi;
fs.writeSync(getNfile,getNbuffer,0,getNi*4,getNoffset+4);
getNoffset +=getNi*4;
getNi = 0;

console.log('count:',count)
quadWordBuffer = new Buffer(4);
quadWordBuffer.writeUInt32LE(count,0);
fs.writeSync(getNfile,quadWordBuffer,0,4,0);

fs.closeSync(Qfile);
fs.closeSync(getNfile);
