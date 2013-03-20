function weakVeryprimeSequence() {
    NumbersSequence.call(this);
}

weakVeryprimeSequence.prototype = new NumbersSequence();

weakVeryprimeSequence.prototype.constructor = weakVeryprimeSequence;

weakVeryprimeSequence.prototype.name = 'weak veryprime';

weakVeryprimeSequence.prototype.wolfram = "http://mathworld.wolfram.com/Veryprime.html";
weakVeryprimeSequence.prototype.oeis = "050264";

weakVeryprimeSequence.prototype.texExpressionForN = function(x,n){

    var m = this.getN(n);

    var expr = '\\forall\\, p\\leq\\sqrt{'+m+'}:\\\\';

    expr += '|2['+m+'\\, (mod\\, p)]-p|\\leq\\frac{p}{2}';

    return expr;

}

weakVeryprimeSequence.prototype.length = Infinity;

weakVeryprimeSequence.prototype.Q = function (n){

    if(n == 1){
        return false;
    }

    var x = Math.sqrt(n);

    for(var i=1; i<=x; i++){
        if(primesSequence.prototype.Q(i)){
            if(Math.abs(2*(n%i)-i) > (i/2)){
                return false;
            }
        }
    }

    return true;
}

