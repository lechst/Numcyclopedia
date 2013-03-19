var fs = require('fs');

var fastPrimes = require('./fastPrimesNode.js');

var factors = require('./factorsNode.js');

var divisors = require('./divisorsNode.js');

fastPrimes.mode = "disk";

//var path = './js/NumbersSequences/fibonacciSequence.class.js';

var oneCompilePerExec = true;

var showResult = function(result){
    for (var lId in result){
        console.log(lId+":",result[lId]);
    }
}

fastPrimes.load(function(err){

    //console.log( factors(1272448607));
    result = fastPrimes.getNspeedTest(1000,Math.floor(fastPrimes.maxN/3));
    //result = factors.speedTest(1000,Math.pow(2,31)+1000);
    showResult(result);

    //getSequencesNames(function(names){
        //getFirstUncompiled(names,function(name){
                //loadAndCompile(name);
            //})
        //}
    //);

});


