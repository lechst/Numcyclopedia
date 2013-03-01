function pyramidalSequencesSequence() {
    Sequence.call(this);
}

pyramidalSequencesSequence.prototype = new Sequence();

pyramidalSequencesSequence.prototype.constructor = pyramidalSequencesSequence;

pyramidalSequencesSequence.prototype.name = 'pyramidal numbers';

pyramidalSequencesSequence.prototype.length = Infinity;

pyramidalSequencesSequence.prototype.getN = function(n){

    return new pyramidalSequence(n);

};




function pyramidalSequence(n) {

    NumbersSequence.call(this);

    if(!n) {
        throw new Error("n must be specified!")
    }

    this.final = true;
    this.N = n;

}

pyramidalSequence.prototype = new NumbersSequence();

pyramidalSequence.prototype.memberOf = [pyramidalSequencesSequence.prototype];

pyramidalSequence.prototype.constructor = pyramidalSequence;

pyramidalSequence.prototype.length = Infinity;

pyramidalSequence.prototype.final = false;

pyramidalSequence.prototype.getN = function(n){

    var r = this.N + 2;
    var x = n*(n+1)*((r-2)*n+(5-r))/6;

    return x;

};

pyramidalSequence.prototype.__defineGetter__('name',function(){
    var r = this.N + 2;

    return r+"-gonal pyramidal";
});

pyramidalSequence.prototype.Q = function (n){

    var r = this.N + 2;
    var z = (r-2)*(r-2)*(972*n*n*(r-2)*(r-2)-324*n*(r*r-7*r+12)-(2*r*r-17*r+35)*(2*r*r-17*r+35));
    var y = -108+54*n*(r-2)*(r-2)+63*r-9*r*r+Math.sqrt(3)*Math.sqrt(z);
    var x = Math.round((Math.pow(2/3,1/3)*(13-7*r+r*r)*Math.pow(y,-1/3)+Math.pow(2,-1/3)*Math.pow(3,-2/3)*Math.pow(y,1/3)-1)/(r-2));

    if((x*(x+1)*((r-2)*x+(5-r))/6) == n){
        return true;
    }

    return false;
}

pyramidalSequence.prototype.arrange3D = function(n){


    //działa to tak że kolka ktore maja rozne z moga sie nakladac, najlepij potestuj na tym prostym przykladzie

    var pos = {};
    pos.x = [1,1,0,0,0.25,0.6];
    pos.y = [1,0,1,0,0.25,1.5];
    pos.z = [0,0,0,0,1,-1];

    return pos;

};

pyramidalSequence.prototype.arrange3D.fill = true;






























