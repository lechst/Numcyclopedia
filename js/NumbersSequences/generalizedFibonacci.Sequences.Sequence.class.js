function generalizedFibonacciSequencesSequence() {
    Sequence.call(this);
}

generalizedFibonacciSequencesSequence.prototype = new Sequence();

generalizedFibonacciSequencesSequence.prototype.constructor = generalizedFibonacciSequencesSequence;

generalizedFibonacciSequencesSequence.prototype.name = 'generalized Fibonacci numbers';

generalizedFibonacciSequencesSequence.prototype.length = Infinity;

generalizedFibonacciSequencesSequence.prototype.getN = function(n){

    return new generalizedFibonacciSequence(n);

};




function generalizedFibonacciSequence(n) {

    NumbersSequence.call(this);

    if(!n) {
        throw new Error("n must be specified!")
    }

    this.N = n;

}

generalizedFibonacciSequence.prototype = new NumbersSequence();

generalizedFibonacciSequence.prototype.constructor = generalizedFibonacciSequence;

generalizedFibonacciSequence.prototype.length = Infinity;

generalizedFibonacciSequence.prototype.getN = function(n){

    var r = this.N + 1;
    var a = [];

    for(var i=1; i<r; i++){
        a.push(0);
    }

    a.push(1);

    var x = 0;

    for(var i=0; i<n; i++){
        x = a.reduce(function(x,y){return x+y;});
        a.shift();
        a.push(x);
    }

    return x;

};

generalizedFibonacciSequence.prototype.__defineGetter__('name',function(){
    var r = this.N + 1;

    return r+"-nacci number";
});

generalizedFibonacciSequence.prototype.Q = function (n){

    var r = this.N + 1;
    var a = [];

    for(var i=1; i<r; i++){
        a.push(0);
    }

    a.push(1);

    var x = 0;

    while(x < n){
        x = a.reduce(function(x,y){return x+y;});
        a.shift();
        a.push(x);
    }

    if(x == n){
        return true;
    }

    return false;
}


































