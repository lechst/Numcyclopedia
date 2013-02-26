function nonagonalSequence() {
    Sequence.call(this);
}

nonagonalSequence.prototype = new Sequence();

nonagonalSequence.prototype.constructor = nonagonalSequence;

nonagonalSequence.prototype.name = 'nonagonal';

nonagonalSequence.prototype.length = Infinity;

nonagonalSequence.prototype.Q = function (n){

    var x = Math.round((5+Math.sqrt(25+56*n))/14);

    if((x*(7*x-5)/2) == n){
        return true;
    }

    return false;
}
