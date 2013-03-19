var fastPrimes = require('../fastPrimesNode.js');
var factors = require('../factorsNode.js');
var divisors = require('../divisorsNode.js');
var digits = require('../digitsNode.js');
function NumbersSequence(){}

function fibonacciSequence() {
    NumbersSequence.call(this);
}

fibonacciSequence.prototype = new NumbersSequence();

fibonacciSequence.prototype.constructor = fibonacciSequence;

fibonacciSequence.prototype.name = 'Fibonacci';

fibonacciSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Fibonacci_number";
fibonacciSequence.prototype.wolfram = "http://mathworld.wolfram.com/FibonacciNumber.html";

fibonacciSequence.prototype.length = Infinity;

fibonacciSequence.prototype.texExpression = "F_{-1}=1\\\\ F_{0}=1\\\\ F_n=F_{n-1}+F_{n-2}";

fibonacciSequence.prototype.texExpressionForN = function(x,n){


    var expr = "F_{"+n+"}=F_{"+(n-1)+"}+F_{"+(n-2)+"}";
    if(n>2)
        expr += "\\\\"+(String(x)+"="+String(this.getN(n-1)+"+"+String(this.getN(n-2))));

    return expr;

}

fibonacciSequence.prototype.Q = function (n){

    var phi = (1+Math.sqrt(5))/2;
    var x = Math.floor(Math.log(n*Math.sqrt(5)+1/2)/Math.log(phi));
    var fx = Math.round(Math.pow(phi,x)/Math.sqrt(5)-Math.pow(1-phi,x)/Math.sqrt(5));

    if(fx == n){
        return true;
    }

    return false;
}

fibonacciSequence.prototype.getN = function (n){

    if(n==1)
        return 1;

    n--;

    var a = 1;
    var b = 1;

    var x = 0;

    for(var i=0; i<n; i++){
        x = a + b;
        a = b;
        b = x;
    }

    return x;
}


fibonacciSequence.prototype.arrangeFalse = function(n){

    var pos = {};
    pos.x = [];
    pos.y = [];

    pos.x.push(0);
    pos.y.push(0);

    pos.x.push(1);
    pos.y.push(0);

    var x = 1;
    var y = 0;
    var alpha = -2*Math.PI/8;

    for(var i=0; i<n; i++){
        pos.x.push(x-Math.sin(alpha+2*Math.PI/8));
        pos.y.push(y-Math.cos(alpha+2*Math.PI/8));
        x = pos.x[pos.x.length-1];
        y = pos.y[pos.y.length-1];
        for(var j=0; j<fibonacciSequence.prototype.getN(i+1)-1; j++){
            pos.x.push(x-(j+1)*Math.sqrt(2)*Math.cos(alpha));
            pos.y.push(y+(j+1)*Math.sqrt(2)*Math.sin(alpha));
        }
        x = pos.x[pos.x.length-1];
        y = pos.y[pos.y.length-1];
        alpha = alpha + 2*Math.PI/4;
    }

    return pos;

};

module.exports = fibonacciSequence;