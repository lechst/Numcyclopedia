function centeredPolygonalSequencesSequence() {
    Sequence.call(this);
}

centeredPolygonalSequencesSequence.prototype = new Sequence();

centeredPolygonalSequencesSequence.prototype.constructor = centeredPolygonalSequencesSequence;

centeredPolygonalSequencesSequence.prototype.name = 'centered polygonal numbers';

centeredPolygonalSequencesSequence.prototype.length = Infinity;

centeredPolygonalSequencesSequence.prototype.getN = function(n){

    return new centeredPolygonalSequence(n);

};




function centeredPolygonalSequence(n) {

    NumbersSequence.call(this);

    if(!n) {
        throw new Error("n must be specified!")
    }
    this.final = true;
    this.N = n;

}

centeredPolygonalSequence.prototype = new NumbersSequence();

centeredPolygonalSequence.prototype.constructor = centeredPolygonalSequence;

centeredPolygonalSequence.prototype.length = Infinity;

centeredPolygonalSequence.prototype.final = false;

centeredPolygonalSequence.prototype.getN = function(n){

    var r = this.N + 2;
    var x = (r*n*(n-1))/2+1;

    return x;

};

centeredPolygonalSequence.prototype.__defineGetter__('name',function(){
    var r = this.N + 2;

    return "centered "+r+"-gonal";
});

centeredPolygonalSequence.prototype.Q = function (n){

    var r = this.N + 2;

    var x = Math.round((1+Math.sqrt(8*n+r-8)/Math.sqrt(r))/2);

    if(((r*x*(x-1))/2+1) == n){
        return true;
    }

    return false;
}



































