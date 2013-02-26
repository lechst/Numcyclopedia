function pronicSequence() {
    NumbersSequence.call(this);
}

pronicSequence.prototype = new NumbersSequence();

pronicSequence.prototype.constructor = pronicSequence;

pronicSequence.prototype.name = 'pronic';

pronicSequence.prototype.length = Infinity;

pronicSequence.prototype.Q = function (n){

    var x = Math.round((Math.sqrt(1+4*n)-1)/2);

    if((x*x+x) == n){
        return true;
    }

    return false;
}

