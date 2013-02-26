function hexagonalPyramidalSequence() {
    NumbersSequence.call(this);
}

hexagonalPyramidalSequence.prototype = new NumbersSequence();

hexagonalPyramidalSequence.prototype.constructor = hexagonalPyramidalSequence;

hexagonalPyramidalSequence.prototype.name = 'hexagonal pyramidal';

hexagonalPyramidalSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Hexagonal_pyramidal_number";
hexagonalPyramidalSequence.prototype.wolfram = "http://mathworld.wolfram.com/HexagonalPyramidalNumber.html";

hexagonalPyramidalSequence.prototype.length = Infinity;

hexagonalPyramidalSequence.prototype.Q = function (n){

    var x = Math.round((7*Math.pow(432*n-27+2*Math.sqrt(3)*Math.sqrt(15552*n*n-1944*n-25),-1/3)*Math.pow(3,-1/3)+Math.pow(432*n-27+2*Math.sqrt(3)*Math.sqrt(15552*n*n-1944*n-25),1/3)*Math.pow(3,-2/3)-1)/4);

    if(x*(x+1)*(4*x-1)/6 == n){
        return true;
    }

    return false;
}