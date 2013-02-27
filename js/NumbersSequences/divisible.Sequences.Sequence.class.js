function divisibleSequencesSequence() {
    Sequence.call(this);
}

divisibleSequencesSequence.prototype = new Sequence();

divisibleSequencesSequence.prototype.constructor = divisibleSequencesSequence;

divisibleSequencesSequence.prototype.name = 'modulo partitions';

divisibleSequencesSequence.prototype.length = Infinity;

divisibleSequencesSequence.prototype.getN = function(n){

    return new divisibleSequence(byN);

};




function divisibleSequence(byN) {
    if(!byN)
    {
        throw new Error("n must be specified!")
    }
    this.byN = byN;
    NumbersSequence.call(this);


}

divisibleSequence.prototype = new NumbersSequence();

divisibleSequence.prototype.constructor = divisibleSequence;

divisibleSequence.prototype.length = Infinity;

divisibleSequence.prototype.byN = undefined;


divisibleSequence.prototype.__defineGetter__('name',function(){
    return "divisible by "+this.byN;
});

divisibleSequence.prototype.Q = function (n){
    return n%this.byN==0;
}