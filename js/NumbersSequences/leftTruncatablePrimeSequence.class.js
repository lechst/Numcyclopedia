function leftTruncatablePrimeSequence() {
    NumbersSequence.call(this);
}

leftTruncatablePrimeSequence.prototype = new NumbersSequence();

leftTruncatablePrimeSequence.prototype.constructor = leftTruncatablePrimeSequence;

leftTruncatablePrimeSequence.prototype.name = 'left-truncatable prime';

leftTruncatablePrimeSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Truncatable_prime";
leftTruncatablePrimeSequence.prototype.wolfram = "http://mathworld.wolfram.com/TruncatablePrime.html";

leftTruncatablePrimeSequence.prototype.texExpressionForN = function(x,n){

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

    expr += d[l-1]+'\\, \\in \\mathbb{P}';

    return expr;

}

leftTruncatablePrimeSequence.prototype.length = Infinity;

leftTruncatablePrimeSequence.prototype.Q = function (n){

    var d = digits(n);
    var l = d.length;

    if(primesSequence.prototype.Q(n)){
        if(n < 10){
            return true;
        }

        for(var i=0; i<l-1; i++){
            d.shift();
            var x = d.reduce(function(a, b) {return a + '' + b;});

            if(!primesSequence.prototype.Q(x)){
                return false;
            }
        }

        return true;
    }

    return false;
}
