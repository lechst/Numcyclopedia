function triangularSequence() {
    NumbersSequence.call(this);
}

triangularSequence.prototype = new NumbersSequence();

triangularSequence.prototype.constructor = triangularSequence;

triangularSequence.prototype.name = 'triangular';

triangularSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Triangular_number";
triangularSequence.prototype.wolfram = "http://mathworld.wolfram.com/TriangularNumber.html";

triangularSequence.prototype.length = Infinity;

triangularSequence.prototype.Q = function (n){

    var x = Math.round((Math.sqrt(8*n+1)-1)/2);

    if((x*(x+1)/2) == n){
        return true;
    }

    return false;
}