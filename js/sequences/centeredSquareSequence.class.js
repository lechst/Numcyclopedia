function centeredSquareSequence() {
    Sequence.call(this);
}

centeredSquareSequence.prototype = new Sequence();

centeredSquareSequence.prototype.constructor = centeredSquareSequence;

centeredSquareSequence.prototype.name = 'centered square';

centeredSquareSequence.prototype.length = Infinity;

centeredSquareSequence.prototype.Q = function (n){

    var x = Math.floor((Math.sqrt(2*n-1)-1)/2);

    if((2*x*x+2*x+1) == n){
        return true;
    }

    return false;
}