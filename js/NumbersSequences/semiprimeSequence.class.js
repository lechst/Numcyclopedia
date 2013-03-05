function semiprimeSequence() {
    NumbersSequence.call(this);
}

semiprimeSequence.prototype = new NumbersSequence();

semiprimeSequence.prototype.constructor = semiprimeSequence;

semiprimeSequence.prototype.name = 'semiprime';

semiprimeSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Semiprime";
semiprimeSequence.prototype.wolfram = "http://mathworld.wolfram.com/Semiprime.html";

semiprimeSequence.prototype.texExpression = "n=pq || n=p^2";

semiprimeSequence.prototype.texExpressionForN = function(x,n){

    var m = this.getN(n);
    var f = factors(m);

    var expr = '';

    if(f.length == 1){
        expr += m+'='+f[0].prime+'\\cdot'+f[0].prime;
    } else {
        expr += m+'='+f[0].prime+'\\cdot'+f[1].prime;
    }

    return expr;

}

semiprimeSequence.prototype.length = Infinity;

semiprimeSequence.prototype.Q = function (n){

    var f = factors(n);
    var l = f.length;

    if(l < 3){
        if(l==1 && f[0].power==2){
            return true;
        } else if(l==2 && f[0].power==1 && f[1].power==1){
            return true;
        }
    }

    return false;
}
