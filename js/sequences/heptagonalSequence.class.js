function heptagonalSequence() {
    Sequence.call(this);
}

heptagonalSequence.prototype = new Sequence();

heptagonalSequence.prototype.constructor = heptagonalSequence;

heptagonalSequence.prototype.name = 'heptagonal';

heptagonalSequence.prototype.length = Infinity;

heptagonalSequence.prototype.Q = function (n){

    var x = Math.round((3+Math.sqrt(9+40*n))/10);

    if(((5*x*x-3*x)/2) == n){
        return true;
    }

    return false;
}

