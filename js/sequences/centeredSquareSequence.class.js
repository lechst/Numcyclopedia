function centeredSquareSequence() {
    Sequence.call(this);
}

centeredSquareSequence.prototype = new Sequence();

centeredSquareSequence.prototype.constructor = centeredSquareSequence;

centeredSquareSequence.prototype.name = 'centered square';

centeredSquareSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Centered_square_number";
centeredSquareSequence.prototype.wolfram = "http://mathworld.wolfram.com/CenteredSquareNumber.html";

centeredSquareSequence.prototype.length = Infinity;

centeredSquareSequence.prototype.Q = function (n){

    var x = Math.round((Math.sqrt(2*n-1)-1)/2);

    if((2*x*x+2*x+1) == n){
        return true;
    }

    return false;
}