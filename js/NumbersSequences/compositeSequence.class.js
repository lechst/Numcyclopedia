function compositeSequence() {
    NumbersSequence.call(this);
}

compositeSequence.prototype = new NumbersSequence();

compositeSequence.prototype.constructor = compositeSequence;

compositeSequence.prototype.name = 'composite';

compositeSequence.prototype.oeis = "002808";

compositeSequence.prototype.texExpressionForN = function(n){

    var expr = "";

    var fac = factors(n);

    for(facId in fac)
    {
        expr += fac[facId].prime + "^" + fac[facId].power;

        if(facId<fac.length-1){
            expr +="\\times";
        }
    }

    return expr;

}

compositeSequence.prototype.length = Infinity;

compositeSequence.prototype.Q = function (n){

    if (n==0 || n==1){
        return false;
    }

    for (var i=2;i<n;i++){

        if(n%i==0){
            return true;
        }
    }

    return false;
}


