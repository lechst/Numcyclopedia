function kaprekarSequence() {
    NumbersSequence.call(this);
}

kaprekarSequence.prototype = new NumbersSequence();

kaprekarSequence.prototype.constructor = kaprekarSequence;

kaprekarSequence.prototype.name = 'Kaprekar';

kaprekarSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Kaprekar_number";
kaprekarSequence.prototype.wolfram = "http://mathworld.wolfram.com/KaprekarNumber.html";

kaprekarSequence.prototype.texExpressionForN = function(x,n){

    var m = this.getN(n);
    var d = digits(m).length;
    var a = digits(m*m);
    var l = a.length;
    var x = 0;
    var y = 0;

    for(var i=0; i<d; i++){
        y += a[l-1-i]*Math.pow(10,i);
    }

    x = (m*m-y)/Math.pow(10,d);

    var expr = m+'^2='+m*m+'\\\\'+x+'+'+y+'='+m;

    return expr;

}

kaprekarSequence.prototype.length = Infinity;

kaprekarSequence.prototype.Q = function (n){

    var m = n;
    var d = digits(m).length;
    var a = digits(m*m);
    var l = a.length;
    var x = 0;
    var y = 0;

    for(var i=0; i<d; i++){
        y += a[l-1-i]*Math.pow(10,i);
    }

    x = (m*m-y)/Math.pow(10,d);

    if((x+y) == m){
        return true;
    }

    return false;
}
