function rightTruncatablePrimeSequence() {
    NumbersSequence.call(this);
}

rightTruncatablePrimeSequence.prototype = new NumbersSequence();

rightTruncatablePrimeSequence.prototype.constructor = rightTruncatablePrimeSequence;

rightTruncatablePrimeSequence.prototype.name = 'right-truncatable prime';

rightTruncatablePrimeSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Truncatable_prime";
rightTruncatablePrimeSequence.prototype.wolfram = "http://mathworld.wolfram.com/TruncatablePrime.html";

rightTruncatablePrimeSequence.prototype.texExpressionForN = function(x,n){

    var m = this.getN(n);
    var d = digits(m);
    var l = d.length;

    if(m < 10){
        return m+'\\in \\mathbb{P}';
    }

    var expr = m+',\\,';

    for(var i=1; i<l-1; i++){
        d.pop();
        l = d.length;
        var x = d.reduce(function(a, b) {return a + '' + b;});
        expr += x+',\\,';
    }

    expr += d[0]+'\\, \\in \\mathbb{P}';

    return expr;

}

rightTruncatablePrimeSequence.prototype.length = Infinity;

rightTruncatablePrimeSequence.prototype.Q = function (n){

    var d = digits(n);
    var l = d.length;

    if(primesSequence.prototype.Q(n)){
        if(n < 10){
            return true;
        }

        for(var i=0; i<l-1; i++){
            d.pop();
            var x = d.reduce(function(a, b) {return a + '' + b;});

            if(!primesSequence.prototype.Q(x)){
                return false;
            }
        }

        return true;
    }

    return false;
}
