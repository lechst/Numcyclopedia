function primeSignaturePartition() {
    Partition.call(this);

    this.n = n;
    this.name = 'prime signature';
    moduloPartitionsSequence.prototype.length = n;

}

primeSignaturePartition.prototype = new Partition();
primeSignaturePartition.prototype.constructor = primeSignaturePartition;

primeSignaturePartition.prototype.Q = function(n){

    return primeSingature(n);

};

primeSignaturePartition.prototype.cachedParts = {};

primeSignaturePartition.prototype.getN = function(signature){

    if (this.cachedParts[signature.join('p')]){

        return this.cachedParts[signature.join('p')];
    }
    else
        return this.cachedParts[signature.join('p')] = new samePrimeSignatureSequence(signature);

};