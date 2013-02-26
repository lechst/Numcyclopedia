function stellaOctangulaSequence() {
    Sequence.call(this);
}

stellaOctangulaSequence.prototype = new Sequence();

stellaOctangulaSequence.prototype.constructor = stellaOctangulaSequence;

stellaOctangulaSequence.prototype.name = 'stella octangula';

stellaOctangulaSequence.prototype.length = Infinity;

stellaOctangulaSequence.prototype.Q = function (n){

    var x = Math.round(Math.pow(9*n+Math.sqrt(3)*Math.sqrt(27*n*n-2),-1/3)*Math.pow(6,-1/3)+Math.pow(9*n+Math.sqrt(3)*Math.sqrt(27*n*n-2),1/3)*Math.pow(6,-2/3));

    if(x*(2*x*x-1) == n){
        return true;
    }

    return false;
}

