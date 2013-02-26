function octagonalSequence() {
    Sequence.call(this);
}

octagonalSequence.prototype = new Sequence();

octagonalSequence.prototype.constructor = octagonalSequence;

octagonalSequence.prototype.name = 'octagonal';

octagonalSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Octagonal_number";
octagonalSequence.prototype.wolfram = "http://mathworld.wolfram.com/OctagonalNumber.html";

octagonalSequence.prototype.length = Infinity;

octagonalSequence.prototype.Q = function (n){

    var x = Math.round((1+Math.sqrt(1+3*n))/3);

    if((3*x*x-2*x) == n){
        return true;
    }

    return false;
}

