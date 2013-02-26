function squareSequence() {
    NumbersSequence.call(this);
}

squareSequence.prototype = new NumbersSequence();

squareSequence.prototype.constructor = squareSequence;

squareSequence.prototype.name = 'square';

squareSequence.prototype.length = Infinity;

squareSequence.prototype.Q = function (n){

    var x = Math.round(Math.sqrt(n));

    if(x*x == n){
        return true;
    }

    return false;
}