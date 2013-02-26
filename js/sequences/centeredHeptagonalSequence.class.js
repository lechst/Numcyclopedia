function centeredHeptagonalSequence() {
    Sequence.call(this);
}

centeredHeptagonalSequence.prototype = new Sequence();

centeredHeptagonalSequence.prototype.constructor = centeredHeptagonalSequence;

centeredHeptagonalSequence.prototype.name = 'centered heptagonal';

centeredHeptagonalSequence.prototype.length = Infinity;

centeredHeptagonalSequence.prototype.Q = function (n){

    var x = Math.round((7+Math.sqrt(7)*Math.sqrt(8*n-1))/14);

    if(((7*x*x-7*x+2)/2) == n){
        return true;
    }

    return false;
}
