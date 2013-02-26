function heptagonalSequence() {
    NumbersSequence.call(this);
}

heptagonalSequence.prototype = new NumbersSequence();

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

