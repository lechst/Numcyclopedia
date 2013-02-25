function centeredTriangularSequence() {
    Sequence.call(this);
}

centeredTriangularSequence.prototype = new Sequence();

centeredTriangularSequence.prototype.constructor = centeredTriangularSequence;

centeredTriangularSequence.prototype.name = 'centered triangular';

centeredTriangularSequence.prototype.length = Infinity;

centeredTriangularSequence.prototype.Q = function (n){

    var x = Math.round((Math.sqrt(3)*Math.sqrt(8*n-5)-3)/6);

    if(((3*x*x+3*x+2)/2) == n){
        return true;
    }

    return false;
}