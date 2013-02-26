function pentagonalPyramidalSequence() {
    Sequence.call(this);
}

pentagonalPyramidalSequence.prototype = new Sequence();

pentagonalPyramidalSequence.prototype.constructor = pentagonalPyramidalSequence;

pentagonalPyramidalSequence.prototype.name = 'pentagonal pyramidal';

pentagonalPyramidalSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Pentagonal_pyramidal_number";
pentagonalPyramidalSequence.prototype.wolfram = "http://mathworld.wolfram.com/PentagonalPyramidalNumber.html";

pentagonalPyramidalSequence.prototype.length = Infinity;

pentagonalPyramidalSequence.prototype.Q = function (n){

    var x = Math.round((Math.pow(27*n-1+3*Math.sqrt(3)*Math.sqrt(27*n*n-2*n),-1/3)+Math.pow(27*n-1+3*Math.sqrt(3)*Math.sqrt(27*n*n-2*n),1/3)-1)/3);

    if(x*x*(x+1)/2 == n){
        return true;
    }

    return false;
}

