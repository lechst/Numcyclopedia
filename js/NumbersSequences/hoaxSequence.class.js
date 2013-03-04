function hoaxSequence() {
    NumbersSequence.call(this);
}

hoaxSequence.prototype = new NumbersSequence();

hoaxSequence.prototype.constructor = hoaxSequence;

hoaxSequence.prototype.name = 'Hoax';

hoaxSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Hoax_number";
hoaxSequence.prototype.wolfram = "http://mathworld.wolfram.com/HoaxNumber.html";

hoaxSequence.prototype.texExpressionForN = function(x,n){

    var m = this.getN(n);
    var a = factors(m);
    var la = a.length;
    var b = digits(m);
    var lb = b.length;
    var expr = m+'=';

    for(var i=0; i<la; i++){
        expr += a[i].prime+'^'+a[i].power;
    }

    expr += '\\\\';

    for(var i=0; i<lb-1; i++){
        expr += b[i]+'+';
    }

    expr += b[lb-1]+'=';

    for(var i=0; i<la-1; i++){
        var c = digits(a[i].prime);
        var lc = c.length;
        for(var j=0; j<lc; j++){
            expr += c[j]+'+';
        }
    }

    var c = digits(a[la-1].prime);
    var lc = c.length;
    for(var j=0; j<lc-1; j++){
        expr += c[j]+'+';
    }

    expr += c[lc-1];

    return expr;

}

hoaxSequence.prototype.length = Infinity;

hoaxSequence.prototype.Q = function (n){

    var sn = sumOfDigits(n);
    var s = 0;
    var a = factors(n);
    var l = a.length;

    if((l == 1) && (a[0].power == 1)){
        return false;
    }

    for(var i=0; i<l; i++){
        s += sumOfDigits(a[i].prime);
    }

    if(sn == s){
        return true;
    }

    return false;
}
