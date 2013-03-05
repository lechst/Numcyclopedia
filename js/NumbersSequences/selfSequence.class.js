function selfSequence() {
    NumbersSequence.call(this);
}

selfSequence.prototype = new NumbersSequence();

selfSequence.prototype.constructor = selfSequence;

selfSequence.prototype.name = 'self';

selfSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Self_number";
selfSequence.prototype.wolfram = "http://mathworld.wolfram.com/SelfNumber.html";

selfSequence.prototype.texExpression = "\\nexists k=xy...z:\\\\ n=k+x+y+...+z";

selfSequence.prototype.texExpressionForN = function(x,n){

    var m = this.getN(n);

    var expr = "\\nexists k=xy...z:\\\\ "+m+"=k+x+y+...+z";

    return expr;

}

selfSequence.prototype.length = Infinity;

selfSequence.prototype.Q = function (n){

    for(var i=1; i<n; i++){

        var s = sumOfDigits(i);

        if((i+s) == n){
            return false;
        }

    }

    return true;
}
