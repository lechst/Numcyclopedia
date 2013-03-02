function mersenneSequence() {
    NumbersSequence.call(this);
}

mersenneSequence.prototype = new NumbersSequence();

mersenneSequence.prototype.constructor = mersenneSequence;

mersenneSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Mersenne_number";
mersenneSequence.prototype.wolfram = "http://mathworld.wolfram.com/MersenneNumber.html";

mersenneSequence.prototype.name = 'Mersenne';

mersenneSequence.prototype.length = Infinity;

mersenneSequence.prototype.texExpression = "2^n-1";

mersenneSequence.prototype.getN = function (n){

    var x = Math.pow(2,n)-1;

    return x;

}

mersenneSequence.prototype.Q = function (n){

    var x = 1;
    var i = 0;

    while(x < n){
        x = Math.pow(2,n)-1;
        i++;
    }

    if(x == n){
        return true;
    }

    return false;
}
