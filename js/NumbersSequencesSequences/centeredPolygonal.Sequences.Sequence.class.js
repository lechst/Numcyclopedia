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

centeredPolygonalSequence.prototype.memberOf = [centeredPolygonalSequencesSequence.prototype];

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

centeredPolygonalSequence.prototype.arrange = function(n){

    var pos = {};
    pos.x = [];
    pos.y = [];

    var r = this.N + 2;
    var alpha = Math.PI/2+Math.PI/r;
    var s = 2*Math.sin(Math.PI/r);

    var x = 0;
    var y = 0;

    pos.x.push(x);
    pos.y.push(y);

    for(var i=1; i<n; i++){
        x = i;
        y = 0;

        for(var j=0; j<r; j++){
            for(var k=0; k<i; k++){
                pos.x.push(x+(k+1)*Math.cos(alpha)*s);
                pos.y.push(y-(k+1)*Math.sin(alpha)*s);
            }
            x = pos.x[pos.x.length-1];
            y = pos.y[pos.y.length-1];
            alpha = alpha + 2*Math.PI/r;
        }

        alpha = Math.PI/2+Math.PI/r;
    }

    return pos;

};
































