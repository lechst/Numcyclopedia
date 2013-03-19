var factors = require('./factorsNode.js');

var divisorFunction = function(n){
    var a = factors(n);
    var x = 1;

    for(var i=0; i<a.length; i++){
        x = x*(Math.pow(a[i].prime,a[i].power+1)-1)/(a[i].prime-1);
    }

    return x;
}
module.exports = divisorFunction;