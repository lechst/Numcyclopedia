function eulerJacobiPseudoprimeSequencesSequence() {
    Sequence.call(this);
}

eulerJacobiPseudoprimeSequencesSequence.prototype = new Sequence();

eulerJacobiPseudoprimeSequencesSequence.prototype.constructor = eulerJacobiPseudoprimeSequencesSequence;

eulerJacobiPseudoprimeSequencesSequence.prototype.name = 'base-n Euler-Jacobi pseudoprimes';

eulerJacobiPseudoprimeSequencesSequence.prototype.length = Infinity;

eulerJacobiPseudoprimeSequencesSequence.prototype.getN = function(n){

    return new eulerJacobiPseudoprimeSequence(n);

};




function eulerJacobiPseudoprimeSequence(n) {

    NumbersSequence.call(this);

    if(!n) {
        throw new Error("n must be specified!")
    }
    this.final = true;
    this.N = n;

}

eulerJacobiPseudoprimeSequence.prototype = new NumbersSequence();

eulerJacobiPseudoprimeSequence.prototype.constructor = eulerJacobiPseudoprimeSequence;

eulerJacobiPseudoprimeSequence.prototype.length = Infinity;

eulerJacobiPseudoprimeSequence.prototype.memberOf = [eulerJacobiPseudoprimeSequencesSequence.prototype];

eulerJacobiPseudoprimeSequence.prototype.final = false;

eulerJacobiPseudoprimeSequence.prototype.__defineGetter__('name',function(){
    var r = this.N+1;

    return "base-"+r+" Euler-Jacobi pseudoprime";
});

eulerJacobiPseudoprimeSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Euler-Jacobi_pseudoprime";
eulerJacobiPseudoprimeSequence.prototype.wolfram = "http://mathworld.wolfram.com/Euler-JacobiPseudoprime.html";

eulerJacobiPseudoprimeSequence.prototype.texExpressionForN = function(x,n){

    var r = this.N+1;
    var m = this.getN(n);

    var expr = '2\\nmid'+m+',\\, '+m+'\\notin \\mathbb{P}\\\\';

    expr += '('+r+',\\,'+m+')=1\\\\';

    expr += '\\left( \\frac{'+r+'}{'+m+'}\\right)_{Jacobi}\\equiv'+r+'^\\frac{'+m+'-1}{2}\\, (mod\\, '+m+')';

    return expr;

}

eulerJacobiPseudoprimeSequence.prototype.Q = function (n){

    if(n==1){
        return false;
    }

    var r = this.N + 1;

    if((n%2)!=0 && !primesSequence.prototype.Q(n) && checkIfCoprime(r,n)){

        var x = (Math.pow(r,(n-1)/2)%n);

        var y = jacobiSymbol(r,n)%n;

        if(x==y){
            return true;
        }
    }

    return false;
}