function prothSequence() {
    NumbersSequence.call(this);
}

prothSequence.prototype = new NumbersSequence();

prothSequence.prototype.constructor = prothSequence;

prothSequence.prototype.name = 'Proth';

prothSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Proth_number";
prothSequence.prototype.wolfram = "http://mathworld.wolfram.com/ProthNumber.html";

prothSequence.prototype.texExpression = "k\\cdot 2^n+1, k<2^n";

prothSequence.prototype.texExpressionForN = function(x,n){

    var m = this.getN(n);
    var f = factors(m-1);

    var k = (m-1)/Math.pow(2,f[0].power);

    var expr = m+'=\\underline{'+k+'}\\cdot2^'+f[0].power+'+1\\\\';

    expr += '\\underline{'+k+'}<2^'+f[0].power;

    return expr;

}

prothSequence.prototype.length = Infinity;

prothSequence.prototype.Q = function (n){

    if(n>2){
        var f = factors(n-1);

        if(f[0].prime == 2){
            var x = Math.pow(2,f[0].power);
            var k = (n-1)/x;
            if(k < x){
                return true;
            }
        }
    }

    return false;
}
