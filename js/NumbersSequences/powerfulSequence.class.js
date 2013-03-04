function powerfulSequence() {
    NumbersSequence.call(this);
}

powerfulSequence.prototype = new NumbersSequence();

powerfulSequence.prototype.constructor = powerfulSequence;

powerfulSequence.prototype.name = 'powerful';

powerfulSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Powerful_number";
powerfulSequence.prototype.wolfram = "http://mathworld.wolfram.com/PowerfulNumber.html";

powerfulSequence.prototype.texExpression = "p|n \\Rightarrow p^2|n";

powerfulSequence.prototype.length = Infinity;

powerfulSequence.prototype.Q = function (n){

    var a = primeSingature(n);

    for(var i=0; i< a.length; i++){
        if(a[i] == 1){
            return false;
        }
    }

    return true;
}
