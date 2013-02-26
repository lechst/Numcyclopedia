function pentatopeSequence() {
    NumbersSequence.call(this);
}

pentatopeSequence.prototype = new NumbersSequence();

pentatopeSequence.prototype.constructor = pentatopeSequence;

pentatopeSequence.prototype.name = 'pentatope';

pentatopeSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Pentatope_number";
pentatopeSequence.prototype.wolfram = "http://mathworld.wolfram.com/PentatopeNumber.html";

pentatopeSequence.prototype.length = Infinity;

pentatopeSequence.prototype.Q = function (n){

    var x = Math.round((Math.sqrt(5+4*Math.sqrt(1+24*n))-3)/2);

    if(x*(x+1)*(x+2)*(x+3)/24 == n){
        return true;
    }

    return false;
}

