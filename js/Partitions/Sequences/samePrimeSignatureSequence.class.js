function samePrimeSignatureSequence(signature) {
    NumbersSequence.call(this);
    this.signature = signature;
}

samePrimeSignatureSequence.prototype = new NumbersSequence();

samePrimeSignatureSequence.prototype.final = false;

samePrimeSignatureSequence.prototype.partMemberOf = [primeSignaturePartition.prototype];

samePrimeSignatureSequence.prototype.constructor = samePrimeSignatureSequence;

//TODO zdefiniowac getter z nazwa
samePrimeSignatureSequence.prototype.name = 'prime signature';

samePrimeSignatureSequence.prototype.length = Infinity;

samePrimeSignatureSequence.prototype.Q = function (n){

    return flatCompare(this.signature,primeSingature(n));

}

samePrimeSignatureSequence.prototype.boxModule = function(n){
    return new barsModule({size:25},this.signature);
}

samePrimeSignatureSequence.prototype.texExpressionForN = function(x,n){


    var expr = this.signature.map(function(p,i){return "p_{"+i+"}^"+p}).join("\\times ")

    return expr;

}