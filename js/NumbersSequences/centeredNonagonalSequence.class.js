function hexagonalSequence() {
    NumbersSequence.call(this);
}

hexagonalSequence.prototype = new NumbersSequence();

hexagonalSequence.prototype.constructor = hexagonalSequence;

hexagonalSequence.prototype.name = 'centered nonagonal';

hexagonalSequence.prototype.length = Infinity;

hexagonalSequence.prototype.Q = function (n){

    var x = Math.round((3+Math.sqrt(1+8*n))/6);

    if(((3*x-2)*(3*x-1)/2) == n){
        return true;
    }

    return false;
}

