function cubicSequence() {
    Sequence.call(this);
}

cubicSequence.prototype = new Sequence();

cubicSequence.prototype.constructor = cubicSequence;

cubicSequence.prototype.name = 'cube';

cubicSequence.prototype.length = Infinity;

cubicSequence.prototype.Q = function (n){

    var x = Math.round(Math.pow(n,1/3));

    if(x*x*x == n){
        return true;
    }

    return false;
}