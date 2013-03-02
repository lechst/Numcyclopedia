function lucasSequence() {
    NumbersSequence.call(this);
}

lucasSequence.prototype = new NumbersSequence();

lucasSequence.prototype.constructor = lucasSequence;

lucasSequence.prototype.name = 'Lucas';

lucasSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Lucas_number";
lucasSequence.prototype.wolfram = "http://mathworld.wolfram.com/LucasNumber.html";

lucasSequence.prototype.length = Infinity;

lucasSequence.prototype.texExpression = "L_{-1}=2,\\, L_{0}=1,\\, L_n=L_{n-1}+L_{n-2}";

lucasSequence.prototype.getN = function (n){

    var a = 2;
    var b = 1;

    var x = 0;

    for(var i=0; i<n; i++){
        x = a + b;
        a = b;
        b = x;
    }

    return x;
}

lucasSequence.prototype.Q = function (n){

    var phi = (1+Math.sqrt(5))/2;
    var x = Math.floor(Math.log(n+1/2)/Math.log(phi));
    var fx = Math.round(Math.pow(phi,x)-Math.pow(1-phi,x));

    if(fx == n){
        return true;
    }

    return false;
}