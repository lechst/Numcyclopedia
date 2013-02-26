function divisibleSequence(byN) {
    if(byN)
    {
        this.byN = undefined;
    }
    Sequence.call(this);
    this.byN = byN;
}

divisibleSequence.prototype = new Sequence();

divisibleSequence.prototype.length = Infinity;

divisibleSequence.prototype.byN = 7;

divisibleSequence.prototype.constructor = divisibleSequence;

divisibleSequence.prototype.__defineGetter__('name',function(){
    return "divisible by "+this.byN;
});

divisibleSequence.prototype.Q = function (n){
    return n%this.byN==0;
}