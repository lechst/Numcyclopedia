function starSequence() {
    Sequence.call(this);
}

starSequence.prototype = new Sequence();

starSequence.prototype.constructor = starSequence;

starSequence.prototype.name = 'star';

starSequence.prototype.length = Infinity;

starSequence.prototype.Q = function (n){

    var x = Math.floor((Math.sqrt(2*n+1)*Math.sqrt(3)+3)/6);

    if((6*x*(x-1)+1) == n){
        return true;
    }

    return false;
}