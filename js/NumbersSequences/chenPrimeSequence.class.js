function chenPrimeSequence() {
    NumbersSequence.call(this);
}

chenPrimeSequence.prototype = new NumbersSequence();

chenPrimeSequence.prototype.constructor = chenPrimeSequence;

chenPrimeSequence.prototype.name = 'Chen prime';

chenPrimeSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Chen_prime";
chenPrimeSequence.prototype.wolfram = "http://mathworld.wolfram.com/ChenPrime.html";

chenPrimeSequence.prototype.texExpression = "n=p & (p+2=q^2 | p+2=qr)";

chenPrimeSequence.prototype.texExpressionForN = function(x,n){

    var m = this.getN(n);
    var f = factors(m+2);

    var expr = m+'\\in\\mathbb{P}\\\\';

    if(fastPrimes.prototype.Q(m+2)){
        expr += m+'+2\\in \\mathbb{P}';
    } else {
        if(f.length == 1){
            expr += m+'+2='+f[0].prime+'\\cdot'+f[0].prime+'\\\\';
            expr += f[0].prime+'\\in \\mathbb{P}';
        } else {
            expr += m+'+2='+f[0].prime+'\\cdot'+f[1].prime+'\\\\';
            expr += f[0].prime+'\\in \\mathbb{P}'+'\\\\';
            expr += f[1].prime+'\\in \\mathbb{P}';
        }
    }

    return expr;

}

chenPrimeSequence.prototype.length = Infinity;

chenPrimeSequence.prototype.needs = ['semiprimeSequence'];

chenPrimeSequence.prototype.Q = function (n){

    if(fastPrimes.Q(n) && (fastPrimes.Q(n+2) || semiprimeSequence.prototype.Q(n+2))){
        return true;
    }

    return false;
}
