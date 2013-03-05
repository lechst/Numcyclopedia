function happySequence() {
    NumbersSequence.call(this);
}

happySequence.prototype = new NumbersSequence();

happySequence.prototype.constructor = happySequence;

happySequence.prototype.name = 'happy';

happySequence.prototype.wiki = "http://mathworld.wolfram.com/Happy_number";
happySequence.prototype.wolfram = "http://mathworld.wolfram.com/HappyNumber.html";

happySequence.prototype.texExpressionForN = function(x,n){

    var m = this.getN(n);
    var d = digits(m);
    var l = d.length;
    var s = d.map(function(x){return x*x;}).reduce(function(a,b){return a+b;});
    var i = 0;

    var expr = '';

    while(s != 1){
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
    expr += d[l-1]+'^2=1';

    return expr;

}

happySequence.prototype.length = Infinity;

happySequence.prototype.Q = function (n){

    var s = digits(n).map(function(x){return x*x;}).reduce(function(a,b){return a+b;});

    while(s != 1){
        if(s==4){
            return false;
        }

        s = digits(s).map(function(x){return x*x;}).reduce(function(a,b){return a+b;});
    }

    return true;

}