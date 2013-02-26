function centeredPentagonalSequence() {
    NumbersSequence.call(this);
}

centeredPentagonalSequence.prototype = new NumbersSequence();

centeredPentagonalSequence.prototype.constructor = centeredPentagonalSequence;

centeredPentagonalSequence.prototype.name = 'centered pentagonal';

centeredPentagonalSequence.prototype.length = Infinity;

centeredPentagonalSequence.prototype.Q = function (n){

    var x = Math.round((Math.sqrt(5)*Math.sqrt(8*n-3)-5)/10);

    if(((5*x*x+5*x+2)/2) == n){
        return true;
    }

    return false;
}