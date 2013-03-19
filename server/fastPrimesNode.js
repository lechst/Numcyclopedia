var fs = require('fs');

function fastPrimes(){

}

fastPrimes.QbyteArray = undefined;
fastPrimes.getNArray = undefined;

fastPrimes.init = function(){

    fastPrimes.byteLength = 32;

    fastPrimes.Qbuffor = new Buffer(1);
    fastPrimes.getNbuffor = new Buffer(4);



    fastPrimes.Q = function(i){
        fs.readSync(fastPrimes.Qfile, fastPrimes.Qbuffor, 0, 1, Math.floor(i/8));
        return Boolean(fastPrimes.Qbuffor[0]&(1<<(i&7)));
    }
    fastPrimes.getN = function(n){
        fs.readSync(fastPrimes.getNfile, fastPrimes.getNbuffor, 0, 4, (n)*4);
        return fastPrimes.getNbuffor.readUInt32LE(0);
    }

    fastPrimes.maxN = fastPrimes.getN(0);
    console.log('...primes loaded!, maxN:'+fastPrimes.maxN);

};

var byteLength = 32;

fastPrimes.load = function(onload){

    if(!fs.existsSync('./server/primes.Uint'+byteLength+'.Q')){
        onload(new Error('primes.Uint'+byteLength+'.Q'+' not Found, try generate it with primesCompute.js'));
        return false;
    }
    if(!fs.existsSync('./server/primes.Uint'+(byteLength)+'.All.getN')){
        onload(new Error('primes.Uint'+(byteLength)+'.All.getN'+' not Found, try generate it with primesgetNCompute.js'));
        return false;
    }

    loaded = false;
    fastPrimes.getNloaded = false;

    console.log('primes requested...');

    fastPrimes.Qfile = fs.openSync('./server/primes.Uint'+byteLength+'.Q','r');
    fastPrimes.getNfile = fs.openSync('./server/primes.Uint'+(byteLength)+'.All.getN','r');

            fastPrimes.init();
            onload();


    return true;

}

fastPrimes.QspeedTest = function(n,start){
    var times = new Array(n+1);
    var temp = [];
    var num;
    times[0]=new Date();
    for(var i=0;i<n;i++)
    {
        var num = start+i;
        temp.push([num,fastPrimes.Q(num)]);
        times[i+1]=new Date();
    }

    var maxTime = 0;
    var minTime = Infinity;

    dTimes = new Array(n);

    for (i=0;i<n-1;i++)
    {
        dTimes[i]=times[i+1]-times[i];
        if (dTimes[i]>maxTime)
            maxTime = dTimes[i];
        if (dTimes[i]<minTime)
            minTime = dTimes[i];
    }

    for (i=0;i<n-1;i++)
    {
        dTimes[i]=times[i+1]-times[i];
        if (dTimes[i]>maxTime)
            maxTime = dTimes[i];
        if (dTimes[i]<minTime)
            minTime = dTimes[i];
    }

    dTimes.sort();

    var result = {};
    result.Trials = n;
    result.allTime = times[n]-times[0];

    result.minTime = minTime;
    result.maxTime = maxTime;

    result.median = dTimes[Math.floor(n/2)];

    result.mean = (result.allTime)/n;
    //result.temp = temp;
    return result;
}

fastPrimes.getNspeedTest = function(n,start){
    var times = new Array(n+1);
    var temp = [];
    var num;
    times[0]=new Date();
    for(var i=0;i<n;i++)
    {
        var num = start+i;
        temp.push([num,fastPrimes.getN(num)]);
        times[i+1]=new Date();
    }

    var maxTime = 0;
    var minTime = Infinity;

    dTimes = new Array(n);

    for (i=0;i<n-1;i++)
    {
        dTimes[i]=times[i+1]-times[i];
        if (dTimes[i]>maxTime)
            maxTime = dTimes[i];
        if (dTimes[i]<minTime)
            minTime = dTimes[i];
    }

    for (i=0;i<n-1;i++)
    {
        dTimes[i]=times[i+1]-times[i];
        if (dTimes[i]>maxTime)
            maxTime = dTimes[i];
        if (dTimes[i]<minTime)
            minTime = dTimes[i];
    }

    dTimes.sort();

    var result = {};
    result.Trials = n;
    result.allTime = times[n]-times[0];

    result.minTime = minTime;
    result.maxTime = maxTime;

    result.median = dTimes[Math.floor(n/2)];

    result.mean = (result.allTime)/n;
    result.temp = temp;
    return result;
}

module.exports = fastPrimes;