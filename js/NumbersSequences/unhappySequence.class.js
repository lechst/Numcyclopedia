function unhappySequence() {
    NumbersSequence.call(this);
}

unhappySequence.prototype = new NumbersSequence();

unhappySequence.prototype.constructor = unhappySequence;

unhappySequence.prototype.name = 'unhappy';

unhappySequence.prototype.wolfram = "http://mathworld.wolfram.com/UnhappyNumber.html";
unhappySequence.prototype.oeis = "031177";

unhappySequence.prototype.texExpressionForN = function(x,n){

    var m = this.getN(n);
    var d = digits(m);
    var l = d.length;
    var s = d.map(function(x){return x*x;}).reduce(function(a,b){return a+b;});
    var i = 0;

    var expr = '';

    while(s != 4){
        expr += 's_'+i+'('+m+')=';
        for(var j=0; j<l-1; j++){
            expr += d[j]+'^2+';
        }
        expr += d[l-1]+'^2\\\\';

        m = s;
        d = digits(m);
        l = d.length;
        s = d.map(function(x){return x*x;}).reduce(function(a,b){return a+b;});
        i++;
    }

    expr += 's_'+i+'('+m+')=';
    for(var j=0; j<l-1; j++){
        expr += d[j]+'^2+';
    }
    expr += d[l-1]+'^2=4';

    return expr;

}

unhappySequence.prototype.length = Infinity;

unhappySequence.prototype.Q = function (n){

    var s = digits(n).map(function(x){return x*x;}).reduce(function(a,b){return a+b;});

    while(s != 4){
        if(s==1){
            return false;
        }

        s = digits(s).map(function(x){return x*x;}).reduce(function(a,b){return a+b;});
    }

    return true;

}
