function centeredHexagonalSequence() {
    Sequence.call(this);
}

centeredHexagonalSequence.prototype = new Sequence();

centeredHexagonalSequence.prototype.constructor = centeredHexagonalSequence;

centeredHexagonalSequence.prototype.name = 'centered hexagonal';

centeredHexagonalSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Centered_hexagonal_number";
centeredHexagonalSequence.prototype.wolfram = "http://mathworld.wolfram.com/CenteredHexagonalNumber.html";

centeredHexagonalSequence.prototype.length = Infinity;

centeredHexagonalSequence.prototype.Q = function (n){

    var x = Math.round((3+Math.sqrt(3)*Math.sqrt(4*n-1))/6);

    if((3*x*x-3*x+1) == n){
        return true;
    }

    return false;
}

