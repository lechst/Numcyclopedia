function polygonalSequencesSequence() {
    Sequence.call(this);
}

polygonalSequencesSequence.prototype = new Sequence();

polygonalSequencesSequence.prototype.constructor = polygonalSequencesSequence;

polygonalSequencesSequence.prototype.name = 'polygonal numbers';

polygonalSequencesSequence.prototype.texExpression = "\\frac{n^2 (r-2) - n (r-4)}{2}";

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

polygonalSequence.prototype.memberOf = [polygonalSequencesSequence.prototype];

polygonalSequence.prototype.final = false;

polygonalSequence.prototype.__defineGetter__('texExpression',function(){

    if(this.N==1)
    {
        return "\\frac{n^2 "+this.N+" + n }{2}";
    }
    else
    {
        //return "\\frac{n^2 ("+(this.N+2)+"-2) - n ("+(this.N+2)+"-4)}{2}";
        return "\\frac{n^2 "+(this.N)+" - ("+(this.N-2)+" n}{2}";
    }
})

polygonalSequence.prototype.texExpressionForN = function(x,n){

    var thisN = this.N>1?String(this.N):"";

    var expr = "\\frac{"+thisN+"n(n-1)}{2} + 1"
    //expr += "\\\\"+String(x)+"=\\frac{"+thisN+"("+String(n)+"("+String(n)+"-1))}{2} + 1";

    return expr;

}

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

polygonalSequence.prototype.arrange = function(n){

    var pos = {};
    pos.x = [];
    pos.y = [];

    var r = this.N + 2;
    var alpha = 2*Math.PI/r;

    var x = 0;
    var y = 0;

    pos.x.push(x);
    pos.y.push(y);

    for(var i=1; i<n; i++){
        x = i;
        y = 0;

        pos.x.push(x);
        pos.y.push(y);

        for(var j=0; j<(r-2); j++){
            for(var k=0; k<i; k++){
                pos.x.push(x+(k+1)*Math.cos(alpha));
                pos.y.push(y-(k+1)*Math.sin(alpha));
            }
            x = pos.x[pos.x.length-1];
            y = pos.y[pos.y.length-1];
            alpha = alpha + 2*Math.PI/r;
        }

        alpha = 2*Math.PI/r;
    }

    return pos;

};

































