function primaryPseudoperfectSequence() {
    NumbersSequence.call(this);
}

primaryPseudoperfectSequence.prototype = new NumbersSequence();

primaryPseudoperfectSequence.prototype.constructor = primaryPseudoperfectSequence;

primaryPseudoperfectSequence.prototype.name = 'primary pseudoperfect';

primaryPseudoperfectSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Primary_pseudoperfect_number";
primaryPseudoperfectSequence.prototype.wolfram = "http://mathworld.wolfram.com/PrimaryPseudoperfectNumber.html";

primaryPseudoperfectSequence.prototype.texExpression = "\\sum_{p|n}\\frac{1}{p}+\\frac{1}{N}=1";

primaryPseudoperfectSequence.prototype.texExpressionForN = function(x,n){

    var m = this.getN(n);
    var a = factors(m);
    var l = a.length;

    var expr = '';

    for(var i=0; i<l; i++){
        expr += '\\frac{1}{'+a[i].prime+'}+';
    }

    expr += '\\frac{1}{'+m+'}=1';

    return expr;

}

primaryPseudoperfectSequence.prototype.length = Infinity;

primaryPseudoperfectSequence.prototype.Q = function (n){

    var a = factors(n);
    var x = 0;

    for(i=0; i<a.length; i++){
        x += n/a[i].prime;
    }

    x += 1;

    if(x == n){
        return true;
    }

    return false;
}
