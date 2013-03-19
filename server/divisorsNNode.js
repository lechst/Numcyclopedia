var factors = require('./factorsNode.js');

var divisorsN = function (n){
    if (n == 1){
        return 1;
    } else {
        return factors(n).map(function(x){return x.power+1}).reduce(function(a,b){return a*b;});
    }
}

module.exports = divisorsN;