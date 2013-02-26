function decagonalSequence() {
    NumbersSequence.call(this);
}

decagonalSequence.prototype = new NumbersSequence();

decagonalSequence.prototype.constructor = decagonalSequence;

decagonalSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Decagonal_number";
decagonalSequence.prototype.wolfram = "http://mathworld.wolfram.com/DecagonalNumber.html";

decagonalSequence.prototype.name = 'decagonal';

decagonalSequence.prototype.length = Infinity;

decagonalSequence.prototype.Q = function (n){

    var x = Math.round((3+Math.sqrt(9+16*n))/8);

    if((4*x*x-3*x) == n){
        return true;
    }

    return false;
}

