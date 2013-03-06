function stormerSequence() {
    NumbersSequence.call(this);
}

stormerSequence.prototype = new NumbersSequence();

stormerSequence.prototype.constructor = stormerSequence;

stormerSequence.prototype.name = 'St\u00f8rmer';

stormerSequence.prototype.wiki = "http://en.wikipedia.org/wiki/St\u00f8rmer_number";
stormerSequence.prototype.wolfram = "http://mathworld.wolfram.com/StormerNumber.html";

stormerSequence.prototype.texExpressionForN = function(x,n){

    var m = this.getN(n);
    var f = factors(m*m+1);
    var l = f.length;

    var expr = m+'^2+1=';

    for(var i=0; i<l-1; i++){
        expr += f[i].prime+'^{'+f[i].power+'}\\cdot';
    }

    expr += f[l-1].prime+'^{'+f[l-1].power+'}\\\\';

    expr += f[l-1].prime+'\\geq2\\cdot'+m;

    return expr;

}

stormerSequence.prototype.length = Infinity;

stormerSequence.prototype.Q = function (n){

    var f = factors(n*n+1);
    var l = f.length;

    if(f[l-1].prime >= 2*n){
        return true;
    }

    return false;
}
