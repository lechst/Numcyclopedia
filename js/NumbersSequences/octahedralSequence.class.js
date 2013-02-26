function octahedralSequence() {
    NumbersSequence.call(this);
}

octahedralSequence.prototype = new NumbersSequence();

octahedralSequence.prototype.constructor = octahedralSequence;

octahedralSequence.prototype.name = 'octahedral';

octahedralSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Octahedral_number";
octahedralSequence.prototype.wolfram = "http://mathworld.wolfram.com/OctahedralNumber.html";

octahedralSequence.prototype.length = Infinity;

octahedralSequence.prototype.Q = function (n){

    var x = Math.round(Math.pow(27*n+Math.sqrt(3)*Math.sqrt(243*n*n+2),-1/3)*Math.pow(6,-1/3)+Math.pow(27*n+Math.sqrt(3)*Math.sqrt(243*n*n+2),1/3)*Math.pow(6,-2/3));

    if(x*(2*x*x+1)/3 == n){
        return true;
    }

    return false;
}

