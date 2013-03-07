function fermatPseudoprimeSequencesSequence() {
    Sequence.call(this);
}

fermatPseudoprimeSequencesSequence.prototype = new Sequence();

fermatPseudoprimeSequencesSequence.prototype.constructor = fermatPseudoprimeSequencesSequence;

fermatPseudoprimeSequencesSequence.prototype.name = 'base-n Fermat pseudoprimes';

fermatPseudoprimeSequencesSequence.prototype.length = Infinity;

fermatPseudoprimeSequencesSequence.prototype.getN = function(n){

    return new fermatPseudoprimeSequence(n);

};




function fermatPseudoprimeSequence(n) {

    NumbersSequence.call(this);

    if(!n) {
        throw new Error("n must be specified!")
    }
    this.final = true;
    this.N = n;

}

fermatPseudoprimeSequence.prototype = new NumbersSequence();

fermatPseudoprimeSequence.prototype.constructor = fermatPseudoprimeSequence;

fermatPseudoprimeSequence.prototype.length = Infinity;

fermatPseudoprimeSequence.prototype.memberOf = [fermatPseudoprimeSequencesSequence.prototype];

fermatPseudoprimeSequence.prototype.final = false;

fermatPseudoprimeSequence.prototype.__defineGetter__('name',function(){
    var r = this.N+1;

    return "base-"+r+" Fermat pseudoprime";
});

fermatPseudoprimeSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Fermat_pseudoprime";
fermatPseudoprimeSequence.prototype.wolfram = "http://mathworld.wolfram.com/FermatPseudoprime.html";

fermatPseudoprimeSequence.prototype.texExpressionForN = function(x,n){

    var r = this.N+1;
    var m = this.getN(n);

    var expr = m+'\\notin \\mathbb{P}\\\\';

    expr += r+'^{'+m+'-1}\\equiv 1\\, (mod\\, '+m+')';

    return expr;

}

fermatPseudoprimeSequence.prototype.Q = function (n){

    if(n==1){
        return false;
    }

    if(!primesSequence.prototype.Q(n)){
        var r = this.N+1;
        var x = (Math.pow(r,n-1)%n);

        if(x==1){
            return true;
        }
    }

    return false;
}