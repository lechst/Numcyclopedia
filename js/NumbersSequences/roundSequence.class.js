function roundSequence() {
    NumbersSequence.call(this);
}

roundSequence.prototype = new NumbersSequence();

roundSequence.prototype.constructor = roundSequence;

roundSequence.prototype.name = 'round';

roundSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Round_number";
roundSequence.prototype.wolfram = "http://mathworld.wolfram.com/RoundNumber.html";

roundSequence.prototype.texExpression = "\\nexists p: p|N, p>\\sqrt{N}";

roundSequence.prototype.texExpressionForN = function(x,n){

    var m = this.getN(n);

    var expr = '\\nexists p: p|'+m+', p>\\sqrt{'+m+'}';

    return expr;

}

roundSequence.prototype.length = Infinity;

roundSequence.prototype.Q = function (n){

    var a = factors(n);
    var x = Math.sqrt(n);

    for(i=0; i<a.length; i++){
        if(a[i].prime > x){
            return false;
        }
    }

    return true;
}

