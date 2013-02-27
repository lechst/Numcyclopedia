function divisibleSequencesSequence() {
    Sequence.call(this);
}

divisibleSequencesSequence.prototype = new Sequence();

divisibleSequencesSequence.prototype.constructor = divisibleSequencesSequence;

divisibleSequencesSequence.prototype.name = 'modulo partitions';

divisibleSequencesSequence.prototype.length = Infinity;

divisibleSequencesSequence.prototype.getN = function(n){

    return new divisibleSequence(n);

};




function divisibleSequence(byN) {
    NumbersSequence.call(this);

    if(!byN)
    {
        throw new Error("n must be specified!")
    }

    this.N = byN;

}

divisibleSequence.prototype = new NumbersSequence();

divisibleSequence.prototype.constructor = divisibleSequence;

divisibleSequence.prototype.length = Infinity;

divisibleSequence.prototype.N = undefined;


divisibleSequence.prototype.__defineGetter__('name',function(){
    return "divisible by "+this.N;
});

divisibleSequence.prototype.Q = function (n){
    return n%this.N==0;
}