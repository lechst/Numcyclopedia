function highlyCompositeSequence() {
    NumbersSequence.call(this);
}

highlyCompositeSequence.prototype = new NumbersSequence();

highlyCompositeSequence.prototype.constructor = highlyCompositeSequence;

highlyCompositeSequence.prototype.name = 'highly composite';

highlyCompositeSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Highly_composite_number";
highlyCompositeSequence.prototype.wolfram = "http://mathworld.wolfram.com/HighlyCompositeNumber.html";
highlyCompositeSequence.prototype.oeis = "002182";

highlyCompositeSequence.prototype.length = Infinity;

highlyCompositeSequence.prototype.Q = function (n){

    var m = divisorsN(n);
    var k = 0;

    for(var i=1; i<n; i++){
        k = divisorsN(i);
        if(k >= m){
            return false;
        }
    }

    return true;
}