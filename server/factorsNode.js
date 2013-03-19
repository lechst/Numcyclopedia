var fastPrimes = require('./fastPrimesNode.js');
var fs = require('fs');

getNB = new Buffer (6542*4); //tyle jest liczb peirwszych do 2^16;

var getNfile = fs.openSync('./server/primes.Uint'+32+'.All.getN','r');

fs.readSync(getNfile,getNB,0,getNB.length,4);

var getN = new Uint32Array(getNB);

fs.closeSync(getNfile);

var factors = function (n){

    var factorsArr = [];

    if (n==0){
        throw new Error("cant factorize 0");
        return false;
    }

    if (n==1){
        return [{prime:1,power:1}];
    }
    var i = 0;
    //if(fastPrimes.Q(n)){
    //    return [{prime:n,power:1}];
    //}
    while (i<6542){

        if(n%getN[i]==0){

            factorsArr.push({prime:getN[i],power:1});

            n=n/getN[i];

        }
        else
        {
            i++;
        }
    }
    if(n!=1)
        factorsArr.push({prime:n,power:1});

    return factorsArr.reduceRight(function(a,b){

        if(a.length>0)
        {
            if(a[0].prime == b.prime)
            {
                a[0].power++;
                return a;
            }
            else
            {
                return [b].concat(a);
            }
        }
        else
        {
            return [b];
        }
    },[]);

}

factors.speedTest = function(n,start){
    var times = new Array(n+1);
    var temp = [];
    var num;
    times[0]=new Date();
    for(var i=0;i<n;i++)
    {
        var num = start+i;
        temp.push(factors(num));
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

    return result;
}


module.exports = factors;