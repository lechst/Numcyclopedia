function multiplicativePerfectSequence() {
    NumbersSequence.call(this);
}

multiplicativePerfectSequence.prototype = new NumbersSequence();

multiplicativePerfectSequence.prototype.constructor = multiplicativePerfectSequence;

multiplicativePerfectSequence.prototype.name = 'multiplicative perfect';

multiplicativePerfectSequence.prototype.wolfram = "http://mathworld.wolfram.com/MultiplicativePerfectNumber.html";

multiplicativePerfectSequence.prototype.texExpression = "d(n)=4";

multiplicativePerfectSequence.prototype.texExpressionForN = function(x,n){

    var m = this.getN(n);
    var a = divisors(m);
    var l = a.length;

    var expr = '';

    for(var i=0; i<l-1; i++){
        expr += a[i]+ '\\times';
    }

    expr += a[l-1] + '=' + m + '^2';

    return expr;

}

multiplicativePerfectSequence.prototype.length = Infinity;

multiplicativePerfectSequence.prototype.Q = function (n){

    var d = divisorsN(n);

    if(d == 4){
        return true;
    }

    return false;
}
