function pentagonalSequence() {
    Sequence.call(this);
}

pentagonalSequence.prototype = new Sequence();

pentagonalSequence.prototype.constructor = pentagonalSequence;

pentagonalSequence.prototype.name = 'pentagonal';

pentagonalSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Pentagonal_number";
pentagonalSequence.prototype.wolfram = "http://mathworld.wolfram.com/PentagonalNumber.html";

pentagonalSequence.prototype.length = Infinity;

pentagonalSequence.prototype.Q = function (n){

    var x = Math.round((1+Math.sqrt(1+24*n))/6);

    if((x*(3*x-1)/2) == n){
        return true;
    }

    return false;
}
