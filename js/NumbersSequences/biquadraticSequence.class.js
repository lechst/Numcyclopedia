function biquadraticSequence() {
    NumbersSequence.call(this);
}

biquadraticSequence.prototype = new NumbersSequence();

biquadraticSequence.prototype.constructor = biquadraticSequence;

biquadraticSequence.prototype.name = 'biquadratic';

biquadraticSequence.prototype.wolfram = "http://mathworld.wolfram.com/BiquadraticNumber.html";
biquadraticSequence.prototype.oeis = "000583";

biquadraticSequence.prototype.length = Infinity;

biquadraticSequence.prototype.texExpression = "n^4";

biquadraticSequence.prototype.texExpressionForN = function(x,n){


    var expr = n+"^"+4;
   // if(n>2)
   //     expr += "\\\\"+(String(x)+"="+String(this.getN(n-1)+"+"+String(this.getN(n-2))));

    return expr;

}


biquadraticSequence.prototype.Q = function (n){

    var x = Math.round(Math.pow(n,1/4));

    if(x*x*x*x == n){
        return true;
    }

    return false;
}

biquadraticSequence.prototype.getN = function (n){
    return n*n*n*n;
}

biquadraticSequence.prototype.arrange = function(n){

    var pos = {};
    pos.x = [];
    pos.y = [];


    for(var i=0; i<n; i++){
        for(var j=0; j<n; j++){
            for(var ii=0; ii<n; ii++){
                for(var jj=0; jj<n; jj++){
                    pos.x.push(1.2*n*i+ii);
                    pos.y.push(1.2*n*j+jj);
                }
            }
        }
    }

    return pos;

};