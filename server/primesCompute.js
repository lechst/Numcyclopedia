var fs = require('fs');
var path = require("path");

var BitLength = 32;

var tested = 3;

var fd = fs.openSync('./server/primes.Uint'+BitLength+'.Q',  'w+' );
fs.closeSync(fd);



var primesBuffer = new Buffer((1<<Math.ceil(BitLength/2))/8);

primesBuffer.fill(255);

var startTime = new Date();

primesBuffer.writeUInt8(
    primesBuffer.readUInt8((0)>>3)&(~(1<<((0)&7))),
    (0)>>3
);

primesBuffer.writeUInt8(
    primesBuffer.readUInt8((1)>>3)&(~(1<<((1)&7))),
    (1)>>3
);

for (var k = 2;k<=(1<<Math.ceil(BitLength/4));k++){
    if (Boolean(primesBuffer.readUInt8(k>>3)&(1<<(k&7)))){
        for (
            var i = 2;
            ((i*k)>>3)<((1<<Math.ceil(BitLength/2))/8);
            i++
            ){
            primesBuffer.writeUInt8(
                primesBuffer.readUInt8((i*k)>>3)&(~(1<<((i*k)&7))),
                (i*k)>>3
            );
        }
    }
}

/*
//ponizej kod do testowania ilosci liczb peirwszych wygenerowanych dla sita wygenerowanych do sita
//wyniki mozna porowanc np z:
//http://primes.utm.edu/nthprime/index.php#piofx

var count = 0;
for (var i = 0;i<primesBuffer.length;i++){

  count+=((primesBuffer[i]&1)
        +(primesBuffer[i]&2)/2
        +(primesBuffer[i]&4)/4
        +(primesBuffer[i]&8)/8
        +(primesBuffer[i]&16)/16
        +(primesBuffer[i]&32)/32
        +(primesBuffer[i]&64)/64
        +(primesBuffer[i]&128)/128);
}

console.log(i*8,count);
*/

var buffer = new Buffer(8*1024*1024);
buffer.fill(255);


//ponizej odznaczenie 1 i 0;
buffer.writeUInt8(
    buffer.readUInt8((0)>>3)&(~(1<<((0)&7))),
    (0)>>3
);

buffer.writeUInt8(
    buffer.readUInt8((1)>>3)&(~(1<<((1)&7))),
    (1)>>3
);

var fd = fs.openSync('./server/primes.Uint'+BitLength+'.Q',  'a+' );

//fs.writeSync(fd,primesBuffer,0,primesBuffer.length,0);

var blocks = 0;
var count = 0;

for (var offset = 0;
    offset<((Math.pow(2,BitLength))/8);
    offset+=buffer.length){

    buffer.writeUInt8(
        buffer.readUInt8((0)>>3)&(~(1<<((0)&7))),
        (0)>>3
    );

    for (var k = 2;k<=(1<<Math.ceil(BitLength/2));k++){
        if (Boolean(primesBuffer[k>>3]&(1<<(k&7)))){
            primeOffset = (offset*8)%k;

            if(k>(offset*8)){
                i = 2;
            }
            else
            {
                i = 1;
            }

            for (
                ;
                ((-primeOffset+i*k)>>3)<(buffer.length);
                i++
                ){

                buffer.writeUInt8(
                        buffer.readUInt8(((-primeOffset+i*k)>>3))
                        &(~(1<<((-primeOffset+i*k)&7))),
                    (-primeOffset+i*k)>>3
                );
            }
        }

    }


    //liczenie liczb pierwszych w bloku
/*
     for (var i = 0;i<buffer.length;i++){

     count+=((primesBuffer[i]&1)
     +(buffer[i]&2)/2
     +(buffer[i]&4)/4
     +(buffer[i]&8)/8
     +(buffer[i]&16)/16
     +(buffer[i]&32)/32
     +(buffer[i]&64)/64
     +(buffer[i]&128)/128);

     }

    console.log(blocks,(blocks+1)*buffer.length*8,count);

*/

    blocks++;
    fs.writeSync(fd,buffer,0,buffer.length,offset);
    buffer.fill(255);
}

fs.closeSync(fd);
