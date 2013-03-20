function strongVeryprimeSequence() {
    NumbersSequence.call(this);
}

strongVeryprimeSequence.prototype = new NumbersSequence();

strongVeryprimeSequence.prototype.constructor = strongVeryprimeSequence;

strongVeryprimeSequence.prototype.name = 'strong veryprime';

strongVeryprimeSequence.prototype.wolfram = "http://mathworld.wolfram.com/Veryprime.html";

strongVeryprimeSequence.prototype.texExpressionForN = function(x,n){

    var m = this.getN(n);

    var expr = '\\forall\\, p\\leq\\sqrt{'+m+'}:\\\\';

    expr += '|2['+m+'\\, (mod\\, p)]-p|\\leq\\sqrt{p}';

    return expr;

}

strongVeryprimeSequence.prototype.length = Infinity;

strongVeryprimeSequence.prototype.Q = function (n){

    if(n == 1){
        return false;
    }

    var x = Math.sqrt(n);

    for(var i=1; i<=x; i++){
        if(primesSequence.prototype.Q(i)){
            if(Math.abs(2*(n%i)-i) > Math.sqrt(i)){
                return false;
            }
        }
    }

    return true;
}

