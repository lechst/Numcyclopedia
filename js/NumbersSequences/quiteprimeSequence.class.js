function quiteprimeSequence() {
    NumbersSequence.call(this);
}

quiteprimeSequence.prototype = new NumbersSequence();

quiteprimeSequence.prototype.constructor = quiteprimeSequence;

quiteprimeSequence.prototype.name = 'quiteprime';

quiteprimeSequence.prototype.wolfram = "http://mathworld.wolfram.com/Quiteprime.html";

quiteprimeSequence.prototype.texExpressionForN = function(x,n){

    var m = this.getN(n);

    var expr = '\\forall\\, p\\leq\\sqrt{'+m+'}:\\\\';

    expr += '|2['+m+'\\, (mod\\, p)]-p|\\leq p+1-\\sqrt{p}';

    return expr;

}

quiteprimeSequence.prototype.length = Infinity;

quiteprimeSequence.prototype.Q = function (n){

    if(n == 1){
        return false;
    }

    var x = Math.sqrt(n);

    for(var i=1; i<=x; i++){
        if(primesSequence.prototype.Q(i)){
            if(Math.abs(2*(n%i)-i) > (i+1-Math.sqrt(i))){
                return false;
            }
        }
    }

    return true;
}
