function cubicSequence() {
    NumbersSequence.call(this);
}

cubicSequence.prototype = new NumbersSequence();

cubicSequence.prototype.constructor = cubicSequence;

cubicSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Cube_number";
cubicSequence.prototype.wolfram = "http://mathworld.wolfram.com/CubicNumber.html";

cubicSequence.prototype.name = 'cube';

cubicSequence.prototype.length = Infinity;

cubicSequence.prototype.Q = function (n){

    var x = Math.round(Math.pow(n,1/3));

    if(x*x*x == n){
        return true;
    }

    return false;
}