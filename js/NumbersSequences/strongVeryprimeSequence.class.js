function verystrongVeryprimeSequence() {
    NumbersSequence.call(this);
}

verystrongVeryprimeSequence.prototype = new NumbersSequence();

verystrongVeryprimeSequence.prototype.constructor = verystrongVeryprimeSequence;

verystrongVeryprimeSequence.prototype.name = 'strong veryprime';

verystrongVeryprimeSequence.prototype.wolfram = "http://mathworld.wolfram.com/Veryprime.html";

verystrongVeryprimeSequence.prototype.texExpressionForN = function(x,n){

    var m = this.getN(n);

    var expr = '\\forall\\, p\\leq\\sqrt{'+m+'}:\\\\';

    expr += '|2['+m+'\\, (mod\\, p)]-p|\\leq\\sqrt{p}';

    return expr;

}

verystrongVeryprimeSequence.prototype.length = Infinity;

verystrongVeryprimeSequence.prototype.Q = function (n){

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

