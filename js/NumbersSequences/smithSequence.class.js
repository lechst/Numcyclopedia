function smithSequence() {
    NumbersSequence.call(this);
}

smithSequence.prototype = new NumbersSequence();

smithSequence.prototype.constructor = smithSequence;

smithSequence.prototype.name = 'Smith';

smithSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Smith_number";
smithSequence.prototype.wolfram = "http://mathworld.wolfram.com/SmithNumber.html";

smithSequence.prototype.texExpressionForN = function(x,n){

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
        if(lc == 1){
            expr += a[i].power+'\\cdot'+c[0]+'+';
        } else {
            expr += a[i].power+'\\cdot(';
            for(var j=0; j<lc-1; j++){
                expr += c[j]+'+';
            }
            expr += c[lc-1]+')+';
        }
    }

    var c = digits(a[la-1].prime);
    var lc = c.length;
    if(lc == 1){
        expr += a[la-1].power+'\\cdot'+c[0];
    } else {
        expr += a[la-1].power+'\\cdot(';
        for(var j=0; j<lc-1; j++){
            expr += c[j]+'+';
        }
        expr += c[lc-1]+')';
    }

    return expr;

}

smithSequence.prototype.length = Infinity;

smithSequence.prototype.Q = function (n){

    var sn = sumOfDigits(n);
    var s = 0;
    var a = factors(n);
    var l = a.length;

    if((l == 1) && (a[0].power == 1)){
        return false;
    }

    for(var i=0; i<l; i++){
        s += a[i].power*sumOfDigits(a[i].prime);
    }

    if(sn == s){
        return true;
    }

    return false;
}

