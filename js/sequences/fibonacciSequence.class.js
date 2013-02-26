function fibonacciSequence() {
    Sequence.call(this);
}

fibonacciSequence.prototype = new Sequence();

fibonacciSequence.prototype.constructor = fibonacciSequence;

fibonacciSequence.prototype.name = 'Fibonacci';

fibonacciSequence.prototype.length = Infinity;

fibonacciSequence.prototype.Q = function (n){

    var phi = (1+Math.sqrt(5))/2;
    var x = Math.floor(Math.log(n*Math.sqrt(5)+1/2)/Math.log(phi));
    var fx = Math.round(Math.pow(phi,x)/Math.sqrt(5)-Math.pow(1-phi,x)/Math.sqrt(5));

    if(fx == n){
        return true;
    }

    return false;
}