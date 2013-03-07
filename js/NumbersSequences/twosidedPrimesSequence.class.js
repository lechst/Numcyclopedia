function twosidedPrimesSequence() {
    NumbersSequence.call(this);
}

twosidedPrimesSequence.prototype = new NumbersSequence();

twosidedPrimesSequence.prototype.constructor = twosidedPrimesSequence;

twosidedPrimesSequence.prototype.name = 'two-sided prime';

twosidedPrimesSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Truncatable_prime";
twosidedPrimesSequence.prototype.wolfram = "http://mathworld.wolfram.com/TruncatablePrime.html";

twosidedPrimesSequence.prototype.texExpressionForN = function(x,n){

    var m = this.getN(n);
    var d = digits(m);
    var l = d.length;

    if(m < 10){
        return m+'\\in \\mathbb{P}';
    }

    var expr = m+',\\,';

    for(var i=1; i<l-1; i++){
        d.shift();
        l = d.length;
        var x = d.reduce(function(a, b) {return a + '' + b;});
        expr += x+',\\,';
    }

    expr += d[l-1]+'\\, \\in \\mathbb{P}\\\\';

    d = digits(m);
    l = d.length;

    expr += m+',\\,';

    for(var i=1; i<l-1; i++){
        d.pop();
        l = d.length;
        var x = d.reduce(function(a, b) {return a + '' + b;});
        expr += x+',\\,';
    }

    expr += d[0]+'\\, \\in \\mathbb{P}';

    return expr;

}

twosidedPrimesSequence.prototype.length = Infinity;

twosidedPrimesSequence.prototype.Q = function (n){

    if(leftTruncatablePrimeSequence.prototype.Q(n) && rightTruncatablePrimeSequence.prototype.Q(n)){
        return true;
    }

    return false;
}
