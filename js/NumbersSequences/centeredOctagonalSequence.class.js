function centeredOctagonalSequence() {
    NumbersSequence.call(this);
}

centeredOctagonalSequence.prototype = new NumbersSequence();

centeredOctagonalSequence.prototype.constructor = centeredOctagonalSequence;

centeredOctagonalSequence.prototype.name = 'centered octagonal';

centeredOctagonalSequence.prototype.length = Infinity;

centeredOctagonalSequence.prototype.Q = function (n){

    var x = Math.round((1+Math.sqrt(n))/2);

    if((4*x*x-4*x+1) == n){
        return true;
    }

    return false;
}

