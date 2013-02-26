function centeredHeptagonalSequence() {
    NumbersSequence.call(this);
}

centeredHeptagonalSequence.prototype = new NumbersSequence();

centeredHeptagonalSequence.prototype.constructor = centeredHeptagonalSequence;

centeredHeptagonalSequence.prototype.name = 'centered heptagonal';

centeredHeptagonalSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Centered_heptagonal_number";
centeredHeptagonalSequence.prototype.wolfram = "http://mathworld.wolfram.com/CenteredHeptagonalNumber.html";

centeredHeptagonalSequence.prototype.length = Infinity;

centeredHeptagonalSequence.prototype.Q = function (n){

    var x = Math.round((7+Math.sqrt(7)*Math.sqrt(8*n-1))/14);

    if(((7*x*x-7*x+2)/2) == n){
        return true;
    }

    return false;
}
