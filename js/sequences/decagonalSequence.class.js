function decagonalSequence() {
    Sequence.call(this);
}

decagonalSequence.prototype = new Sequence();

decagonalSequence.prototype.constructor = decagonalSequence;

decagonalSequence.prototype.name = 'decagonal';

decagonalSequence.prototype.length = Infinity;

decagonalSequence.prototype.Q = function (n){

    var x = Math.round((3+Math.sqrt(9+16*n))/8);

    if((4*x*x-3*x) == n){
        return true;
    }

    return false;
}

