function harmonicDivisorSequence() {
    NumbersSequence.call(this);
}

harmonicDivisorSequence.prototype = new NumbersSequence();

harmonicDivisorSequence.prototype.constructor = harmonicDivisorSequence;

harmonicDivisorSequence.prototype.name = 'harmonic divisor';

harmonicDivisorSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Harmonic_divisor_number";
harmonicDivisorSequence.prototype.wolfram = "http://mathworld.wolfram.com/HarmonicDivisorNumber.html";

harmonicDivisorSequence.prototype.texExpression = "\\frac{nd(n)}{\sigma(n)}\\in \\mathbb{N}";

harmonicDivisorSequence.prototype.length = Infinity;

harmonicDivisorSequence.prototype.Q = function (n){

    var d = divisorsN(n);
    var s = divisorFunction(n);

    var x = n*d/s;
    var y = Math.round(x);

    if(x == y){
        return true;
    }

    return false;
}
