function euclidSequence() {
    NumbersSequence.call(this);
}

euclidSequence.prototype = new NumbersSequence();

euclidSequence.prototype.constructor = euclidSequence;

euclidSequence.prototype.name = 'Euclid';

euclidSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Euclid_number";
euclidSequence.prototype.wolfram = "http://mathworld.wolfram.com/EuclidNumber.html";
euclidSequence.prototype.oeis = "006862";

euclidSequence.prototype.texExpression = "E_n=1+\\prod_{i=1}^{n}p_i";

euclidSequence.prototype.texExpressionForN = function(x,n){

    var m = this.getN(n);

    var expr = m+'=1+';

    for(var i=1; i<n; i++){
        expr += fastPrimes.getN(i)+'\\cdot';
    }

    expr += fastPrimes.getN(n);

    return expr;

}

euclidSequence.prototype.length = Infinity;

euclidSequence.prototype.getN = function(n){

    var x = 1;

    for(var i=1; i<=n; i++){
        x *= fastPrimes.getN(i);
    }

    x += 1;

    return x;

}

euclidSequence.prototype.Q = function (n){

    if(n==1){
        return false;
    }

    var x = 1;
    var i = 1;

    while(x < n){
        x = euclidSequence.prototype.getN(i);
        i++;
    }

    if(x == n){
        return true;
    }

    return false;
}