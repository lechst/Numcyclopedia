function tetrahedralSequence() {
    NumbersSequence.call(this);
}

tetrahedralSequence.prototype = new NumbersSequence();

tetrahedralSequence.prototype.constructor = tetrahedralSequence;

tetrahedralSequence.prototype.name = 'tetrahedral';

tetrahedralSequence.prototype.wiki = "http://en.wikipedia.org/wiki/Tetrahedral_number";
tetrahedralSequence.prototype.wolfram = "http://mathworld.wolfram.com/TetrahedralNumber.html";

tetrahedralSequence.prototype.length = Infinity;

tetrahedralSequence.prototype.Q = function (n){

    var x = Math.round(Math.pow(27*n+Math.sqrt(3)*Math.sqrt(243*n*n-1),-1/3)*Math.pow(3,-1/3)+Math.pow(27*n+Math.sqrt(3)*Math.sqrt(243*n*n-1),1/3)*Math.pow(3,-2/3)-1);

    if(x*(x+1)*(x+2)/6 == n){
        return true;
    }

    return false;
}

