function wastefulSequence() {
    NumbersSequence.call(this);
}

wastefulSequence.prototype = new NumbersSequence();

wastefulSequence.prototype.constructor = wastefulSequence;

wastefulSequence.prototype.name = 'wasteful';

wastefulSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Extravagant_number";
wastefulSequence.prototype.wolfram = "http://mathworld.wolfram.com/WastefulNumber.html";
wastefulSequence.prototype.oeis = "046760";

wastefulSequence.prototype.texExpressionForN = function(x,n){

    var m = this.getN(n);
    var d = digits(m).length;
    var f = factors(m);
    var l = f.length;
    var a = [];

    var expr = m+'=';

    for(var i=0; i<l-1; i++){
        var x = f[i].prime;
        var y = f[i].power;
        a.push(digits(x).length);
        if(y != 1){
            a.push(digits(y).length);
            expr += x+'^{'+y+'}\\cdot';
        } else {
            expr += x+'\\cdot';
        }
    }

    var x = f[l-1].prime;
    var y = f[l-1].power;
    a.push(digits(x).length);
    if(y != 1){
        a.push(digits(y).length);
        expr += x+'^{'+y+'}\\\\';
    } else {
        expr += x+'\\\\';
    }

    expr += d+'<';

    var la = a.length;

    for(var i=0; i<la-1; i++){
        expr += a[i]+'+';
    }

    expr += a[la-1];

    return expr;

}

wastefulSequence.prototype.length = Infinity;

wastefulSequence.prototype.Q = function (n){

    var d = digits(n).length;
    var f = factors(n);
    var x = 0;

    for(var i=0; i< f.length; i++){
        x += digits(f[i].prime).length;
        if(f[i].power != 1){
            x += digits(f[i].power).length;
        }
    }

    if(d < x){
        return true;
    }

    return false;
}
