function squareSequence() {
    NumbersSequence.call(this);
}

squareSequence.prototype = new NumbersSequence();

squareSequence.prototype.constructor = squareSequence;

squareSequence.prototype.name = 'square';

squareSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Square_number";
squareSequence.prototype.wolfram = "http://mathworld.wolfram.com/SquareNumber.html";
squareSequence.prototype.oeis = "000290";

squareSequence.prototype.length = Infinity;

squareSequence.prototype.getN = function (n){
    return n*n;
}

squareSequence.prototype.Q = function (n){

    var x = Math.round(Math.sqrt(n));

    if(x*x == n){
        return true;
    }

    return false;
}