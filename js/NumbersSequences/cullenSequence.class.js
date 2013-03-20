function cullenSequence() {
    NumbersSequence.call(this);
}

cullenSequence.prototype = new NumbersSequence();

cullenSequence.prototype.constructor = cullenSequence;

cullenSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Cullen_number";
cullenSequence.prototype.wolfram = "http://mathworld.wolfram.com/CullenNumber.html";
cullenSequence.prototype.oeis = "002064";

cullenSequence.prototype.name = 'Cullen';

cullenSequence.prototype.length = Infinity;

cullenSequence.prototype.texExpression = "n2^n+1";

cullenSequence.prototype.getN = function (n){

    var x = n*Math.pow(2,n)+1;

    return x;

}

cullenSequence.prototype.Q = function (n){

    var x = 3;
    var i = 0;

    while(x < n){
        x = i*Math.pow(2,i)+1;
        i++;
    }

    if(x == n){
        return true;
    }

    return false;
}
