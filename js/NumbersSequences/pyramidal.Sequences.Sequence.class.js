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
    if(!n) {
        throw new Error("n must be specified!")
    }
    else if (n<3 || n>8) {
        throw new Error("there is no sequence of this type")
    }

    this.getN = n;

    NumbersSequence.call(this);
}

pyramidalSequence.prototype = new NumbersSequence();

pyramidalSequence.prototype.constructor = pyramidalSequence;

pyramidalSequence.prototype.length = Infinity;

pyramidalSequence.prototype.getN = undefined;

pyramidalSequence.prototype.__defineGetter__('name',function(){
    if(this.getN == 3){
        return "tetrahedral";
    }
    if(this.getN == 4){
        return "square pyramidal";
    }
    if(this.getN == 5){
        return "pentagonal pyramidal";
    }
    if(this.getN == 6){
        return "hexagonal pyramidal";
    }
    if(this.getN == 7){
        return "heptagonal pyramidal";
    }
    if(this.getN == 8){
        return "octahedral";
    }
});

pyramidalSequence.prototype.Q = function (n){
    if(this.getN == 3){
        var x = Math.round(Math.pow(27*n+Math.sqrt(3)*Math.sqrt(243*n*n-1),-1/3)*Math.pow(3,-1/3)+Math.pow(27*n+Math.sqrt(3)*Math.sqrt(243*n*n-1),1/3)*Math.pow(3,-2/3)-1);

        if(x*(x+1)*(x+2)/6 == n){
            return true;
        }
    }
    if(this.getN == 4){
        var x = Math.round((Math.pow(108*n+Math.sqrt(3)*Math.sqrt(3888*n*n-1),-1/3)*Math.pow(3,-1/3)+Math.pow(108*n+Math.sqrt(3)*Math.sqrt(3888*n*n-1),1/3)*Math.pow(3,-2/3)-1)/2);

        if(x*(x+1)*(2*x+1)/6 == n){
            return true;
        }
    }
    if(this.getN == 5){
        var x = Math.round((Math.pow(27*n-1+3*Math.sqrt(3)*Math.sqrt(27*n*n-2*n),-1/3)+Math.pow(27*n-1+3*Math.sqrt(3)*Math.sqrt(27*n*n-2*n),1/3)-1)/3);

        if(x*x*(x+1)/2 == n){
            return true;
        }
    }
    if(this.getN == 6){
        var x = Math.round((7*Math.pow(432*n-27+2*Math.sqrt(3)*Math.sqrt(15552*n*n-1944*n-25),-1/3)*Math.pow(3,-1/3)+Math.pow(432*n-27+2*Math.sqrt(3)*Math.sqrt(15552*n*n-1944*n-25),1/3)*Math.pow(3,-2/3)-1)/4);

        if(x*(x+1)*(4*x-1)/6 == n){
            return true;
        }
    }
    if(this.getN == 7){
        var x = Math.round((13*Math.pow(675*n-54+5*Math.sqrt(3)*Math.sqrt(6075*n*n-972*n-49),-1/3)*Math.pow(3,-1/3)+Math.pow(675*n-54+5*Math.sqrt(3)*Math.sqrt(6075*n*n-972*n-49),1/3)*Math.pow(3,-2/3)-1)/5);

        if(x*(x+1)*(5*x-2)/6 == n){
            return true;
        }
    }
    if(this.getN == 8){
        var x = Math.round(Math.pow(27*n+Math.sqrt(3)*Math.sqrt(243*n*n+2),-1/3)*Math.pow(6,-1/3)+Math.pow(27*n+Math.sqrt(3)*Math.sqrt(243*n*n+2),1/3)*Math.pow(6,-2/3));

        if(x*(2*x*x+1)/3 == n){
            return true;
        }
    }
    return false;
}


































