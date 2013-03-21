function cubanPrimeSequence() {
    NumbersSequence.call(this);
}

cubanPrimeSequence.prototype = new NumbersSequence();

cubanPrimeSequence.prototype.constructor = cubanPrimeSequence;

cubanPrimeSequence.prototype.name = 'cuban prime';

cubanPrimeSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Cuban_prime";
cubanPrimeSequence.prototype.wolfram = "http://mathworld.wolfram.com/CubanPrime.html";
cubanPrimeSequence.prototype.oeis = "002407";

cubanPrimeSequence.prototype.texExpression = "n=p & n=k^3-(k-1)^3";

cubanPrimeSequence.prototype.texExpressionForN = function(x,n){

    var m = this.getN(n);
    var x = Math.round((3+Math.sqrt(3*(4*m-1)))/6);

    var expr = m+'\\in\\mathbb{P}\\\\';

    expr += m+'='+x+'^3-'+'('+x+'-1)^3';

    return expr;

}

cubanPrimeSequence.prototype.length = Infinity;

cubanPrimeSequence.prototype.Q = function (n){

    if(fastPrimes.Q(n)){
        var x = Math.round((3+Math.sqrt(3*(4*n-1)))/6);

        if((x*x*x-(x-1)*(x-1)*(x-1))==n){
            return true;
        }
    }

    return false;
}
