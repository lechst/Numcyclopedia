//Ta klasa reprezentuje pewien podział liczb naturalnych
// http://en.wikipedia.org/wiki/Partition_of_a_set
//
// części podziału to zbiory liczb naturalnych czyli ciągi (reprezentowane przez
// klase Sequence)


function Partition(){}

Partition.prototype.length = undefined;
// length określa na ile części podział dzieli N


// Najprostszy podział na jednoelemntowe zbiory, po prostu na liczby naturalne

function naturalPartition() {
    Partition.call(this);
}

naturalPartition.prototype = new Partition();

naturalPartition.prototype.constructor = naturalPartition;

naturalPartition.prototype.name = "naturals";

naturalPartition.prototype.wiki = "http://en.wikipedia.org/wiki/Natural_number";
naturalPartition.prototype.wolfram = "http://mathworld.wolfram.com/NaturalNumber.html";

naturalPartition.prototype.length = Infinity;

naturalPartition.prototype.Q = function (n){
    return n;
};