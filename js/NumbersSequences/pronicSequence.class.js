function pronicSequence() {
    NumbersSequence.call(this);
}

pronicSequence.prototype = new NumbersSequence();

pronicSequence.prototype.constructor = pronicSequence;

pronicSequence.prototype.name = 'pronic';

pronicSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Pronic_number";
pronicSequence.prototype.wolfram = "http://mathworld.wolfram.com/PronicNumber.html";

pronicSequence.prototype.length = Infinity;

pronicSequence.prototype.Q = function (n){

    var x = Math.round((Math.sqrt(1+4*n)-1)/2);

    if((x*x+x) == n){
        return true;
    }

    return false;
}

