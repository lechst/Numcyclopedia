function rhombicDodecahedralSequence() {
    NumbersSequence.call(this);
}

rhombicDodecahedralSequence.prototype = new NumbersSequence();

rhombicDodecahedralSequence.prototype.constructor = rhombicDodecahedralSequence;

rhombicDodecahedralSequence.prototype.name = 'rhombic dodecahedral';

rhombicDodecahedralSequence.prototype.wolfram = "http://mathworld.wolfram.com/RhombicDodecahedralNumber.html";
rhombicDodecahedralSequence.prototype.oeis = "005917";

rhombicDodecahedralSequence.prototype.length = Infinity;

rhombicDodecahedralSequence.prototype.getN = function (n){
    return (n*n*n*n-(n-1)*(n-1)*(n-1)*(n-1));
}

rhombicDodecahedralSequence.prototype.Q = function (n){

    var x = Math.round((1-Math.pow(9*n+Math.sqrt(3)*Math.sqrt(27*n*n+1),-1/3)*Math.pow(3,-1/3)+Math.pow(9*n+Math.sqrt(3)*Math.sqrt(27*n*n+1),1/3)*Math.pow(3,-2/3))/2);

    if((2*x-1)*(2*x*x-2*x+1) == n){
        return true;
    }

    return false;
}

