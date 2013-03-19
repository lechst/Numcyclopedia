var factors = require('./factorsNode.js');

var divisors = function(n){
    var a = factors(n);
    var d = [1];

    for(var i=0; i<a.length; i++){
        var l = d.length;

        for(var j=0; j<l; j++){
            for(var k=1; k<(a[i].power+1); k++){
                d.push(d[j]*Math.pow(a[i].prime,k));
            }
        }
    }

    d = d.sort(function(a,b){return a-b});
    //console.log(n,d);
    return d;
}

module.exports = divisors;