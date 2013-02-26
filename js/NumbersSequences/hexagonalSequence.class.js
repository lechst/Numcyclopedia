function hexagonalSequence() {
    NumbersSequence.call(this);
}

hexagonalSequence.prototype = new NumbersSequence();

hexagonalSequence.prototype.constructor = hexagonalSequence;

hexagonalSequence.prototype.name = 'hexagonal';

hexagonalSequence.prototype.length = Infinity;

hexagonalSequence.prototype.Q = function (n){

    var x = Math.round((1+Math.sqrt(1+8*n))/4);

    if((2*x*x-x) == n){
        return true;
    }

    return false;
}
