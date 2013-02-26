function squarePyramidalSequence() {
    Sequence.call(this);
}

squarePyramidalSequence.prototype = new Sequence();

squarePyramidalSequence.prototype.constructor = squarePyramidalSequence;

squarePyramidalSequence.prototype.name = 'square pyramidal';

squarePyramidalSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Square_pyramidal_number";
squarePyramidalSequence.prototype.wolfram = "http://mathworld.wolfram.com/SquarePyramidalNumber.html";

squarePyramidalSequence.prototype.length = Infinity;

squarePyramidalSequence.prototype.Q = function (n){

    var x = Math.round((Math.pow(108*n+Math.sqrt(3)*Math.sqrt(3888*n*n-1),-1/3)*Math.pow(3,-1/3)+Math.pow(108*n+Math.sqrt(3)*Math.sqrt(3888*n*n-1),1/3)*Math.pow(3,-2/3)-1)/2);

    if(x*(x+1)*(2*x+1)/6 == n){
        return true;
    }

    return false;
}

