function starSequence() {
    NumbersSequence.call(this);
}

starSequence.prototype = new NumbersSequence();

starSequence.prototype.constructor = starSequence;

starSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Star_number";
starSequence.prototype.wolfram = "http://mathworld.wolfram.com/StarNumber.html";

starSequence.prototype.name = 'star';

starSequence.prototype.length = Infinity;

starSequence.prototype.Q = function (n){

    var x = Math.round((Math.sqrt(2*n+1)*Math.sqrt(3)+3)/6);

    if((6*x*(x-1)+1) == n){
        return true;
    }

    return false;
}