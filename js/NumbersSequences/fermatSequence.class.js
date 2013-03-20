function fermatSequence() {
    NumbersSequence.call(this);
}

fermatSequence.prototype = new NumbersSequence();

fermatSequence.prototype.constructor = fermatSequence;

fermatSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Fermat_number";
fermatSequence.prototype.wolfram = "http://mathworld.wolfram.com/FermatNumber.html";
fermatSequence.prototype.oeis = "000215";

fermatSequence.prototype.name = 'Fermat';

fermatSequence.prototype.length = Infinity;

fermatSequence.prototype.texExpression = "2^n+1";

fermatSequence.prototype.getN = function (n){

    var x = Math.pow(2,n)+1;

    return x;

}

fermatSequence.prototype.Q = function (n){

    var x = 1;
    var i = 0;

    while(x < n){
        x = Math.pow(2,n)+1;
        i++;
    }

    if(x == n){
        return true;
    }

    return false;
}
