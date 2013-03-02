function generalizedLucasSequencesSequence() {
    Sequence.call(this);
}

generalizedLucasSequencesSequence.prototype = new Sequence();

generalizedLucasSequencesSequence.prototype.constructor = generalizedLucasSequencesSequence;

generalizedLucasSequencesSequence.prototype.name = 'Lucas n-step numbers';

generalizedLucasSequencesSequence.prototype.length = Infinity;

generalizedLucasSequencesSequence.prototype.getN = function(n){

    return new generalizedLucasSequence(n);

};




function generalizedLucasSequence(n) {

    NumbersSequence.call(this);

    if(!n) {
        throw new Error("n must be specified!")
    }
    this.final = true;
    this.N = n;

}

generalizedLucasSequence.prototype = new NumbersSequence();

generalizedLucasSequence.prototype.constructor = generalizedLucasSequence;

generalizedLucasSequence.prototype.length = Infinity;

generalizedLucasSequence.prototype.final = false;

generalizedLucasSequence.prototype.memberOf = [generalizedLucasSequencesSequence.prototype];

generalizedLucasSequence.prototype.getN = function(n){

    var r = this.N + 1;
    var a = [];

    for(var i=1; i<r; i++){
        a.push(-1);
    }

    a.push(r);

    var x = 0;

    for(var i=0; i<n; i++){
        x = a.reduce(function(x,y){return x+y;});
        a.shift();
        a.push(x);
    }

    return x;

};

generalizedLucasSequence.prototype.__defineGetter__('name',function(){
    var r = this.N + 1;

    return "Lucas "+r+"-step number";
});

generalizedLucasSequence.prototype.Q = function (n){

    var r = this.N + 1;
    var a = [];

    for(var i=1; i<r; i++){
        a.push(-1);
    }

    a.push(r);

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