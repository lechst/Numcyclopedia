function harshadSequence() {
    NumbersSequence.call(this);
}

harshadSequence.prototype = new NumbersSequence();

harshadSequence.prototype.constructor = harshadSequence;

harshadSequence.prototype.name = 'Harshad';

harshadSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Harshad_number";
harshadSequence.prototype.wolfram = "http://mathworld.wolfram.com/HarshadNumber.html";

harshadSequence.prototype.texExpression = "(x+y+...+z)|xy...z";

harshadSequence.prototype.texExpressionForN = function(x,n){

    var m = this.getN(n);
    var a = digits(m);
    var l = a.length;

    var expr = '(';

    for(var i=0; i<l-1; i++){
        expr += a[i]+ '+';
    }

    expr += a[l-1] + ')|' + m;

    return expr;

}

harshadSequence.prototype.length = Infinity;

harshadSequence.prototype.Q = function (n){

    var s = sumOfDigits(n);

    if((n%s) == 0){
        return true;
    }

    return false;
}