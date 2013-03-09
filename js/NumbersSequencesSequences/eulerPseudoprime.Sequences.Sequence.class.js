function eulerPseudoprimeSequencesSequence() {
    Sequence.call(this);
}

eulerPseudoprimeSequencesSequence.prototype = new Sequence();

eulerPseudoprimeSequencesSequence.prototype.constructor = eulerPseudoprimeSequencesSequence;

eulerPseudoprimeSequencesSequence.prototype.name = 'base-n Euler pseudoprimes';

eulerPseudoprimeSequencesSequence.prototype.length = Infinity;

eulerPseudoprimeSequencesSequence.prototype.getN = function(n){

    return new eulerPseudoprimeSequence(n);

};




function eulerPseudoprimeSequence(n) {

    NumbersSequence.call(this);

    if(!n) {
        throw new Error("n must be specified!")
    }
    this.final = true;
    this.N = n;

}

eulerPseudoprimeSequence.prototype = new NumbersSequence();

eulerPseudoprimeSequence.prototype.constructor = eulerPseudoprimeSequence;

eulerPseudoprimeSequence.prototype.length = Infinity;

eulerPseudoprimeSequence.prototype.memberOf = [eulerPseudoprimeSequencesSequence.prototype];

eulerPseudoprimeSequence.prototype.final = false;

eulerPseudoprimeSequence.prototype.__defineGetter__('name',function(){
    var r = this.N+1;

    return "base-"+r+" Euler pseudoprime";
});

eulerPseudoprimeSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Euler_pseudoprime";
eulerPseudoprimeSequence.prototype.wolfram = "http://mathworld.wolfram.com/EulerPseudoprime.html";

eulerPseudoprimeSequence.prototype.texExpressionForN = function(x,n){

    var r = this.N+1;
    var m = this.getN(n);

    var expr = '2\\nmid'+m+',\\, '+m+'\\notin \\mathbb{P}\\\\';

    expr += r+'^\\frac{'+m+'-1}{2}\\equiv\\pm 1\\, (mod\\, '+m+')';

    return expr;

}

eulerPseudoprimeSequence.prototype.Q = function (n){

    if(n==1){
        return false;
    }

    if((n%2)!=0 && !primesSequence.prototype.Q(n)){
        var r = this.N+1;
        var x = (Math.pow(r,(n-1)/2)%n);

        if(x==1 || x==(n-1)){
            return true;
        }
    }

    return false;
}