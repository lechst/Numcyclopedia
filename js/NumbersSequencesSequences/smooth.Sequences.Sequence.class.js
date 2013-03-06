function smoothSequencesSequence() {
    Sequence.call(this);
}

smoothSequencesSequence.prototype = new Sequence();

smoothSequencesSequence.prototype.constructor = smoothSequencesSequence;

smoothSequencesSequence.prototype.name = 'n-smooth numbers';

smoothSequencesSequence.prototype.length = Infinity;

smoothSequencesSequence.prototype.getN = function(n){

    return new smoothSequence(n);

};




function smoothSequence(n) {

    NumbersSequence.call(this);

    if(!n) {
        throw new Error("n must be specified!")
    }
    this.final = true;
    this.N = n;

}

smoothSequence.prototype = new NumbersSequence();

smoothSequence.prototype.constructor = automorphicSequence;

smoothSequence.prototype.length = Infinity;

smoothSequence.prototype.memberOf = [smoothSequencesSequence.prototype];

smoothSequence.prototype.final = false;

smoothSequence.prototype.texExpressionForN = function(x,n){

    var r = this.N+1;
    var m = this.getN(n);
    var f = factors(m);
    var l = f.length;

    var expr = m+'=';

    for(var i=0; i<l-1; i++){
        expr += f[i].prime+'^{'+f[i].power+'}\\cdot';
    }

    expr += '\\underline{'+f[l-1].prime+'}^{'+f[l-1].power+'}\\\\';

    expr += '\\underline{'+f[l-1].prime+'}\\leq'+r;

    return expr;

}

smoothSequence.prototype.__defineGetter__('name',function(){
    var r = this.N+1;

    return r+"-smooth";
});

smoothSequence.prototype.Q = function (n){

    var r = this.N+1;
    var f = factors(n);
    var l = f.length;

    if(f[l-1].prime <= r){
        return true;
    }

    return false;
}
