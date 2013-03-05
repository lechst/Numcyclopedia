function narcissisticSequence() {
    NumbersSequence.call(this);
}

narcissisticSequence.prototype = new NumbersSequence();

narcissisticSequence.prototype.constructor = narcissisticSequence;

narcissisticSequence.prototype.name = 'narcissistic';

narcissisticSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Narcissistic_number";
narcissisticSequence.prototype.wolfram = "http://mathworld.wolfram.com/NarcissisticNumber.html";

narcissisticSequence.prototype.texExpression = "\\underbrace{xy...z}_d=x^d+y^d+...+z^d";

narcissisticSequence.prototype.texExpressionForN = function(x,n){

    var m = this.getN(n);
    var d = digits(m);
    var l = d.length;

    var expr = '\\underbrace{'+m+'}_{'+l+'}=';

    for(var i=0; i<l-1; i++){
        expr += d[i]+'^{'+l+'}+';
    }

    expr += d[l-1]+'^{'+l+'}';

    return expr;

}

narcissisticSequence.prototype.length = Infinity;

narcissisticSequence.prototype.Q = function (n){

    var d = digits(n);
    var l = d.length;
    var x = 0;

    for(var i=0; i<l; i++){
        x += Math.pow(d[i],l);
    }

    if(x == n){
        return true;
    }

    return false;
}