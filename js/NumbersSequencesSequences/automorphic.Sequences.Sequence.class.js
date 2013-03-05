function automorphicSequencesSequence() {
    Sequence.call(this);
}

automorphicSequencesSequence.prototype = new Sequence();

automorphicSequencesSequence.prototype.constructor = automorphicSequencesSequence;

automorphicSequencesSequence.prototype.name = 'n-automorphic numbers';

automorphicSequencesSequence.prototype.texExpression = "nk^2=x...y(k)";

automorphicSequencesSequence.prototype.length = Infinity;

automorphicSequencesSequence.prototype.getN = function(n){

    return new automorphicSequence(n);

};




function automorphicSequence(n) {

    NumbersSequence.call(this);

    if(!n) {
        throw new Error("n must be specified!")
    }
    this.final = true;
    this.N = n;

}

automorphicSequence.prototype = new NumbersSequence();

automorphicSequence.prototype.constructor = automorphicSequence;

automorphicSequence.prototype.length = Infinity;

automorphicSequence.prototype.memberOf = [automorphicSequencesSequence.prototype];

automorphicSequence.prototype.final = false;

automorphicSequence.prototype.texExpressionForN = function(x,n){

    var r = this.N;
    var k = this.getN(n);
    var m = r*k*k;

    var d = digits(k).length;

    if(k==1){

        var expr = r+'\\cdot\\underline{'+k+'}^2=\\underline{'+k+'}';

        return expr;

    } else {

        var expr = r+'\\cdot\\underline{'+k+'}^2='+(m-k)/Math.pow(10,d)+'\\underline{'+k+'}';

        return expr;

    }

}

automorphicSequence.prototype.__defineGetter__('name',function(){
    var r = this.N;

    return r+"-automorphic";
});

automorphicSequence.prototype.Q = function (n){

    var r = this.N;
    var m = r*n*n;

    var d = digits(n).length;

    var x = (m-n)/Math.pow(10,d);

    if(x == Math.round(x)){
        return true;
    }

    return false;
}
