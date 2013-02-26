function biquadraticSequence() {
    Sequence.call(this);
}

biquadraticSequence.prototype = new Sequence();

biquadraticSequence.prototype.constructor = biquadraticSequence;

biquadraticSequence.prototype.name = 'biquadratic';

biquadraticSequence.prototype.wolfram = "http://mathworld.wolfram.com/BiquadraticNumber.html";

biquadraticSequence.prototype.length = Infinity;

biquadraticSequence.prototype.Q = function (n){

    var x = Math.round(Math.pow(n,1/4));

    if(x*x*x*x == n){
        return true;
    }

    return false;
}
