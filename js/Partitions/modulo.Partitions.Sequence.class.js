function moduloPartitionsSequence() {
    Sequence.call(this);
}

moduloPartitionsSequence.prototype = new Sequence();

moduloPartitionsSequence.prototype.constructor = moduloPartitionsSequence;

moduloPartitionsSequence.prototype.name = 'modulo partitions';

moduloPartitionsSequence.prototype.length = Infinity;

moduloPartitionsSequence.prototype.getN = function(n){

    return new moduloPartition(n);

};




function moduloPartition(n) {
    Partition.call(this);

    this.n = n;
    this.name = 'modulo partition '+n;
    moduloPartitionsSequence.prototype.length = n;

}

moduloPartition.prototype = new Partition();
moduloPartition.prototype.constructor = moduloPartition;

moduloPartitionsSequence.prototype.getN = function(n){

    return n%this.n;

};