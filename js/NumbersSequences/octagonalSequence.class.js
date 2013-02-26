function octagonalSequence() {
    NumbersSequence.call(this);
}

octagonalSequence.prototype = new NumbersSequence();

octagonalSequence.prototype.constructor = octagonalSequence;

octagonalSequence.prototype.name = 'octagonal';

octagonalSequence.prototype.length = Infinity;

octagonalSequence.prototype.Q = function (n){

    var x = Math.round((1+Math.sqrt(1+3*n))/3);

    if((3*x*x-2*x) == n){
        return true;
    }

    return false;
}

