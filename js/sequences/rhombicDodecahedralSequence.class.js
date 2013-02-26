function rhombicDodecahedralSequence() {
    Sequence.call(this);
}

rhombicDodecahedralSequence.prototype = new Sequence();

rhombicDodecahedralSequence.prototype.constructor = rhombicDodecahedralSequence;

rhombicDodecahedralSequence.prototype.name = 'rhombic dodecahedral';

rhombicDodecahedralSequence.prototype.length = Infinity;

rhombicDodecahedralSequence.prototype.Q = function (n){

    var x = Math.round((Math.pow(27*n+Math.sqrt(3)*Math.sqrt(243*n*n+1),-1/3)*Math.pow(3,-1/3)+Math.pow(27*n+Math.sqrt(3)*Math.sqrt(243*n*n+1),1/3)*Math.pow(3,-2/3)-1)/2);

    if((2*x-1)*(2*x*x-2*x+1)/3 == n){
        return true;
    }

    return false;
}

