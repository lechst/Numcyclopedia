function centeredDecagonalSequence() {
    NumbersSequence.call(this);
}

centeredDecagonalSequence.prototype = new NumbersSequence();

centeredDecagonalSequence.prototype.constructor = centeredDecagonalSequence;

centeredDecagonalSequence.prototype.name = 'centered decagonal';

centeredDecagonalSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Centered_decagonal_number";
centeredDecagonalSequence.prototype.wolfram = "http://mathworld.wolfram.com/CenteredDecagonalNumber.html";

centeredDecagonalSequence.prototype.length = Infinity;

centeredDecagonalSequence.prototype.Q = function (n){

    var x = Math.round((5+Math.sqrt(5)*Math.sqrt(1+4*n))/10);

    if((5*x*x-5*x+1) == n){
        return true;
    }

    return false;
}

