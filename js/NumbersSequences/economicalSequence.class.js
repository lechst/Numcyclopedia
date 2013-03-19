function economicalSequence() {
    NumbersSequence.call(this);
}

economicalSequence.prototype = new NumbersSequence();

economicalSequence.prototype.constructor = economicalSequence;

economicalSequence.prototype.name = 'economical';

economicalSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Frugal_number";
economicalSequence.prototype.wolfram = "http://mathworld.wolfram.com/EconomicalNumber.html";

economicalSequence.prototype.texExpressionForN = function(x,n){

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

    expr += d+'>';

    var la = a.length;

    for(var i=0; i<la-1; i++){
        expr += a[i]+'+';
    }

    expr += a[la-1];

    return expr;

}

economicalSequence.prototype.length = Infinity;

economicalSequence.prototype.Q = function (n){

    var d = digits(n).length;
    var f = factors(n);
    var x = 0;

    for(var i=0; i< f.length; i++){
        x += digits(f[i].prime).length;
        if(f[i].power != 1){
            x += digits(f[i].power).length;
        }
    }

    if(d > x){
        return true;
    }

    return false;
}