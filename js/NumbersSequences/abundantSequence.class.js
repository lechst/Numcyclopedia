function abundantSequence() {
    NumbersSequence.call(this);
}

abundantSequence.prototype = new NumbersSequence();

abundantSequence.prototype.constructor = abundantSequence;

abundantSequence.prototype.name = 'abundant';

abundantSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Abundant_number";
abundantSequence.prototype.wolfram = "http://mathworld.wolfram.com/AbundantNumber.html";

abundantSequence.prototype.texExpression = "\\sigma(n)-n>n";

abundantSequence.prototype.texExpressionForN = function(x,n){

    var m = this.getN(n);
    var s = divisors(m).reduce(function(a,b){return a+b;});

    var expr = '\\sigma('+m+')='+s+'\\\\';

    expr += '\\sigma('+m+')-'+m+'>'+m;

    return expr;

}

abundantSequence.prototype.length = Infinity;

abundantSequence.prototype.Q = function (n){

    var s = divisors(n).reduce(function(a,b){return a+b;});

    if(s > 2*n){
        return true;
    }

    return false;
}
