function tritriangularSequence() {
    NumbersSequence.call(this);
}

tritriangularSequence.prototype = new NumbersSequence();

tritriangularSequence.prototype.constructor = tritriangularSequence;

tritriangularSequence.prototype.name = 'tritriangular';

tritriangularSequence.prototype.wolfram = "http://mathworld.wolfram.com/TritriangularNumber.html";

tritriangularSequence.prototype.length = Infinity;

tritriangularSequence.prototype.Q = function (n){

    var x = Math.round((Math.sqrt(5+4*Math.sqrt(8*n+1))-3)/2);

    if((x*(x+1)*(x+2)*(x+3)/8) == n){
        return true;
    }

    return false;
}