function multiplicativePerfectSequence() {
    NumbersSequence.call(this);
}

multiplicativePerfectSequence.prototype = new NumbersSequence();

multiplicativePerfectSequence.prototype.constructor = multiplicativePerfectSequence;

multiplicativePerfectSequence.prototype.name = 'multiplicative perfect';

multiplicativePerfectSequence.prototype.wolfram = "http://mathworld.wolfram.com/MultiplicativePerfectNumber.html";
multiplicativePerfectSequence.prototype.oeis = "007422";

multiplicativePerfectSequence.prototype.texExpression = "d(n)=4";

multiplicativePerfectSequence.prototype.texExpressionForN = function(x,n){

    var m = this.getN(n);
    var a = divisors(m);
    a.pop();
    var l = a.length;

    var expr = '';

    for(var i=1; i<l-1; i++){
        expr += a[i]+ '\\times';
    }

    expr += a[l-1] + '=' + m;

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
