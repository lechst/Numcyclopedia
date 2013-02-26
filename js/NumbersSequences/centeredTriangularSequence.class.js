function centeredTriangularSequence() {
    NumbersSequence.call(this);
}

centeredTriangularSequence.prototype = new NumbersSequence();

centeredTriangularSequence.prototype.constructor = centeredTriangularSequence;

centeredTriangularSequence.prototype.name = 'centered triangular';

centeredTriangularSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Centered_triangular_number";
centeredTriangularSequence.prototype.wolfram = "http://mathworld.wolfram.com/CenteredTriangularNumber.html";

centeredTriangularSequence.prototype.length = Infinity;

centeredTriangularSequence.prototype.Q = function (n){

    var x = Math.round((Math.sqrt(3)*Math.sqrt(8*n-5)-3)/6);

    if(((3*x*x+3*x+2)/2) == n){
        return true;
    }

    return false;
}