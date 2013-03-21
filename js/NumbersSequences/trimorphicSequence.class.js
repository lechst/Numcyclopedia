function trimorphicSequence() {
    NumbersSequence.call(this);
}

trimorphicSequence.prototype = new NumbersSequence();

trimorphicSequence.prototype.constructor = trimorphicSequence;

trimorphicSequence.prototype.name = 'trimorphic';

trimorphicSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Trimorphic_number";
trimorphicSequence.prototype.wolfram = "http://mathworld.wolfram.com/TrimorphicNumber.html";
trimorphicSequence.prototype.oeis = "033819";

trimorphicSequence.prototype.texExpression = "(x...y)^3=a...bx...y";

trimorphicSequence.prototype.texExpressionForN = function(x,n){

    var k = this.getN(n);
    var m = k*k*k;

    var d = digits(k).length;

    if(k==1){

        var expr = '\\underline{'+k+'}^3=\\underline{'+k+'}';

        return expr;

    } else {

        var expr = '\\underline{'+k+'}^3='+(m-k)/Math.pow(10,d)+'\\underline{'+k+'}';

        return expr;

    }

}

trimorphicSequence.prototype.length = Infinity;

trimorphicSequence.prototype.Q = function (n){

    var m = n*n*n;

    var d = digits(n).length;

    var x = (m-n)/Math.pow(10,d);

    if(x == Math.round(x)){
        return true;
    }

    return false;
}
