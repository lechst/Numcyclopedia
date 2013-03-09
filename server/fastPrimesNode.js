var fs = require('fs');

function fastPrimes(){

}

fastPrimes.QbyteArray = undefined;

fastPrimes.init = function(){
    fastPrimes.Q = function(i){
        return Boolean(fastPrimes.QbyteArray[i>>3]&(1<<(i&7)))
    }
};

var byteLength = 26;

fastPrimes.load = function(onload){

    fs.readFile('./server/primes.Uint'+byteLength+'.Q', function (err, data) {
        if (err) throw err;
        fastPrimes.QbyteArray = new Uint8Array(data);
        fastPrimes.init();
        onload();
    });

}



module.exports = fastPrimes;