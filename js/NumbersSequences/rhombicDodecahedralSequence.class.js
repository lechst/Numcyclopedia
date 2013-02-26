function rhombicDodecahedralSequence() {
    NumbersSequence.call(this);
}

rhombicDodecahedralSequence.prototype = new NumbersSequence();

rhombicDodecahedralSequence.prototype.constructor = rhombicDodecahedralSequence;

rhombicDodecahedralSequence.prototype.name = 'rhombic dodecahedral';

rhombicDodecahedralSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Rhombic_dodecahedral_number";
rhombicDodecahedralSequence.prototype.wolfram = "http://mathworld.wolfram.com/RhombicDodecahedralNumber.html";

rhombicDodecahedralSequence.prototype.length = Infinity;

rhombicDodecahedralSequence.prototype.Q = function (n){

    var x = Math.round((Math.pow(27*n+Math.sqrt(3)*Math.sqrt(243*n*n+1),-1/3)*Math.pow(3,-1/3)+Math.pow(27*n+Math.sqrt(3)*Math.sqrt(243*n*n+1),1/3)*Math.pow(3,-2/3)-1)/2);

    if((2*x-1)*(2*x*x-2*x+1)/3 == n){
        return true;
    }

    return false;
}

