function polygonalSequencesSequence() {
    Sequence.call(this);
}

polygonalSequencesSequence.prototype = new Sequence();

polygonalSequencesSequence.prototype.constructor = polygonalSequencesSequence;

polygonalSequencesSequence.prototype.name = 'polygonal numbers';

polygonalSequencesSequence.prototype.length = Infinity;

polygonalSequencesSequence.prototype.getN = function(n){

    return new polygonalSequence(n);

};




function polygonalSequence(n) {

    NumbersSequence.call(this);

    if(!n) {
        throw new Error("n must be specified!")
    }
    this.final = true;
    this.N = n;

}

polygonalSequence.prototype = new NumbersSequence();

polygonalSequence.prototype.constructor = polygonalSequence;

polygonalSequence.prototype.length = Infinity;

polygonalSequence.prototype.final = false;

polygonalSequence.prototype.getN = function(n){

    var r = this.N + 2;
    var x = (n*n*(r-2)-n*(r-4))/2;

    return x;

};

polygonalSequence.prototype.__defineGetter__('name',function(){
    var r = this.N + 2;

    return r+"-gonal";
});

polygonalSequence.prototype.Q = function (n){

    var r = this.N + 2;

    var x = Math.round((r-4+Math.sqrt((r-4)*(r-4)+8*n*(r-2)))/(2*(r-2)));

    if(((x*x*(r-2)-x*(r-4))/2) == n){
        return true;
    }

    return false;
}



































